import * as types from "../actions/actionTypes";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_STREAM:
    case types.FETCH_STREAM:
    case types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_STREAM:
      return (({ [action.payload]: deleted, ...newState }) => newState)(state);
    case types.FETCH_STREAMS:
      const newObj = {};
      action.payload.forEach((element) => {
        newObj[element.id] = element;
      });
      return { ...state, ...newObj };
    default:
      return state;
  }
};

export default streamReducer;
