/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import MainNavigation from 'navigator/MainNavigation';
import {LogBox} from 'react-native';
import AuthNavigator from 'navigator/AuthNavigation';
import store from 'store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import SInfoHelper from 'helpers/SInfoHelper';
import KEY_STORAGE from 'common/StorageCommon';
import {S_ACTIONS} from 'store/sagas/sagaActions';
import SAxios from 'api/SAxios';
LogBox.ignoreLogs(['Remote debugger']);

function AppRedux() {
  const dispatch = useDispatch();

  async function loginByToken() {
    const accessToken = await SInfoHelper.getItem(KEY_STORAGE.KEY_ACCESS_TOKEN);

    if (accessToken) {
      SAxios.defaults.headers.common.Authorization = accessToken;
      dispatch(S_ACTIONS.loginPending({loginToken: true}));
    }
  }

  useEffect(() => {
    loginByToken();
  }, []);

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
