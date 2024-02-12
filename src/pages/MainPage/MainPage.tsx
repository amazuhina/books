import React, { useState } from "react";
import { getBooks } from "library/api/books";
import { categoriesOption } from "library/model/book";
import { BooksCatalog } from "components/BooksCatalog";
import { sortingOption } from "library/model/generalTypes";
import iconFind from "../../search-svg-icon.svg"
import { useSelector } from "react-redux";
import { dispatch, RootState } from "library/redux/store";
import {
  hideSpinner,
  setBooks,
  setCategory,
  setLength,
  setSorting,
  showSpinner
} from "library/redux/slicers/mainPage";
import { Spinner } from "components/Spinner/Spinner";
import "./MainPage.css";

interface MainPageProps {
}

export const MainPage: React.FunctionComponent<MainPageProps> = () => {
  const [input, setInput] = useState("");
  const [pagination, setPagination] = useState(10);

  const mainPageInfo = useSelector((store: RootState) => store.mainPage);

  const onFind = async () => {
    dispatch(showSpinner())
    dispatch(setBooks([]))
    setPagination(10)
    await getBooks(input, pagination, mainPageInfo.sorting, mainPageInfo.category).then(res => {
      dispatch(setBooks(res?.items))
      dispatch(setLength(res?.totalItems))
    })
    dispatch(hideSpinner())
  }

  const showMore = () => {
    dispatch(showSpinner())
    setPagination(pagination + 10)
    getBooks(input, pagination, mainPageInfo.sorting, mainPageInfo.category).then(res => {
      dispatch(setBooks(res?.items))
      dispatch(setLength(res?.totalItems))
    })
    dispatch(hideSpinner())
  }

  return (
    <div className="main-page">
      <h1 className="main-title">Поиск книг</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Введите название книги"
        className="text-input"
        onKeyDown={event => event.key === "Enter" && onFind()}
      />
      <button onClick={onFind} className="button-find">
        <img src={iconFind} className="icon-find" />
      </button>
      <div className="options">
        <select className="select categories-select" onChange={e => dispatch(setCategory(e.target.value))}>
          {categoriesOption.map(category => <option  key={category.value} value={category.value}>{category.label}</option>)}
        </select>
        <select className="select sorting-select" onChange={e => dispatch(setSorting(e.target.value))}>
          {sortingOption.map(sort => <option key={sort.value} value={sort.value}>{sort.label}</option>)}
        </select>
      </div>
      <p className="books-length">{ mainPageInfo.length ? `Найдено ${mainPageInfo.length} книг` : null}</p>

      <BooksCatalog books={mainPageInfo.books} />
      {
        mainPageInfo.spinner ? <Spinner /> : null
      }
      {
        mainPageInfo.books?.length ? (
          <button
            onClick={showMore}
            className="button-show-more"
          >
            Показать еще
          </button>
        ) : null
      }
    </div>
  )
}
