import React from "react";
import { useNavigate } from "react-router-dom";
import { BookItemVolumeInfo } from "library/model/book";
import { dispatch } from "library/redux/store";
import { setBookInfo } from "library/redux/slicers/selectedBook";
import "./Card.css";

interface CardProps {
  information: BookItemVolumeInfo
}

export const Card: React.FunctionComponent<CardProps> = ({ information }) => {
  const navigate = useNavigate();

  const onCard = () => {
    navigate('/book')
    dispatch(setBookInfo(information))
  }

  return (
        <div className="book-card" onClick={onCard}>
            <div ><img className="image" src={information.imageLinks?.smallThumbnail} /></div>
            <p className="category">{information?.categories ? information?.categories[0] : ""}</p>
            <div className="book-title">{information.title}</div>
            {
              information.authors?.length && information.authors.join(',')
            }
        </div>
    )
}
