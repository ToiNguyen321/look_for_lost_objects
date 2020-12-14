import {auth_login} from 'api/Request';
import {takeLatest, call, put} from 'redux-saga/effects';
import {loginError, loginPending, loginSuccess} from 'store/slices/authSlice';
import sagaActions from './sagaActions';

export default [takeLatest(sagaActions.LOGIN_PENDING, loginSaga)];

function* loginSaga(action) {
  try {
    yield put(loginPending());
    const params = {
      phone_number: '0987654321',
      password: '1234567',
    };
    const response = yield call(auth_login, params);
    const {data, error} = response;
    if (error) {
      throw data;
    }
    yield put(loginSuccess(data.result));
  } catch (error) {
    yield put(loginError(error));
    console.log('error', error);
  }
}
