import {user_create} from 'api/Request';
import {takeLatest, call, put} from 'redux-saga/effects';
import {loginError, loginPending, loginSuccess} from 'store/slices/authSlice';
import {S_TYPES} from './sagaActions';

export default [takeLatest(S_TYPES.LOGIN_PENDING, loginSaga)];

function* loginSaga({params}) {
  try {
    yield put(loginPending());
    // const params = {
    //   phone_number: '0987654321',
    //   password: '123456',
    // };
    const response = yield call(user_create, params);
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
