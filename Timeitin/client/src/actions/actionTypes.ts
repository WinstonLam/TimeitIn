// This file is to find misspell bugs more easily
export enum ActionTypes {
  // User action types
  SET_USER = "SET_USER",
  UNSET_USER = "UNSET_USER",
  // Users action types
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  CREATE_USER = "CREATE_USER",
  FETCH_USERS = "FETCH_USERS",
  FETCH_USER = "FETCH_USER",
  EDIT_USER = "EDIT_USER",
  DELETE_USER = "DELETE_USER",
  // Hour action types
  FETCH_YEARLY_HOURS = "FETCH_YEARLY_HOURS",
  FETCH_MONTHLY_HOURS = "FETCH_MONTHLY_HOURS",
  FETCH_DAILY_HOURS = "FETCH_DAILY_HOURS",
  // Admin action types
  FETCH_ADMIN = "FETCH_ADMIN",
  CREATE_ADMIN = "CREATE_ADMIN",
  EDIT_ADMIN = "EDIT_ADMIN",
  DELETE_ADMIN = "DELETE_ADMIN",
}
