import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {View, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import EventCard from '../../components/View/EventCard';
import {RootState} from '../../redux-toolkit/store';
import {toggleFavorite} from '../../redux-toolkit/rootSlice';
import {api} from '../../network/api';
import {API_ENDPOINTS} from '../../network/apiConst';
import {EventItem, EventsResponse} from '../../utils/Types';
import {Colors, Strings} from '../../utils';
import styles from './style';

const Events = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const token = useSelector((state: RootState) => state.app.token);
  const favoriteItems = useSelector((state: RootState) => state.app.favorites);
  const dispatch = useDispatch();

  const favoriteIds = useMemo(
    () => new Set(favoriteItems.map(item => item.event_date_id)),
    [favoriteItems],
  );

  const fetchEvents = useCallback(async (isRefresh = false) => {
    if (!token) {
      setLoading(false);
      setRefreshing(false);
      return;
    }

    if (!isRefresh) {
      setLoading(true);
    }

    try {
      const payload = await api.post<EventsResponse>(
        API_ENDPOINTS.EVENTS_LISTING,
        {},
      );
      if (payload.data && payload.data.events) {
        setEvents(payload.data.events);
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message ?? 'Failed to fetch events',
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [token]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchEvents(true);
  }, [fetchEvents]);

  const handleToggleFavorite = useCallback((event: EventItem) => {
    dispatch(toggleFavorite(event));
    const isFav = favoriteIds.has(event.event_date_id);
    Toast.show({
      type: 'success',
      text1: isFav ? Strings.removedFromFavourites : Strings.addedToFavourites,
      visibilityTime: 1500,
    });
  }, [dispatch, favoriteIds]);

  const renderItem = useCallback(({item}: {item: EventItem}) => (
    <EventCard
      event={item}
      isFavorite={favoriteIds.has(item.event_date_id)}
      onToggleFavorite={handleToggleFavorite}
    />
  ), [favoriteIds, handleToggleFavorite]);

  const keyExtractor = useCallback((item: EventItem) => item.event_date_id.toString(), []);

  if (loading && !refreshing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.ACCENT} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={Colors.ACCENT}
            colors={[Colors.ACCENT]}
          />
        }
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </SafeAreaView>
  );
};

export default Events;
