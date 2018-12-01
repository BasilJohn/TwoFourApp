import {
    USER_NAME_CHANGED
    , PASSWORD_CHANGED
    , CONFIRM_PASSWORD_CHANGED
    , EMAIL_CHANGED
    ,SIGN_UP_SUCCESS
    ,GET_DEVICE_INFO,
    IS_USER_LOGGED_IN,
    IS_USER_AUTHENTICATED
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
     fetch("http://206.189.220.236:8081/api/v1/signUp",{
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: signUpProps.userName,
        password: signUpProps.password,
        firstName:"firstName",
        lastName:"lastName",
        email: signUpProps.emailId,
        avatar: 'New',
        deviceId:signUpProps.deviceInfo.deviceId,
        mobileNumber:"1",
        ipv6:signUpProps.deviceInfo.ipv6,
        macAddress:signUpProps.deviceInfo.macAddress
      })
     })
       .then(response => {
         if (!response.ok) {
           
          // throw Error(response.statusText);
         
         }
         else{
            
         }
         //dispatch(itemsIsLoading(false));
         return response;
       })                   
       .catch();
   };
};

export const signInUser = signInProps => {

    console.log("BJ",signInProps);

    return dispatch => {
       fetch("https://www.reddit.com/r/reactjs.json",{
        //fetch("http://206.189.220.236:8080/api/v1/signIn",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: signInProps.userName,
          password: signInProps.password,
          //email: signInProps.emailId,
          deviceId:signUpProps.deviceInfo.deviceId,
          mobileNumber:"1",
          ipv6:signUpProps.deviceInfo.ipv6,
          macAddress:signUpProps.deviceInfo.macAddress
        })
       })
         .then(response => {

            console.log("response",response);
           if (!response.ok) {
             
            // throw Error(response.statusText);
           
           }
           else{
              
           }
           //dispatch(itemsIsLoading(false));
           return response.formData.data.children;
         })
         .then(signInInfo =>
            dispatch(signInInfo(signInInfo))
          )                   
         .catch();
     };
  };

  export const signInInfo = data => {

    return {
        type: IS_USER_AUTHENTICATED,
        payload: true
    };
  };

export const checkIsUserLoggedIn = checkIsUserLoggedIn => {

    return {
        type: IS_USER_LOGGED_IN,
        payload: true
    };
  };