import { SHOW_MINI_CARD, HIDE_MINI_CARD, ADD_TO_CARD, SET_QUANTITY, REMOVE_FROM_CART } from './type';

export function openMiniCart() {
  return {
    type: SHOW_MINI_CARD,
  };
}

export function closeMiniCart() {
  return {
    type: HIDE_MINI_CARD,
  };
}
export function addToCart(data) {
  return {
    type: ADD_TO_CARD,
    payload: data,
  };
}
export function setQuantity(data) {
  return {
    type: SET_QUANTITY,
    payload: data,
  };
}
export function removeFromCart(data) {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
}
