import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#21D0B2',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 120, // Predefined minWidth to avoid shrinking
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
