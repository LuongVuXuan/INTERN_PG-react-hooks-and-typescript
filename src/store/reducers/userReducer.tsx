export const USERS_FETCH_SUCCEEDED = "USERS_FETCH_SUCCEEDED";
export const USERS_FETCH_FAILED = "USERS_FETCH_FAILED";
export const USERS_FETCH_REQUESTED = "USERS_FETCH_REQUESTED";

const initialState = {};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USERS_FETCH_SUCCEEDED:
      return { ...state, users: action.users };

    case USERS_FETCH_FAILED:
      return { ...state, message: action.message };

    case USERS_FETCH_REQUESTED: {
      return state;
    }

    default:
      return state;
  }
};

export default userReducer;
