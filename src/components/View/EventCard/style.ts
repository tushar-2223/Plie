import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.CARD_BG,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 12,
  },
  eventImage: {
    width: 76,
    height: 76,
    borderRadius: 8,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  eventName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    marginRight: 8,
  },
  dateLocationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  eventDate: {
    fontSize: 13,
    color: '#21D0B2',
    flex: 1,
  },
  locationText: {
    fontSize: 12,
    color: '#A0A0A0',
    marginLeft: 8,
    maxWidth: 120,
    textAlign: 'right',
  },
  eventPrice: {
    fontSize: 12,
    color: '#8A8A8E',
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    gap: 6,
  },
  tag: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagText: {
    fontSize: 11,
    color: '#4A4A4A',
    fontWeight: '500',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 16,
    marginLeft: 8,
  },
});

export default styles;
