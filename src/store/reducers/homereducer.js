import { LOAD_CATEGORIES, LOAD_CATEGORY_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  categoryList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CATEGORY_SUCCESS:
      return { ...state, categoryList: action.payload };
    default:
      return state;
  }
};
