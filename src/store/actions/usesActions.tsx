import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_FAILED,
  USERS_FETCH_SUCCEEDED,
} from "../reducers/userReducer";

export const fetchSuccess = (users: any) => {
  return {
    type: USERS_FETCH_SUCCEEDED,
    users,
  };
};

export const fetchFailed = (message: any) => {
  return {
    type: USERS_FETCH_FAILED,
    message,
  };
};

export const fecthRequested = (url: any) => {
  return {
    type: USERS_FETCH_REQUESTED,
    payload: {
      url,
    },
  };
};
