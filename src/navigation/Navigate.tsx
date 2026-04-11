import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/Splash';
import Authenticated from './Authenticated';
import UnAuthenticated from './UnAuthenticated';
import Routes from './Routes';

export type RootNavigatorType = {
  Splash: undefined;
  Authenticated: undefined;
  UnAuthenticated: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorType>();

const Navigate = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Splash}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name={Routes.Splash} component={Splash} />
      <Stack.Screen
        name={Routes.UnAuthenticated}
        component={UnAuthenticated}
      />
      <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
    </Stack.Navigator>
  );
};

export default Navigate;
