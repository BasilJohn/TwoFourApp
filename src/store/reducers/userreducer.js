import { FOLLOW_UNFOLLOW_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    isSuccess: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW_SUCCESS:
            return { ...state, isSuccess: action.payload };
        default:
            return state;
    }
};
