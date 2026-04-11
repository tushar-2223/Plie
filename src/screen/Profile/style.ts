import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

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
    fontSize: 22,
    fontWeight: '700',
    color: Colors.DARK,
  },
  emailText: {
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
    fontSize: 16,
    color: Colors.ERROR,
    fontWeight: '500',
  },
});

export default styles;
