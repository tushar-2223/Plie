import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Routes from './Routes';
import Events from '../screen/Events';
import Favourites from '../screen/Favourites';
import Search from '../screen/Search';
import Profile from '../screen/Profile';
import {Colors, Strings} from '../utils';

export type AuthenticatedNavigatorType = {
  Search: undefined;
  Events: undefined;
  Favourites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AuthenticatedNavigatorType>();

const Authenticated = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Events}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.ACCENT,
        tabBarInactiveTintColor: Colors.TAB_INACTIVE,
        tabBarStyle: {
          backgroundColor: Colors.PRIMARY,
          borderTopWidth: 1,
          borderTopColor: Colors.BORDER,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name={Routes.Search}
        component={Search}
        options={{
          tabBarLabel: Strings.search,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Events}
        component={Events}
        options={{
          tabBarLabel: Strings.events,
          tabBarIcon: ({color, size}) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Favourites}
        component={Favourites}
        options={{
          tabBarLabel: Strings.favourites,
          tabBarIcon: ({color, size}) => (
            <Icon name="favorite" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarLabel: Strings.profile,
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Authenticated;
