import * as types from "./actionTypes";
import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async function (dispatch, getState) {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });
    dispatch({ type: types.CREATE_STREAM, payload: response.data });

    history.push("/");
    // in case timeout is needed:
    //   setTimeout(() => {
    //     history.push("/streams/new");
    //   }, 1500);
  };
};

export const fetchStreams = () => {
  return async function (dispatch) {
    const response = await streams.get("/streams");
    dispatch({ type: types.FETCH_STREAMS, payload: response.data });
  };
};

export const fetchStream = (streamId) => {
  return async function (dispatch) {
    const response = await streams.get(`/streams/${streamId}`);
    dispatch({ type: types.FETCH_STREAM, payload: response.data });
  };
};

export const editStream = (streamId, formValues) => {
  return async function (dispatch) {
    const response = await streams.put(`/streams/${streamId}`, formValues);
    dispatch({ type: types.EDIT_STREAM, payload: response.data });
  };
};

export const deleteStream = (streamId) => {
  return async function (dispacth) {
    const response = await streams.delete(`/streams/${streamId}`);
    dispacth({ type: types.DELETE_STREAM, payload: response.data });
  };
};
