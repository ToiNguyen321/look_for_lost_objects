/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {setNavigator} from './NavigationService';
import SCREENS from 'navigator';

import HomeScreen from 'screens/Home';
import Profile from 'screens/Profile';
import Search from 'screens/Search';
import AddNew from 'screens/Home/AddNew';
import AddressPicker from 'screens/AddressPicker';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ScreenOption = (navigation, route, dispatch) => {
  if (!route.state || !route.state.routeNames) {
    return {
      headerTitle: 'Home',
      headerLeft: null,
      headerRight: () => {
        return (
          <TouchableOpacity
            style={{marginRight: 15}}
            onPress={() => navigation.navigate(SCREENS.SEARCH.SEARCH)}>
            <Ionicons size={22.5} color={'#000'} name={'ios-search'} />
          </TouchableOpacity>
        );
      },
    };
  }

  // use this params to set action for header button
  switch (route.state.routeNames[route.state.index]) {
    case SCREENS.HOME.LIST:
      return {
        headerTitle: 'Home',
        headerLeft: null,
        headerRight: () => {
          return (
            <TouchableOpacity
              style={{marginRight: 15}}
              onPress={() => navigation.navigate(SCREENS.SEARCH.SEARCH)}>
              <Ionicons size={22.5} color={'#000'} name={'ios-search'} />
            </TouchableOpacity>
          );
        },
      };
    case SCREENS.SEARCH.SEARCH:
      return {
        headerTitle: 'Search',
        headerLeft: null,
        headerRight: null,
      };
    case SCREENS.PROFILE.PROFILE:
      return {
        headerTitle: 'Profile',
        headerLeft: null,
        headerRight: null,
      };
    default:
      return {
        headerTitle: '',
        headerLeft: null,
        headerRight: null,
      };
  }
};

function MainTabs({navigation, route}) {
  const screenOptions = ({route_}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route_.name === SCREENS.HOME.LIST) {
        iconName = focused ? 'ios-home' : 'ios-home-outline';
      } else if (route_.name === SCREENS.SEARCH.SEARCH) {
        iconName = focused ? 'ios-search' : 'ios-search';
      } else if (route_.name === SCREENS.PROFILE.PROFILE) {
        iconName = focused ? 'ios-person' : 'ios-person-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  React.useLayoutEffect(() => {
    navigation.setOptions(ScreenOption(navigation, route));
  }, [navigation, route]);

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={SCREENS.HOME.LIST} component={HomeScreen} />
      <Tab.Screen name={SCREENS.SEARCH.SEARCH} component={Search} />
      <Tab.Screen name={SCREENS.PROFILE.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

export default function MainNavigation() {
  const navigation = useRef(null);

  useEffect(() => {
    setNavigator(navigation);
    // if (navigation.current) {
    //   Storage.getItem('OPENED_NOTIFICATION').then(notify => {

    //     if (!notify) return;
    //     // remove cache
    //     Storage.setItem('OPENED_NOTIFICATION', null);

    //     switch (notify.action) {
    //       case 'appointment.detail':
    //         navigation.current.navigate(SCREENS.BOOKING.VIEW, { id: notify.object })
    //         break;
    //     }
    //   })
    // }
  }, [navigation]);

  return (
    <NavigationContainer ref={navigation}>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.MAIN_TAB} component={MainTabs} />
        <Stack.Screen name={SCREENS.HOME.ADD} component={AddNew} />
        <Stack.Screen
          name={SCREENS.COMMON.CHOOSE_ADDRESS}
          component={AddressPicker}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
