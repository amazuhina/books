import { createSlice } from "@reduxjs/toolkit";
import { BookItemVolumeInfo } from "../../model/book";
import { fieldSetter } from '../utils';

export interface SelectedBook{
  id: number | undefined;
  bookInfo: BookItemVolumeInfo;
}

const selectedBook = createSlice({
  name: 'selectedBook',
  initialState: {
    id: undefined,
    bookInfo: {},
  } as SelectedBook,
  reducers: {
    setId: fieldSetter('id'),
    setBookInfo: fieldSetter('bookInfo'),
  },
})

export const { setId, setBookInfo } = selectedBook.actions;

export default selectedBook.reducer;
