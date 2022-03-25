import { callCategory } from '../../Apis/index';
import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_CATEGORY, GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS } from '../actions/type';

function* logicCategory() {
  try {
    const res = yield call(callCategory);
    // console.log('res', res);
    if (res) {
      yield put({ type: GET_CATEGORY_SUCCESS, payload: res.data });
    }
  } catch (error) {
    console.log(error)
    yield put({ type: GET_CATEGORY_FAIL });
  }
}

export default function* categorySaga() {
  yield takeLatest(GET_CATEGORY, logicCategory);
}
