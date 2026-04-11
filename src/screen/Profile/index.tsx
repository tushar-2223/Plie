import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {RootState} from '../../redux-toolkit/store';
import {logout} from '../../redux-toolkit/rootSlice';
import {Colors, Strings} from '../../utils';
import Routes from '../../navigation/Routes';
import styles from './style';

const Profile = () => {
  const user = useSelector((state: RootState) => state.app.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout());

    Toast.show({
      type: 'success',
      text1: Strings.logOutSuccess,
    });

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Routes.UnAuthenticated}],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Icon name="account-circle" size={80} color={Colors.ACCENT} />
        </View>
        <Text style={styles.nameText}>
          {user ? `${user.usr_fname} ${user.usr_lname}` : 'User'}
        </Text>
        <Text style={styles.emailText}>{user?.usr_email ?? ''}</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Icon name="logout" size={24} color={Colors.ERROR} />
          <Text style={styles.logoutText}>{Strings.logOut}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
