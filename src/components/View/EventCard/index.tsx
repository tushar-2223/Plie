import React from 'react';
import {View, Text, Image, TouchableOpacity, Share, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EventItem} from '../../../utils/Types';
import {Assets, Colors} from '../../../utils';
import styles from './style';

interface Props {
  event: EventItem;
  isFavorite: boolean;
  onToggleFavorite: (event: EventItem) => void;
  onShare?: (event: EventItem) => void;
}

const EventCard = ({event, isFavorite, onToggleFavorite, onShare}: Props) => {
  const [imageError, setImageError] = React.useState(false);

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
    return parts.join(', ');
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

  const imageUrl = event.event_profile_img ?? event.event_profile_pic;

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={
            !imageError && imageUrl
              ? {uri: imageUrl}
              : Assets.placeholder
          }
          style={styles.eventImage}
          resizeMode="cover"
          onError={() => setImageError(true)}
        />

        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.eventName} numberOfLines={1}>
              {event.event_name}
            </Text>
            <TouchableOpacity hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
              <Icon name="arrow-right" size={20} color={Colors.DARK} />
            </TouchableOpacity>
          </View>

          <View style={styles.dateLocationRow}>
            <Text style={styles.eventDate} numberOfLines={1}>{displayDate}</Text>
            <Text style={styles.locationText} numberOfLines={1}>{displayLocation}</Text>
          </View>

          {displayPrice !== '' && (
            <Text style={styles.eventPrice} numberOfLines={1}>{displayPrice}</Text>
          )}

          <View style={styles.bottomRow}>
            {tags.length > 0 && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tagsContainer}
                contentContainerStyle={styles.tagsContentContainer}>
                {tags.map((tag, index) => (
                  <View key={`${tag}-${index}`} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </ScrollView>
            )}

            <View style={styles.actionsContainer}>
              <TouchableOpacity
                onPress={handleShare}
                hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
                activeOpacity={0.6}>
                <Icon name="share-outline" size={24} color={Colors.DARK} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleToggleFavorite}
                hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
                activeOpacity={0.6}>
                <Icon
                  name={isFavorite ? 'heart' : 'heart-outline'}
                  size={26}
                  color={isFavorite ? '#21D0B2' : Colors.DARK}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
