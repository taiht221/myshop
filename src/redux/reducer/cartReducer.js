import { SHOW_MINI_CARD, HIDE_MINI_CARD, REMOVE_FROM_CART, SET_QUANTITY, ADD_TO_CARD } from '../actions/type';

const initState = {
  openMiniCart: false,
  list: [],
  mount: 0,
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_MINI_CARD:
      return {
        ...state,
        openMiniCart: true,
      };
    case HIDE_MINI_CARD:
      return {
        ...state,
        openMiniCart: false,
      };

    // thêm sản phẩm mới vào giỏ hàng
    case ADD_TO_CARD:
      const newState2 = JSON.parse(JSON.stringify(state.list));
      const newItem = action.payload;
      const index2 = newState2.findIndex((x) => x.id === newItem.id);
      if (index2 >= 0) {
        newState2[index2].quantity += newItem.quantity;
        return {
          ...state,
          list: [...newState2],
        };
      } else {
        newState2.push(newItem);
        return {
          ...state,
          list: [...newState2],
        };
      }
    // chọn lại số lượng sản phẩm mới trong giỏ hàng
    case SET_QUANTITY:
      const newState = JSON.parse(JSON.stringify(state.list));
      const { id, quantity } = action.payload;
      const index = newState.findIndex((x) => x.id === id);
      if (index >= 0 && quantity >= 1) {
        newState[index].quantity = quantity;
      }
      return {
        ...state,
        list: [...newState],
      };

    // Xóa sản phẩm từ trong giỏ hàng

    case REMOVE_FROM_CART:
      let newState3 = [...state.list];
      const idNeedToRemove = action.payload;
      if (idNeedToRemove) {
        newState3 = newState3.filter((x) => x.id !== idNeedToRemove);
      }
      return {
        ...state,
        list: [...newState3],
      };
    default:
      return state;
  }
}
