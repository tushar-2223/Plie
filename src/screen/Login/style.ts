import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';
import {height, width} from '../../utils/Constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  headerArea: {
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingTop: height * 0.06,
    paddingBottom: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  logoText: {
    fontSize: 42,
    fontWeight: '300',
    color: Colors.DARK,
    letterSpacing: 2,
    marginBottom: 30,
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImage: {
    width: 60,
    height: 60,
    tintColor: '#999',
  },
  formArea: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginTop: 8,
    marginBottom: 4,
  },
  forgotText: {
    fontSize: 13,
    color: Colors.TEXT,
  },
  signInRow: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  notMemberText: {
    fontSize: 14,
    color: Colors.DARK,
  },
  signUpText: {
    fontSize: 14,
    color: Colors.DARK,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.BORDER,
  },
  dividerText: {
    fontSize: 13,
    color: Colors.TEXT,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 30,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: Colors.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.BORDER,
  },
  socialIcon: {
    width: 28,
    height: 28,
  },
  guestContainer: {
    alignSelf: 'flex-end',
    marginTop: 30,
    marginBottom: 10,
  },
  guestText: {
    fontSize: 14,
    color: Colors.TEXT,
  },
});

export default styles;
