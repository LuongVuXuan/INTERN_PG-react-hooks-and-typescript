import { SIGN_IN_STEP_ONE, SIGN_IN_STEP_TWO } from "../reducers/loggedReducer";

export const SignInOne = () => {
  return {
    type: SIGN_IN_STEP_ONE,
  };
};

export const SignInTwo = () => {
  return {
    type: SIGN_IN_STEP_TWO,
  };
};
