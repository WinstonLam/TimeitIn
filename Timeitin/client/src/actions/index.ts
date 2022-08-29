import { ActionTypes as types } from "./actionTypes";
import { Action } from "../components/interfaces";
import * as api from "../components/api";
import { Dispatch } from "redux";
import {
  UserCreationFormProps,
  AdminCreationFormProps,
} from "../components/interfaces";
import getDate from "../components/getDate";
import range from "../components/range";

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

export const createAdmin = (admin: AdminCreationFormProps) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await api.createAdmin(admin);
      dispatch({ type: types.CREATE_ADMIN, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAdmin = () => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await api.fetchAdmin();
      dispatch({ type: types.FETCH_ADMIN, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUser = (newUser: UserCreationFormProps) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
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

export const fetchUser = (userId: string) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await api.getUser(userId);
      dispatch({ type: types.FETCH_USER, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (userId: string) => {
  return async function (dispacth: Dispatch<Action>) {
    try {
      await api.deleteUser(userId);
      dispacth({ type: types.DELETE_USER, payload: userId });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (userId: string, newUser: UserCreationFormProps) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await api.updateUser(userId, newUser);
      dispatch({ type: types.EDIT_USER, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setUser = (user: UserCreationFormProps) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      dispatch({ type: types.SET_USER, payload: user });
    } catch (error) {
      console.log(error);
    }
  };
};

export const unsetUser = () => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      dispatch({ type: types.UNSET_USER, payload: null });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDailyHours = (date: Date) => {
  const settingDate = getDate(date);
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await api.getDailyHours(
        settingDate.year,
        settingDate.month,
        settingDate.day
      );
      dispatch({ type: types.FETCH_DAILY_HOURS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

const getMonths = (month: number) => {
  if (month === 12) {
    return "1";
  }
  return (month + 1).toString();
};

export const fetchRequestedHours = (
  date: Date,
  endDay?: number,
  monthOnly?: boolean
) => {
  const settingDate = getDate(date);
  return async function (dispatch: Dispatch<Action>) {
    try {
      let response = null;
      // if weekly hours are requested, get all the hours from the week
      if (endDay) {
        var nextMonth = null;
        // if the ending week of the month is selected we need to pass the next month as well
        if (Number(settingDate.day) > endDay) {
          nextMonth = getMonths(Number(settingDate.month));
        }
        response = await api.getWeeklyHours(
          settingDate.year,
          settingDate.month,
          range(
            Number(settingDate.day),
            endDay,
            Number(settingDate.month),
            Number(settingDate.year)
          ),
          nextMonth
        );
      } // if monthly hours are requested, get all the hours from the month
      else if (monthOnly) {
        response = await api.getMonthlyHours(
          settingDate.year,
          settingDate.month
        );
      } // if daily hours are requested, get all the hours from the day
      else if (settingDate.day) {
        response = await api.getDailyHours(
          settingDate.year,
          settingDate.month,
          settingDate.day
        );
      } // if monthly hours are requested, get all the hours from the month
      // if yearly hours are requested, get all the hours from the year
      else if (settingDate.year) {
        response = await api.getYearlyHours(settingDate.year);
      }
      dispatch({ type: types.FETCH_REQUESTED_HOURS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setTime = (date: Date, username: String, time?: Object) => {
  const settingDate = getDate(date);
  return async function (dispatch: Dispatch<Action>) {
    try {
      if (time) {
        await api.setEndingTime(settingDate, username, time);
        dispatch({ type: types.SET_ENDING_TIME, payload: settingDate });
      } else {
        await api.setStartingTime(settingDate, username);
        dispatch({ type: types.SET_STARTING_TIME, payload: settingDate });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
