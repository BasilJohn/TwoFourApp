import { LOAD_CATEGORIES,LOAD_CATEGORY_SUCCESS } from "./types";

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
