import { ActionTypes as types } from "../actions/actionTypes";

interface authReducerProps {
  state: any;
  isSignIn: boolean | null;
  userId: number;
  action: any;
}

const authReducer: any = ({state = { isSignedIn: null, userId: null }, action}: authReducerProps) => {
  switch (action.type) {
    case types.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case types.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default authReducer;
