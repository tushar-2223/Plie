import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Routes from './Routes';
import Events from '../screen/Events';
import Favourites from '../screen/Favourites';
import Search from '../screen/Search';
import Profile from '../screen/Profile';
import {Colors, Strings, Typography} from '../utils';
import {RootState} from '../redux-toolkit/store';

export type AuthenticatedNavigatorType = {
  Search: undefined;
  Events: undefined;
  Favourites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AuthenticatedNavigatorType>();

const CustomHeaderTitle = ({subtitle}: {subtitle?: string}) => {
  const user = useSelector((state: RootState) => state.app.user);
  const userName = user?.usr_fname ?? 'User';

  return (
    <View style={navStyles.headerContainer}>
      <Text style={navStyles.greetingText}>
        {Strings.hello} {userName}!
      </Text>
      {subtitle && <Text style={navStyles.subtitleText}>{subtitle}</Text>}
    </View>
  );
};

const Authenticated = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName={Routes.Events}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: Colors.BORDER,
          height: 120 + insets.top,
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontFamily: Typography.fontFamily.semiBold,
          marginLeft: 0,
        },
        tabBarActiveTintColor: Colors.ACCENT,
        tabBarInactiveTintColor: Colors.TAB_INACTIVE,
        tabBarStyle: {
          backgroundColor: Colors.PRIMARY,
          borderTopWidth: 1,
          borderTopColor: Colors.BORDER,
          paddingTop: 8,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
        },
        tabBarLabelStyle: {
          fontFamily: Typography.fontFamily.medium,
          fontSize: 11,
        },
      }}>
      <Tab.Screen
        name={Routes.Search}
        component={Search}
        options={{
          tabBarLabel: Strings.search,
          headerTitle: Strings.search,
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
          headerTitle: () => <CustomHeaderTitle subtitle={Strings.readyToDance} />,
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
          headerTitle: () => <CustomHeaderTitle subtitle={Strings.readyToDance} />,
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
          headerTitle: Strings.profile,
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const navStyles = StyleSheet.create({
  headerContainer: {
    paddingLeft: 4,
  },
  greetingText: {
    fontFamily: Typography.fontFamily.semiBold,
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: 0,
    color: Colors.DARK,
  },
  subtitleText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: 14,
    color: Colors.TEXT,
    marginTop: 2,
  },
});

export default Authenticated;
