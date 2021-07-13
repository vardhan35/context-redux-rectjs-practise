import React, { CreateContext } from "react";
import { useState } from "react";

export const BookContext = CreateContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, name: "Book 1" },
    { id: 2, name: "Book 2" },
    { id: 3, name: "Book 3" },
  ]);
  return (
    <BookContextProvider value={{ books }}>
      {props.children}
    </BookContextProvider>
  );
};

export default BookContextProvider;
