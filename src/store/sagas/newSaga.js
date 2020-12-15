import {news} from 'api/Request';
import {takeLatest, call, put} from 'redux-saga/effects';
import {newsError, newsPending, newsSuccess} from 'store/slices/newSlice';
import {S_TYPES} from './sagaActions';

export default [takeLatest(S_TYPES.NEWS_PENDING, newsSaga)];

function* newsSaga({params}) {
  try {
    yield put(newsPending());
    const response = yield call(news, params);
    console.log(
      '🚀 ~ file: newSaga.js ~ line 12 ~ function*newsSaga ~ response',
      response,
    );
    const {data, error} = response;
    if (error) {
      throw data;
    }
    yield put(newsSuccess(data.result));
  } catch (error) {
    yield put(newsError(error));
    console.log('error', error);
  }
}
