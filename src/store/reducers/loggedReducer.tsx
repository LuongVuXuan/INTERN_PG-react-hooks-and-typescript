export const SIGN_IN_STEP_ONE = "SIGN_IN_STEP_ONE";
export const SIGN_IN_STEP_TWO = "SIGN_IN_STEP_TWO";

const initState = {
  stepOne: false,
  stepTwo: false,
};

const loggedReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SIGN_IN_STEP_ONE:
      return {
        ...state,
        stepOne: true,
      };

    case SIGN_IN_STEP_TWO:
      return {
        ...state,
        stepTwo: true,
      };
    default:
      return state;
  }
};

export default loggedReducer;
