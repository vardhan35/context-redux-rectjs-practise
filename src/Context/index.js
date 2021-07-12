import React, { Component } from "react";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";

class Index extends Component {
  render() {
    return (
      <div className="context_app">
        <Navbar />
        <Booklist />
      </div>
    );
  }
}

export default Index;
