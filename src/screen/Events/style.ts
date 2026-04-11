import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SCREEN_BG,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SCREEN_BG,
  },
  listContent: {
    paddingVertical: 8,
    paddingBottom: 24,
  },
});

export default styles;
