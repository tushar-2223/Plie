import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import Login from '../screen/Login';
import {Colors} from '../utils';

export type UnAuthenticatedNavigatorType = {
  Login: undefined;
};

const Stack = createNativeStackNavigator<UnAuthenticatedNavigatorType>();

const UnAuthenticated = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.PRIMARY,
        },
      }}
      initialRouteName={Routes.Login}>
      <Stack.Screen name={Routes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default UnAuthenticated;
