import { createSlice } from "@reduxjs/toolkit";
import { BookItem } from "library/model/book";
import { fieldSetter } from '../utils';

export interface MainPage{
  books: BookItem[]
  length: number
  category: string
  sorting: string
  spinner: boolean
}

const mainPage = createSlice({
  name: 'mainPage',
  initialState: {
    books: [],
    length: 0,
    category: "all",
    sorting: "relevance",
    spinner: false
  } as MainPage,
  reducers: {
    setBooks: fieldSetter("books"),
    setLength: fieldSetter("length"),
    setCategory: fieldSetter("category"),
    setSorting: fieldSetter("sorting"),
    showSpinner: (state) => {
      state.spinner = true
    },
   hideSpinner: (state) => {
      state.spinner = false
    },
  },
})

export const { setBooks, setLength, setCategory, setSorting, showSpinner, hideSpinner } = mainPage.actions;

export default mainPage.reducer;
