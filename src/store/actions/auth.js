import {
    USER_NAME_CHANGED
    , PASSWORD_CHANGED
    , CONFIRM_PASSWORD_CHANGED
    , EMAIL_CHANGED
    ,SIGN_UP_SUCCESS
    ,GET_DEVICE_INFO
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

export const getDeviceInfo = deviceInfo => {
    return {
        type: GET_DEVICE_INFO,
        payload: deviceInfo
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
        deviceId:signUpProps.deviceInfo.deviceId,
        mobileNumnber:signUpProps.deviceInfo.phoneNumber,
        ipv6:signUpProps.deviceInfo.ipv6,
        macAddress:signUpProps.deviceInfo.macAddress
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