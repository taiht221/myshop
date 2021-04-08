import { createSelector } from 'reselect';

const cartItemsSelector = (state) => state.cart.list;
// đếm số lượng sản phẩm trong giỏ hàng

export const cartItemsCountSelector = createSelector(cartItemsSelector, (list) =>
  list.reduce((count, item) => count + item.quantity, 0)
);
// Tính tổng giá trị sản phẩm trong giỏ hàng
export const cartTotalSelector = createSelector(cartItemsSelector, (list) =>
  list.reduce((total, item) => total + item.data.real_price * item.quantity, 0)
);
