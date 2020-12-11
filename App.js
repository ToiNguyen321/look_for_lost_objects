import React from 'react';
import MainNavigation from 'navigator/MainNavigation';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);
export default function App() {
  return <MainNavigation />;
}
