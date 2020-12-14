import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {setNavigator} from './NavigationService';
import SCREENS from 'navigator';
import Login from 'screens/Auth/Login';
import SignIn from 'screens/Auth/SignIn';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  const navigation = useRef(null);

  useEffect(() => {
    setNavigator(navigation);
  }, [navigation]);

  return (
    <NavigationContainer ref={navigation}>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.AUTH.LOGIN} component={Login} />
        <Stack.Screen name={SCREENS.AUTH.SIGN_IN} component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
