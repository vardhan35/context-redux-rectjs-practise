import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookProvider = (props) => {
  const [books, setbooks] = useState([
    { name: "Book1", id: 1 },
    { name: "Book2", id: 2 },
    { name: "Book3", id: 3 },
  ]);

  const addBook = (name) => {
    setbooks([...books, { name, id: 4 }]);
  };

  const removeBook = (id) => {
    setbooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookProvider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookProvider>
  );
};
export default BookProvider;
