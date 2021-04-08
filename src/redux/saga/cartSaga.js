import userApi from 'Apis/userApi';
import StorageKeys from 'constants/storage-keys';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REMOVE_FROM_CART,
  SET_QUANTITY,
  ADD_TO_CARD,
  SET_QUANTITY_FAIL,
  ADD_TO_CARD_FAIL,
  REMOVE_FROM_CART_FAIL,
} from '../actions/type';

// function* logicUser(query) {
//   const res = yield call(userApi, query.payload);

//   if (res) {
//     yield put({ type: REGISTER_USER_SUCCESS, payload: res });
//   }
// }

function* postCartQuantity(action) {
  try {
    let user = yield call(userApi.register, action.payload);
  } catch (error) {
    alert(error);
    yield put({ type: SET_QUANTITY_FAIL, payload: error });
  }
}

function* postCardItem(action) {
  try {
    let user = yield call(userApi.login, action.payload);
  } catch (error) {
    alert(error);
    yield put({ type: ADD_TO_CARD_FAIL, payload: error });
  }
}
function* removeCardItem(action) {
  try {
    let user = yield call(userApi.login, action.payload);
  } catch (error) {
    alert(error);
    yield put({ type: REMOVE_FROM_CART_FAIL, payload: error });
  }
}
// function* watchUser() {
//   if (!!localStorage.getItem(StorageKeys.USER)) {
//     yield put({ type: LOADING_USER_SUCCESS });
//   } else {
//     yield put({ type: LOADING_USER_FAIL });
//   }
// }

export default function* cartSaga() {
  yield takeLatest(ADD_TO_CARD, postCardItem);
  yield takeLatest(SET_QUANTITY, postCartQuantity);
  yield takeLatest(REMOVE_FROM_CART, removeCardItem);
}
