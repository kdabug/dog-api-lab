import React from "react";

function VarietyList(props) {
  console.log(props.variety);
  return (
    <div className="variety-list-container" s>
      <h4>Varieties: </h4>
      <ul>
        {props.variety.map(variety => (
          <li>{variety}</li>
        ))}
      </ul>
    </div>
  );
}

export default VarietyList;
