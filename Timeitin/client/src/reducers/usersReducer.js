import * as types from "../actions/actionTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_USER:
    case types.FETCH_USER:
    case types.EDIT_USER:
      return [...state, action.payload];
    case types.FETCH_USERS:
      // const newObj = {};
      // action.payload.forEach((element) => {
      //   newObj[element.id] = element;
      // });
      // return { ...state, ...newObj };
      return action.payload;

    case types.DELETE_USER:
      return state; //(({ [action.payload]: deleted, ...newState }) => newState)(state);
    default:
      return state;
  }
};

export default usersReducer;
