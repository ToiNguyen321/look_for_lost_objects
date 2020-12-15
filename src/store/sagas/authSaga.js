import {auth_login, user_create} from 'api/Request';
import SInfoHelper from 'helpers/SInfoHelper';
import SCREENS from 'navigator';
import {navigate} from 'navigator/NavigationService';
import {takeLatest, call, put} from 'redux-saga/effects';
import {
  loginError,
  loginPending,
  loginSuccess,
  registerError,
  registerPending,
  registerSuccess,
} from 'store/slices/authSlice';
import {S_TYPES} from './sagaActions';
import KEY_STORAGE from 'common/StorageCommon';

export default [
  takeLatest(S_TYPES.LOGIN_PENDING, loginSaga),
  takeLatest(S_TYPES.REGISTER_PENDING, registerSaga),
];

async function saveToken(accessToken = null, refreshToken = null) {
  await SInfoHelper.setItem(
    KEY_STORAGE.KEY_ACCESS_TOKEN,
    `Bearer ${accessToken}`,
  );
  await SInfoHelper.setItem(KEY_STORAGE.KEY_REFRESH_TOKEN, refreshToken);
}

function* loginSaga({params}) {
  try {
    yield put(loginPending());
    // const params = {
    //   phone_number: '0987654321',
    //   password: '123456',
    // };
    const response = yield call(auth_login, params);
    const {data, error} = response;
    if (error) {
      throw data;
    }
    if (!params?.loginToken) {
      yield saveToken(data.accessToken, data.refreshToken);
    }

    yield put(loginSuccess(data.result));
  } catch (error) {
    yield put(loginError(error));
    console.log('error', error);
  }
}

function* meSaga({params}) {
  try {
    yield put(loginPending());
    const response = yield call(auth_login, params);
    const {data, error} = response;
    if (error) {
      throw data;
    }
    yield saveToken(data.accessToken, data.refreshToken);
    yield put(loginSuccess(data.result));
  } catch (error) {
    yield put(loginError(error));
    console.log('error', error);
  }
}

function* registerSaga({params}) {
  try {
    yield put(registerPending());
    const response = yield call(user_create, params);
    const {data, error} = response;
    if (error) {
      throw data;
    }

    /** Register success => Login */
    const responseLogin = yield call(auth_login, params);

    /** Login Fail => navigate Login screens */
    if (responseLogin.error) {
      yield put(registerSuccess());
      navigate(SCREENS.AUTH.LOGIN);
    }

    yield saveToken(
      responseLogin.data.accessToken,
      responseLogin.data.refreshToken,
    );
    yield put(loginSuccess(responseLogin.data.result));
  } catch (error) {
    yield put(registerError(error));
    console.log('error', error);
  }
}
