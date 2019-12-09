import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>My Dog Website</h1>
      <ul className="button-container">
        <li className="set-view" onClick={() => props.setView("dog breeds")}>
          Dog List
        </li>
        <li className="set-view" onClick={() => props.setView("random dogs")}>
          Dog Pics
        </li>
      </ul>
    </div>
  );
}

export default Header;
