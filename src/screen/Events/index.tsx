import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import EventCard from '../../components/View/EventCard';
import {RootState} from '../../redux-toolkit/store';
import {toggleFavorite} from '../../redux-toolkit/rootSlice';
import {api} from '../../services/api';
import {EventItem} from '../../utils/Types';
import {Colors, Strings} from '../../utils';
import styles from './style';

const Events = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.app.user);
  const token = useSelector((state: RootState) => state.app.token);
  const favoriteItems = useSelector((state: RootState) => state.app.favorites);
  const dispatch = useDispatch();

  const favoriteIds = new Set(favoriteItems.map(item => item.event_date_id));

  const fetchEvents = async () => {
    if (!token) {
      return;
    }
    try {
      const result = await api.getEvents(token);
      if (result.kind === 'ok') {
        const payload = result.response;
        if (payload.data && payload.data.events) {
          setEvents(payload.data.events);
        }
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `Failed to fetch events: ${result.kind}`,
        });
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
  };

  useEffect(() => {
    fetchEvents();
  }, [token]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchEvents();
  };

  const handleToggleFavorite = (event: EventItem) => {
    dispatch(toggleFavorite(event));
    const isFav = favoriteIds.has(event.event_date_id);
    Toast.show({
      type: 'success',
      text1: isFav ? Strings.removedFromFavourites : Strings.addedToFavourites,
      visibilityTime: 1500,
    });
  };

  const renderItem = ({item}: {item: EventItem}) => (
    <EventCard
      event={item}
      isFavorite={favoriteIds.has(item.event_date_id)}
      onToggleFavorite={handleToggleFavorite}
    />
  );

  const keyExtractor = (item: EventItem) => item.event_date_id.toString();

  const userName = user?.usr_fname ?? 'User';

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.ACCENT} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>
          {Strings.hello} {userName}!
        </Text>
        <Text style={styles.subtitleText}>{Strings.readyToDance}</Text>
      </View>

      <View style={styles.divider} />

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
    </View>
  );
};

export default Events;
