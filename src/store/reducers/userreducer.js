import { FOLLOW_UNFOLLOW_SUCCESS,USER_SETTINGS_DATA_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    isSuccess: false,
    userSettingsData:{}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW_SUCCESS:
            return { ...state, isSuccess: action.payload };
        case USER_SETTINGS_DATA_SUCCESS:
            return { ...state, userSettingsData: action.payload };    
        default:
            return state;
    }
};
