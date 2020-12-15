import {all} from 'redux-saga/effects';
import authSaga from './authSaga';
import newSaga from './newSaga';

export default function* rootSaga() {
  yield all([...authSaga, ...newSaga]);
}
