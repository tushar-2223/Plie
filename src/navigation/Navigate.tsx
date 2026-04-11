import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authenticated from './Authenticated';
import UnAuthenticated from './UnAuthenticated';
import Routes from './Routes';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-toolkit/store';

export type RootNavigatorType = {
  Authenticated: undefined;
  UnAuthenticated: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorType>();

const Navigate = () => {
  const token = useSelector((state: RootState) => state.app.token);

  return (
    <Stack.Navigator
      initialRouteName={
        token ? Routes.Authenticated : Routes.UnAuthenticated
      }
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen
        name={Routes.UnAuthenticated}
        component={UnAuthenticated}
      />
      <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
    </Stack.Navigator>
  );
};

export default Navigate;
