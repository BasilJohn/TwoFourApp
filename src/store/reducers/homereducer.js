import { LOAD_CATEGORIES, LOAD_CATEGORY_SUCCESS, GET_PRODUCTS_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  categoryList: [],
  productList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CATEGORY_SUCCESS:
      return { ...state, categoryList: action.payload };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};
