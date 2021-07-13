import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="booklist">
      <ul>
        {books.map((book) => {
          const { id, name } = book;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
