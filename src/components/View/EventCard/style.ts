import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../../utils';

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.CARD_BG,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    // Removed shadows to match the clean flat look in the image
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
  },
  eventImage: {
    width: 90,
    height: 90,
    borderRadius: 6,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  eventName: {
    fontFamily: Typography.fontFamily.semiBold,
    fontSize: 16,
    lineHeight: 16 * 1.2,
    letterSpacing: 0,
    color: '#000000',
    flex: 1,
    marginRight: 4,
  },
  dateLocationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  eventDate: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: 14,
    color: '#21D0B2',
    flex: 1,
  },
  locationText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 14,
    color: '#999999',
    textAlign: 'right',
  },
  eventPrice: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 14,
    color: '#999999',
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  tagsContainer: {
    flex: 1,
    marginRight: 8,
  },
  tagsContentContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#F3F6FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  tagText: {
    fontFamily: Typography.fontFamily.semiBold,
    fontSize: 12,
    color: '#4B5563',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});

export default styles;
