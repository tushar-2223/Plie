import React from 'react';
import {View, Text, Image, TouchableOpacity, Share} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EventItem} from '../../../utils/Types';
import {Colors} from '../../../utils';
import styles from './style';

interface Props {
  event: EventItem;
  isFavorite: boolean;
  onToggleFavorite: (event: EventItem) => void;
  onShare?: (event: EventItem) => void;
}

const EventCard = ({event, isFavorite, onToggleFavorite, onShare}: Props) => {
  const handleToggleFavorite = () => {
    onToggleFavorite(event);
  };

  const handleShare = async () => {
    if (onShare) {
      onShare(event);
    } else {
      try {
        await Share.share({
          message: `${event.event_name}\n${event.event_url}`,
          url: event.event_url,
        });
      } catch (error: any) {
        console.log('Error sharing:', error.message);
      }
    }
  };

  const getDisplayDate = (): string => {
    if (event.readable_from_date && event.readable_to_date) {
      return `${event.readable_from_date} – ${event.readable_to_date}`;
    }
    return event.readable_from_date ?? '';
  };

  const getDisplayPrice = (): string => {
    if (event.event_price_from || event.event_price_to) {
      return `€${event.event_price_from} – €${event.event_price_to}`;
    }
    return '';
  };

  const getDisplayLocation = (): string => {
    const parts = [event.city, event.country].filter(Boolean);
    return parts.join(', ') || event.location || '';
  };

  const getTags = (): string[] => {
    const tags: string[] = [];
    if (event.keywords && event.keywords.length > 0) {
      tags.push(...event.keywords);
    }
    if (event.danceStyles && event.danceStyles.length > 0) {
      tags.push(...event.danceStyles.map(ds => ds.ds_name));
    }
    return Array.from(new Set(tags));
  };

  const tags = getTags();
  const displayDate = getDisplayDate();
  const displayPrice = getDisplayPrice();
  const displayLocation = getDisplayLocation();

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.arrowContainer} activeOpacity={0.6}>
        <Icon name="arrow-right" size={20} color={Colors.DARK} />
      </TouchableOpacity>

      <View style={styles.cardContent}>
        {(event.event_profile_img ?? event.event_profile_pic) && (
          <Image
            source={{uri: event.event_profile_img ?? event.event_profile_pic}}
            style={styles.eventImage}
            resizeMode="cover"
          />
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.eventName} numberOfLines={1}>
            {event.event_name}
          </Text>

          {displayDate !== '' && (
            <Text style={styles.eventDate}>{displayDate}</Text>
          )}

          {displayPrice !== '' && (
            <Text style={styles.eventPrice}>{displayPrice}</Text>
          )}

          {tags.length > 0 && (
            <View style={styles.tagsContainer}>
              {tags.slice(0, 4).map((tag, index) => (
                <View key={`${tag}-${index}`} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {displayLocation !== '' && (
          <Text style={styles.locationText} numberOfLines={2}>
            {displayLocation}
          </Text>
        )}
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={handleShare}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          activeOpacity={0.6}>
          <Icon name="export-variant" size={22} color={Colors.DARK} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleToggleFavorite}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          activeOpacity={0.6}>
          <Icon
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? Colors.ACCENT : Colors.LIGHT_TEXT}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventCard;
