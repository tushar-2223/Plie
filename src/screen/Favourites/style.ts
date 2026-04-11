import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SCREEN_BG,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.DARK,
  },
  subtitleText: {
    fontSize: 15,
    color: Colors.TEXT,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.BORDER,
    marginHorizontal: 20,
  },
  listContent: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  emptyListContent: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.DARK,
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: Colors.TEXT,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
});

export default styles;
