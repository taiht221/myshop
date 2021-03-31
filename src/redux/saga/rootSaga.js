import { all } from 'redux-saga/effects';
import categorySaga from './categorySaga';
import userSaga from './userSaga';
export default function* rootSaga() {
  yield all([categorySaga(), userSaga()]);
}
