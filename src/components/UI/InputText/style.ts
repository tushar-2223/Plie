import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';

const styles = StyleSheet.create({
  inputField: {
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: Colors.DARK,
    fontWeight: '500',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 6,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.DARK,
  },
  eyeIcon: {
    paddingHorizontal: 12,
  },
  error: {
    color: Colors.ERROR,
    fontSize: 12,
    marginTop: 4,
  },
});

export default styles;
