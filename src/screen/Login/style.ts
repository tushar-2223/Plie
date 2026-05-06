import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../utils';
import {height} from '../../utils/Constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: Colors.PRIMARY,
  },
  headerArea: {
    backgroundColor: '#D1D1D1',
    alignItems: 'center',
    height: height * 0.38,
    justifyContent: 'center',
    paddingTop: 20,
  },
  logoText: {
    fontFamily: Typography.fontFamily.light,
    fontSize: 60,
    color: '#000',
    letterSpacing: 2,
    marginBottom: 60,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImage: {
    width: 60,
    height: 60,
    tintColor: '#333',
  },
  formArea: {
    paddingHorizontal: 28,
    paddingTop: 32,
    paddingBottom: 40, // Increased padding to allow scrolling past the keyboard
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flex: 1,
  },
  inputGap: {
    marginBottom: 20,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginTop: 0, // Adjusted for new input layout
  },
  forgotText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 11,
    color: '#888',
  },
  signInRow: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  signInButton: {
    // Ensuring it doesn't shrink and aligns well
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  notMemberText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 11,
    color: '#000',
  },
  signUpText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 11,
    color: '#000',
    textDecorationLine: 'underline',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    gap: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },
  dividerText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 11,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 24,
  },
  socialButton: {
    width: 46,
    height: 46,
    borderRadius: 2,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  guestContainer: {
    alignSelf: 'flex-end',
    marginTop: 40,
    marginBottom: 20,
  },
  guestText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 12,
    color: '#888',
  },
});

export default styles;
