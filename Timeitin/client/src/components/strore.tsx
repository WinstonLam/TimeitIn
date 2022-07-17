import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: { users: usersReducer, auth: authReducer }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export const selectUsers = (state: RootState) => state.users;


// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
