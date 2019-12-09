import React from "react";
import VarietyList from "./VarietyList";

function BreedList(props) {
  return (
    <div className="breed-list-container">
      <button onClick={props.getBreeds}>Get All Dog Breeds</button>
      <>
        {props.dogs &&
          Object.keys(props.dogs).map((key, index) => (
            <div key={index} className="breed">
              <h3>{key}</h3>
              {props.dogs[key].length > 0 && (
                <VarietyList variety={props.dogs[key]} />
              )}
            </div>
          ))}
      </>
    </div>
  );
}

export default BreedList;
