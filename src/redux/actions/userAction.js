import { REGISTER_USER, LOGIN_USER, LOADING_USER } from './type';

export function registerUser(data) {
  return {
    type: REGISTER_USER,
    payload: data,
  };
}
export function loginUser(data) {
  return {
    type: LOGIN_USER,
    payload: data,
  };
}
export function putUser(data) {
  return {
    type: LOGIN_USER,
    payload: data,
  };
}
export function loadingUser() {
  return {
    type: LOADING_USER,
  };
}
