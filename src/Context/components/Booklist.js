import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
class Booklist extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;
    return (
      <div
        className="booklist"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui, margin: "0.5em" }}>Book 1</li>
          <li style={{ background: theme.ui, margin: "0.5em" }}>Book 2</li>
          <li style={{ background: theme.ui, margin: "0.5em" }}>Book 3</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
