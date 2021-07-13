import React from "react";
import Navbar from "./components/Navbar";
import BookProvider from "./Context/BookContext";

const Index = () => {
  return (
    <BookProvider>
      <Navbar />
    </BookProvider>
  );
};

export default Index;
