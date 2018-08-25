import {
  TITLE_CHANGED,
  CATEGORY_SELECTED,
  PRICE_CHANGED,
  IS_NEGOTAIBLE_CHANGED,
  IS_FREE_CHANGED,
  DESCRIPTION_CHANGED,
  IMAGE_SELECTED,
  SELECTED_AD_DETAILS
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

  return () => {
    //dispatch(itemsIsLoading(true));
    fetch("http://159.65.66.113:8081/api/v1/postProduct", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        supplierId: 1,
        categoryName: postAdProps.categoryId,
        productName: postAdProps.title,
        condition: 'New',
        description: postAdProps.description,
        productImages: postAdProps.selectedImageArray,
        price: postAdProps.price,
        isNegotiable: postAdProps.isNegotiable == true ? "Y" : "N",
        isFree: postAdProps.isFree == true ? "Y" : "N",
        deviceId: postAdProps.deviceInfo.deviceId,
        mobileNumber: "123345678",
        ipv6: postAdProps.deviceInfo.ipv6,
        macAddresss: postAdProps.deviceInfo.macAddresss
      })
    })
      .then(response => {
        if (!response.ok) {

          // throw Error(response.statusText);
        }
        else {

        }

        //dispatch(itemsIsLoading(false));
        return response;
      })
      .catch();
  };
};

export const getProductDetails=(productId)=>{

  return dispatch => {
    //dispatch(itemsIsLoading(true));
    fetch("http://159.65.66.113:8082/api/v1/getProduct?productId="+productId)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        //dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(productDetails =>
        dispatch({ type: SELECTED_AD_DETAILS, payload: productDetails })
      )
      .catch();
  };
}