import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer from "../redux/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<T = void> = ThunkAction<T, RootState, null, Action<string>>

export const { dispatch, getState } = store;

export default store;
