import React from "react";
import BookList from "./components/BookList";
import BookContextProvider from "./context/BookContext";

const Index = () => {
  return (
    <BookContextProvider>
      <div className="hookContextApp">
        <BookList />
      </div>
    </BookContextProvider>
  );
};

export default Index;
