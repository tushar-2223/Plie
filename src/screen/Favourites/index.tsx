import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EventCard from '../../components/View/EventCard';
import {RootState} from '../../redux-toolkit/store';
import {toggleFavorite} from '../../redux-toolkit/rootSlice';
import {EventItem} from '../../utils/Types';
import {Colors, Strings} from '../../utils';
import styles from './style';

const Favourites = () => {
  const favoriteItems = useSelector((state: RootState) => state.app.favorites);
  const dispatch = useDispatch();

  const favoriteIds = new Set(favoriteItems.map(item => item.event_date_id));

  const handleToggleFavorite = (event: EventItem) => {
      dispatch(toggleFavorite(event));
      Toast.show({
        type: 'success',
        text1: Strings.removedFromFavourites,
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

  const ListEmptyComponent = (
      <View style={styles.emptyContainer}>
        <Icon name="heart-outline" size={64} color={Colors.BORDER} />
        <Text style={styles.emptyTitle}>{Strings.noFavourites}</Text>
        <Text style={styles.emptySubtext}>{Strings.noFavouritesSubtext}</Text>
      </View>
    );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <FlatList
        data={favoriteItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={[
          styles.listContent,
          favoriteItems.length === 0 && styles.emptyListContent,
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default Favourites;
