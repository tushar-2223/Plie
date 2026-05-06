import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../../utils';

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
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.PRIMARY,
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default styles;
