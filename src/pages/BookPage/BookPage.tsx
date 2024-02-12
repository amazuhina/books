import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "library/redux/store";
import { useNavigate } from "react-router-dom";
import arrow from "../../left-arrow-icon.svg";
import "./BookPage.css";

export const BookPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const bookInfo = useSelector((store: RootState) => store.selectedBook.bookInfo);

  return (
    <div className="book-page">
      <div className="title-block">
        <button onClick={() => navigate("/")} className="icon-back-btn"><img className="icon-back" src={arrow} /></button>
        <h1 className="main-title">Поиск книг</h1>
      </div>
      <div className="card">
        <div className="image-block">
          <img className="image-book" src={bookInfo.imageLinks?.thumbnail} />
        </div>

        <div className="information">
          <p className="categories">{bookInfo.categories?.join(" / ")}</p>
          <h2 className="title">{bookInfo?.title}</h2>
          <p className="authors">{bookInfo.authors?.join(" , ")}</p>
          <div className="description">{bookInfo?.description}</div>
        </div>
      </div>
    </div>
  )
}
