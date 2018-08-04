import {
  POST_AD,
  TITLE_CHANGED,
  CATEGORY_SELECTED,
  PRICE_CHANGED,
  IS_NEGOTAIBLE_CHANGED,
  IS_FREE_CHANGED,
  DESCRIPTION_CHANGED,
  POST_AD_SUCCESS,
  IMAGE_SELECTED
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

export const imageArraySelected = image => {
  return {
    type: IMAGE_SELECTED,
    payload: image
  };
};

export const postAd = (postAdProps) => {
  
  console.log(postAdProps);
    return dispatch => {
     //dispatch(itemsIsLoading(true));
      fetch("http://68.66.233.230:8081/api/v1/postAd",{
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         supplierId: 1,
         category: 1,
         productName: postAdProps.title,
         condition: 'this.state.password',
         description:postAdProps.description,
         pictures:postAdProps.imageData,
         price:postAdProps.price
       })
      })
        .then(response => {
          if (!response.ok) {
           // throw Error(response.statusText);
           console.log(response)
          }
          //dispatch(itemsIsLoading(false));
          return response;
        })
        .then(response => response.json())
        .then(categories =>
          console.log("response.statusText")
          //dispatch({ type: POST_AD_SUCCESS, payload: true })
        )
        .catch();
    };
};
