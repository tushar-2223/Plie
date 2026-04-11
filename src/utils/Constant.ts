import {Dimensions} from 'react-native';

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;

const REGEX: {
  email: RegExp;
  password: RegExp;
} = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/,
};

const API_BASE_URL =
  'https://techeruditestaging.com/projects/plie-api/public/api';

export {width, height, REGEX, API_BASE_URL};
