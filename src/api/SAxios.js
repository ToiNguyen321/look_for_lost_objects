import axios from 'axios';
import {IsProduction} from '../../App';
import RNRestart from 'react-native-restart';
import store from 'store/store';
import SInfoHelper from 'helpers/SInfoHelper';
import KEY_STORAGE from 'common/StorageCommon';
// import {writeAxiosRequestError} from 'utils/FirebaseStorage';

export const BASE_URL = __DEV__
  ? 'http://localhost:3000/api/v1/'
  : 'http://localhost:3000/api/v1/';
export const base_url = () => {
  return IsProduction
    ? 'http://localhost:3000/api/v1/'
    : __DEV__
    ? 'http://localhost:3000/api/v1/'
    : 'http://localhost:3000/api/v1/';
};
const SAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
});

// Header Authorization will be set in account saga or after load from asyncstorage
SAxios.interceptors.request.use(
  async function (config) {
    if (store.getState().authReducer.isLogin) {
      const BearerToken = await SInfoHelper.getItem(
        KEY_STORAGE.KEY_ACCESS_TOKEN,
      );
      config.headers.common.Authorization = BearerToken;
    }
    config.baseURL = base_url();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
SAxios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // writeAxiosRequestError(error);

    if ((error?.response?.data?.detail ?? '') === 'USER_BLOCKED') {
      SInfoHelper.deleteItem('BearerTokenApp', {}).then(() => {
        // RNRestart.Restart();
      });
      return Promise.reject(Error('USER_BLOCKED'));
    }
    if (is401Error(error)) {
      // token expired
      SInfoHelper.deleteItem('BearerTokenApp', {}).then(() => {
        // RNRestart.Restart();
      });
    }
    return Promise.reject(error);
  },
);

export const is401Error = (error) => {
  return (
    error &&
    error.response &&
    error.response.status &&
    error.response.status === 401
  );
};

export default SAxios;
