import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import allReducers from './slices/index';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import logger from 'redux-logger';
//Middleware

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

if (__DEV__) {
  middleware.push(logger);
}
//Từ applyMiddleware vào Reducers thì tạo một store, sagaMiddleware nằm giữa Action và Reducers.
const store = configureStore({
  reducer: allReducers,
  middleware,
});

sagaMiddleware.run(rootSaga);
export default store;
