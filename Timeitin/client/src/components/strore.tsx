import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";
import adminReducer from "./reducers/adminReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: { users: usersReducer, auth: authReducer, admin: adminReducer, selectedUser: userReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export const selectUsers = (state: RootState) => state.users;
export const selectAdmin = (state: RootState) => state.admin;
export const selectedUser = (state: RootState) => state.selectedUser;


// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
