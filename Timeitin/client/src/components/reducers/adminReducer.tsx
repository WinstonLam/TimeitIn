import { ActionTypes as types } from "../../actions/actionTypes";
import { Action } from "../interfaces";

const adminReducer: any = (state: any[] = [], action: Action) => {
  switch (action.type) {
    case types.CREATE_ADMIN:
    case types.EDIT_ADMIN:
      return [...state, action.payload];
    case types.FETCH_ADMIN:
      return action.payload;
    case types.DELETE_ADMIN:
      return state;
    default:
      return state;
  }
};

export default adminReducer;
