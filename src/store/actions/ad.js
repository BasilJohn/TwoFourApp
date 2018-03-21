import {
  POST_AD,
  TITLE_CHANGED,
  CATEGORY_SELECTED,
  PRICE_CHANGED,
  IS_NEGOTAIBLE_CHANGED,
  IS_FREE_CHANGED,
  DESCRIPTION_CHANGED
} from "./types";

export const titleChanged = text => {
  return {
    type: TITLE_CHANGED,
    payload: text
  };
};

export const categorySelected = categoryId => {
  return {
    type: CATEGORY_SELECTED,
    payload: categoryId
  };
};

export const priceChanged = text => {
  return {
    type: PRICE_CHANGED,
    payload: text
  };
};

export const isNegotiableChanged = isNegotiable => {
  return {
    type: IS_NEGOTAIBLE_CHANGED,
    payload: isNegotiable
  };
};

export const isFreeChanged = isFree => {
  return {
    type: IS_FREE_CHANGED,
    payload: isFree
  };
};

export const descriptionChanged = text => {
  return {
    type: DESCRIPTION_CHANGED,
    payload: text
  };
};

export const postAd = () => {
  // return dispatch => {
  //   //dispatch(itemsIsLoading(true));
  //   fetch("http://68.66.233.230:8080/api/v1/getCategories")
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       //dispatch(itemsIsLoading(false));
  //       return response;
  //     })
  //     .then(response => response.json())
  //     .then(categories =>
  //       dispatch({ type: LOAD_CATEGORY_SUCCESS, payload: categories })
  //     )
  //     .catch();
  // };
};
