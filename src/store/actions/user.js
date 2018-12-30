import { FOLLOW_UNFOLLOW_SUCCESS } from "./types";
import apiConfig from 'config/apiconfig'

export const followUnFollow = values => {
  return dispatch => {
    //dispatch(itemsIsLoading(true));
    fetch(apiConfig.baseApiUrl +"/3/follow/11",{
    //fetch("http://206.189.220.236:8080/api/v1/3/follow/11", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        loggedInUserId: values.loggedInUserId,
        toFollow: values.toFollowUserId
      })
    })
      .then(response => {
        if (!response.ok) {
          // throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(isSuccess =>
        dispatch({ type: FOLLOW_UNFOLLOW_SUCCESS, payload: isSuccess })
      )
      .catch();
  };
};
