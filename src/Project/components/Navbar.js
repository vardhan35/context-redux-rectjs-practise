import React, { useContext } from "react";
import BookContext from "../Context/BookContext";
const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h2>Number Books : {books.length}</h2>
    </div>
  );
};

export default Navbar;
