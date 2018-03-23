import {
  POST_AD,
  TITLE_CHANGED,
  CATEGORY_SELECTED,
  PRICE_CHANGED,
  IS_NEGOTAIBLE_CHANGED,
  IS_FREE_CHANGED,
  DESCRIPTION_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
  title: "",
  imagePickerArray: [],
  cameraImage:null,
  categoryId: null,
  price: null,
  isNegotiable: false,
  isFree: false,
  description: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_AD:
      return { ...state, categoryList: action.payload };
    case TITLE_CHANGED:
      return { ...state, title: action.payload };
    case CATEGORY_SELECTED:
      return { ...state, categoryId: action.payload };
    case PRICE_CHANGED:
      return { ...state, price: action.payload };
    case IS_NEGOTAIBLE_CHANGED:
      return { ...state, isNegotiable: action.payload };
    case IS_FREE_CHANGED:
      return { ...state, isFree: action.payload };
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };
    default:
      return state;
  }
};
