import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context API</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
