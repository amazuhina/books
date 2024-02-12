import { combineReducers } from "@reduxjs/toolkit";
import selectedBook from "./slicers/selectedBook";
import mainPage from "./slicers/mainPage";

const rootReducer = combineReducers({
  selectedBook,
  mainPage
});

export default rootReducer;
