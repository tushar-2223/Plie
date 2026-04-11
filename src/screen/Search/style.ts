import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.DARK,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.TEXT,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default styles;
