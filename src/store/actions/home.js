import { LOAD_CATEGORIES,LOAD_CATEGORY_SUCCESS,GET_PRODUCTS_SUCCESS } from "./types";

export const loadCategories = () => {
  return dispatch => {
    //dispatch(itemsIsLoading(true));
    fetch("http://68.66.233.230:8080/api/v1/getCategories")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        //dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(categories =>
        dispatch({ type: LOAD_CATEGORY_SUCCESS, payload: categories })
      )
      .catch();
  };
};

export const getProducts=()=>{

  return dispatch => {
    //dispatch(itemsIsLoading(true));
    fetch("http://159.65.66.113:8082/api/v1/getProducts")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        //dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(products =>
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
      )
      .catch();
  };
}