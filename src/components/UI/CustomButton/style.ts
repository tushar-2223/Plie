import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.ACCENT,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 120,
  },
  buttonText: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default styles;
