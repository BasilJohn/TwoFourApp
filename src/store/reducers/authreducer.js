import {
  USER_NAME_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  EMAIL_CHANGED,
  GET_DEVICE_INFO
} from "../actions/types";

const INITIAL_STATE = {
  userName: "",
  password: "",
  confirmPassword: "",
  emailId: "",
  deviceInfo: {
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_NAME_CHANGED:
      return { ...state, userName: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case EMAIL_CHANGED:
      return { ...state, emailId: action.payload };
    case GET_DEVICE_INFO:
      return { ...state, deviceInfo: action.payload };
    default:
      return state;
  }
};