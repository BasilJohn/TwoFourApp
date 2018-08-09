import {
    USER_NAME_CHANGED
    , PASSWORD_CHANGED
    , CONFIRM_PASSWORD_CHANGED
    , EMAIL_CHANGED
    ,SIGN_UP_SUCCESS
} from "./types"

export const userNameChanged = text => {
    return {
        type: USER_NAME_CHANGED,
        payload: text
    };
};    

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const confirmPasswordChanged = text => {
    return {
        type: CONFIRM_PASSWORD_CHANGED,
        payload: text
    };
};

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const signUpUser = signUpProps => {
  return dispatch => {
    //dispatch(itemsIsLoading(true));
     fetch("http://68.66.233.230:8083/api/v1/SignUp",{
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: signUpProps.userName,
        password: signUpProps.password,
        firstName:"",
        lastName:"",
        email: signUpProps.emailId,
        avatar: 'New',
        deviceId:"",
        mobileNumnber:"postAdProps.selectedImageArray",
        ipv6:"postAdProps.price",
        macAddress:"postAdProps.isNegotiable"
      })
     })
       .then(response => {
         if (!response.ok) {
             //console.log(response);
          // throw Error(response.statusText);
         
         }
         else{
           // console.log(response);
         }
         //dispatch(itemsIsLoading(false));
         return response;
       })                   
       .catch();
   };
};