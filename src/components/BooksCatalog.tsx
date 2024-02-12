import React from "react";
import { Card } from "./Card";
import { BookItem } from "library/model/book";
import "./Card.css"

export interface BooksCatalogProps {
    books: BookItem[];
}

export const BooksCatalog: React.FunctionComponent<BooksCatalogProps> = ({ books }) => {
    return (
        <div className="books-catalog">
        {
            books?.map((book, index) => (
              <Card
                key={book.id + index}
                information={book.volumeInfo}
              />
            ))
        }
        </div>
    )
}
