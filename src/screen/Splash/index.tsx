import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonActions} from '@react-navigation/native';
import {RootState} from '../../redux-toolkit/store';
import {RootNavigatorType} from '../../navigation/Navigate';
import Routes from '../../navigation/Routes';
import {Strings, Assets} from '../../utils';
import styles from './style';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorType, 'Splash'>;
}

const Splash = ({navigation}: Props) => {
  const token = useSelector((state: RootState) => state.app.token);
  const user = useSelector((state: RootState) => state.app.user);

  useEffect(() => {
    const checkUser = setTimeout(() => {
      if (token && user) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: Routes.Authenticated}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: Routes.UnAuthenticated}],
          }),
        );
      }
    }, 2000);

    return () => clearTimeout(checkUser);
  }, [token, user, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>{Strings.appName}</Text>
      <View style={styles.imagePlaceholder}>
        <Image
          source={Assets.placeholder}
          style={styles.placeholderImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Splash;
