import React from "react";

function Header(props) {
  return (
    <ul>
      <h1>My Dog Website</h1>
      <li className="header-button" onClick={() => props.setView("dog breeds")}>
        Dog List
      </li>
      <li
        className="header-button"
        onClick={() => props.setView("random dogs")}
      >
        Dog Pics
      </li>
    </ul>
  );
}

export default Header;
