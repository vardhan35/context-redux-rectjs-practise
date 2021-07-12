import React, { Component } from "react";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import ThemeProvider from "./context/ThemeContext";

class Index extends Component {
  render() {
    return (
      <div className="context_app">
        <ThemeProvider>
          <Navbar />
          <Booklist />
          <ToggleTheme />
        </ThemeProvider>
      </div>
    );
  }
}

export default Index;
