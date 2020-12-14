import React from 'react';
import MainNavigation from 'navigator/MainNavigation';
import {LogBox} from 'react-native';
import AuthNavigator from 'navigator/AuthNavigation';
LogBox.ignoreLogs(['Remote debugger']);
export default function App() {
  const isLogin = false;
  return isLogin ? <MainNavigation /> : <AuthNavigator />;
}
