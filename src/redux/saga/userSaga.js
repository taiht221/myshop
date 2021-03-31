import userApi from 'Apis/userApi';
import StorageKeys from 'constants/storage-keys';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from '../actions/type';

// function* logicUser(query) {
//   const res = yield call(userApi, query.payload);

//   if (res) {
//     yield put({ type: REGISTER_USER_SUCCESS, payload: res });
//   }
// }

function* postRegister(action) {
  try {
    // If `fetch()` fails, redux-saga will throw a catchable error
    let user = yield call(userApi.register, action.payload);
    // const user = yield call(callUser, action.payload);

    console.log('user', user);

    if (user.error) {
      yield put({ type: REGISTER_USER_FAIL, payload: user.error });
      alert(user.error);
      localStorage.clear();
    } else {
      alert('Đăng kí thành công. Cảm ơn bạn đã tham gia.');
      localStorage.setItem(StorageKeys.TOKEN, user?.data?.token?.accessToken);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(user?.data));
      yield put({ type: REGISTER_USER_SUCCESS, payload: user.data });
    }
  } catch (error) {
    alert(error);
    yield put({ type: REGISTER_USER_FAIL, payload: error });
    localStorage.clear();
  }
}

function* postLogin(action) {
  try {
    // If `fetch()` fails, redux-saga will throw a catchable error
    let user = yield call(userApi.login, action.payload);
    // const user = yield call(callUser, action.payload);

    // console.log('user', user);

    if (user.error) {
      yield put({ type: LOGIN_USER_FAIL, payload: user.error });
      alert(user.error);
      localStorage.clear();
    } else {
      console.log(user.data);
      localStorage.setItem(StorageKeys.TOKEN, user?.data?.token?.accessToken);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(user?.data));
      yield put({ type: LOGIN_USER_SUCCESS, payload: user.data });
    }
  } catch (error) {
    alert(error);
    yield put({ type: LOGIN_USER_FAIL, payload: error });
    localStorage.clear();
  }
}

// function* watchUser() {
//   if (!!localStorage.getItem(StorageKeys.USER)) {
//     yield put({ type: LOADING_USER_SUCCESS });
//   } else {
//     yield put({ type: LOADING_USER_FAIL });
//   }
// }

export default function* userSaga() {
  yield takeLatest(REGISTER_USER, postRegister);
  yield takeLatest(LOGIN_USER, postLogin);
}
