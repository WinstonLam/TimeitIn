import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../reducers/authReducer";
import usersReducer from "../reducers/usersReducer";
import {UserCreationFormProps} from "../components/interfaces";

export const store = configureStore({
    reducer: { users: usersReducer, auth: authReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export const selectUsers = (state: RootState) => state.users
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch