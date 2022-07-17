import { PayloadAction } from "@reduxjs/toolkit";
import { ActionTypes as types } from "../../actions/actionTypes";
import { Action } from "../interfaces";

interface authReducerProps {
  state: { isSignedIn: boolean; userId: string };
  isSignIn: boolean | null;
  userId: string;
}

const initialState: authReducerProps['state'] = { isSignedIn: null, userId: null }

const authReducer: any = (state = initialState, action: Action) => {
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
