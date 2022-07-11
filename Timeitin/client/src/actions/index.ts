import { ActionTypes as types } from "./actionTypes";
import { Action } from "../components/interfaces";
import * as api from "../api";
import { Dispatch } from "redux";
import { UserCreationFormProps } from "../components/interfaces";
// import history from "../";

// export const signIn = (userId) => {
//   return {
//     type: types.SIGN_IN,
//     payload: userId,
//   };
// };

// export const signOut = () => {
//   return {
//     type: types.SIGN_OUT,
//   };
// };

export const createUser = (newUser: UserCreationFormProps) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      console.log(newUser);
      const response = await api.createUser(newUser);
      dispatch({ type: types.CREATE_USER, payload: response.data });
      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUsers = () => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await api.getUsers();
      dispatch({ type: types.FETCH_USERS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (userId: number) => {
  return async function (dispacth: Dispatch<Action>) {
    try {
      await api.deleteUser(userId);
      dispacth({ type: types.DELETE_USER, payload: userId });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const fetchUser = (userId) => {
//   return async function (dispatch) {
//     const response = await users.get(`/users/${userId}`);
//     dispatch({ type: types.FETCH_USER, payload: response.data });
//   };
// };

// export const editUser = (userId, formValues) => {
//   return async function (dispatch) {
//     const response = await users.patch(`/users/${userId}`, formValues);
//     dispatch({ type: types.EDIT_USER, payload: response.data });
//     history.push("/");
//   };
// };

// export const deleteUser = (userId) => {
//   return async function (dispacth) {
//     await users.delete(`/users/${userId}`);
//     dispacth({ type: types.DELETE_USER, payload: userId });
//     history.push("/");
//   };
// };
