import { CART_CLOSE, CART_ITEM_REMOVE, CART_OPEN } from './type';

export function openCart() {
  return {
    type: CART_OPEN,
  };
}

export function closeCart() {
  return {
    type: CART_CLOSE,
  };
}

export function removeItemcart(index) {
  return {
    type: CART_ITEM_REMOVE,
    payload: index,
  };
}
