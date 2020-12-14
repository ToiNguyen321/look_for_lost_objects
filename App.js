import React from 'react';
import MainNavigation from 'navigator/MainNavigation';
import {LogBox} from 'react-native';
import AuthNavigator from 'navigator/AuthNavigation';
import store from 'store/store';
import {Provider, useSelector} from 'react-redux';
LogBox.ignoreLogs(['Remote debugger']);

function AppRedux() {
  const authReducer = useSelector((state) => state.authReducer);

  return authReducer.isLogin ? <MainNavigation /> : <AuthNavigator />;
}

export default function () {
  return (
    <Provider store={store}>
      <AppRedux />
    </Provider>
  );
}
