import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookPage } from "./pages/BookPage/BookPage";
import { MainPage } from "./pages/MainPage/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
