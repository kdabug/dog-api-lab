import React from "react";

function RandomDogs(props) {
  return (
    <div className="random-dog-container" s>
      <form>
        <input
          onChange={props.onChange}
          name={props.name}
          placeholder="Enter a dog breed"
        ></input>
        <button
          onClick={async e => {
            e.preventDefault();
            await props.fetchPicture(props.input);
          }}
        >
          Submit
        </button>
      </form>
      {props.randomPic && <img src={props.randomPic} alt="random dog pic" />}
    </div>
  );
}

export default RandomDogs;
