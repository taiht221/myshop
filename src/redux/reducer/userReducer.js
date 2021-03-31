import StorageKeys from 'constants/storage-keys';
import { boolean } from 'yup/lib/locale';
import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOADING_USER,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOADING_USER_SUCCESS,
  LOADING_USER_FAIL,
} from '../actions/type';

const initState = {
  current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  loading: false,
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        current: action.payload,
        watch: true,
      };
    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        current: action.payload,
        watch: false,
      };
    // case LOADING_USER:
    //   return {
    //     ...state,
    //   };
    // case LOADING_USER_SUCCESS:
    //   return {
    //     ...state,
    //     watch: true,
    //   };
    // case LOADING_USER_FAIL:
    //   return {
    //     ...state,
    //     watch: false,
    //   };
    default:
      return state;
  }
}
