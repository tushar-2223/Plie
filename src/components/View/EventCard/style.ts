import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.CARD_BG,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    position: 'relative',
  },
  arrowContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
  },
  cardContent: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 20,
  },
  eventImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  eventName: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.DARK,
    marginBottom: 2,
  },
  eventDate: {
    fontSize: 12,
    color: Colors.ACCENT,
    marginBottom: 2,
  },
  eventPrice: {
    fontSize: 12,
    color: Colors.TEXT,
    marginBottom: 6,
  },
  locationText: {
    position: 'absolute',
    top: 0,
    right: 30,
    fontSize: 11,
    color: Colors.TEXT,
    textAlign: 'right',
    maxWidth: 100,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: Colors.BORDER,
  },
  tagText: {
    fontSize: 11,
    color: Colors.TAG_TEXT,
    fontWeight: '500',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
});

export default styles;
