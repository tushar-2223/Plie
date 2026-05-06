import {StyleSheet} from 'react-native';
import {Typography} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1D1D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: Typography.fontFamily.light,
    fontSize: 72,
    color: '#000',
    letterSpacing: 2,
    marginBottom: 60,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImage: {
    width: 80,
    height: 80,
    tintColor: '#333',
  },
});

export default styles;
