import { CART_CLOSE, CART_ITEM_REMOVE, CART_OPEN } from '../actions/type';

const initState = {
  openCart: false,
  list: [{}, {}],
  mount: 0,
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case CART_OPEN:
      return {
        ...state,
        openCart: true,
      };
    case CART_CLOSE:
      return {
        ...state,
        openCart: false,
      };
    case CART_ITEM_REMOVE:
      let { list } = state;
      list.splice(action.payload, 1);
      return {
        ...state,
        list,
      };
    default:
      return state;
  }
}
