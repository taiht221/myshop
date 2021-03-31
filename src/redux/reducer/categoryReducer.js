import { GET_CATEGORY, GET_CATEGORY_SUCCESS } from '../actions/type';

const initState = {
  categoryData: [],
  loading: true,
  // caterogyTitle:[],
};

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        loading: true,
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryData: action.payload,
        loading: false,
        // caterogyTitle:action.payload.title,
      };

    default:
      return state;
  }
}
