import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SCREEN_BG,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontFamily: Typography.fontFamily.semiBold,
    fontSize: 22,
    color: Colors.DARK,
    marginTop: 16,
  },
  subtitle: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 14,
    color: Colors.TEXT,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default styles;
