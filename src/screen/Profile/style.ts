import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SCREEN_BG,
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  nameText: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: 22,
    color: Colors.DARK,
  },
  emailText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 14,
    color: Colors.TEXT,
    marginTop: 4,
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  logoutText: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: 16,
    color: Colors.ERROR,
  },
});

export default styles;
