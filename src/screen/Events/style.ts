import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
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
});

export default styles;
