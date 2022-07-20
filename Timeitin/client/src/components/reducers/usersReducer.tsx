import { ActionTypes as types } from "../../actions/actionTypes";
import { Action } from "../interfaces";

const usersReducer: any = (state: any[] = [], action: Action) => {
  switch (action.type) {
    case types.CREATE_USER:
    case types.EDIT_USER:
    case types.FETCH_USER:
      return [...state, action.payload];
    case types.FETCH_USERS:



      // const newObj = {};
      // action.payload.forEach((element) => {
      //   newObj[element.id] = element;
      // });
      // return { ...state, ...newObj };
      return action.payload;

    case types.DELETE_USER:
      return state.filter((user) => user._id !== action.payload);
    default:
      return state;
  }
};



export default usersReducer;
