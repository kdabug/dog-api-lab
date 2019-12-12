import React from "react";

function VarietyList(props) {
  return (
    <div className="variety-list-container" s>
      <h4>Varieties: </h4>
      <ul>
        {props.variety.map(variety => (
          <li key={variety}>{variety}</li>
        ))}
      </ul>
    </div>
  );
}

export default VarietyList;
