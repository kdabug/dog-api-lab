import React, { Component } from "react";
import "./App.css";
import { fetchAllDogs, fetchRandomDogPicture } from "./services/api-helper";
import BreedList from "./components/BreedList";
import RandomDogs from "./components/RandomDogs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: null,
      randomPicture: null,
      currentPic: "",
      breed: ""
    };
  }

  handleChange = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handlePictureSubmit = async () => {
    console.log(this.state.breed);
    await this.fetchDogPicture(this.state.breed);
  };

  fetchDogData = async () => {
    const dogs = await fetchAllDogs();
    this.setState({
      dogs
    });
  };

  fetchDogPicture = async breed => {
    console.log(breed);
    const randomPicture = await fetchRandomDogPicture(breed);
    this.setState({
      randomPicture
    });
  };

  render() {
    return (
      <div className="App">
        <h1>DOG APP</h1>
        <BreedList dogs={this.state.dogs} getBreeds={this.fetchDogData} />
        <RandomDogs
          name="breed"
          onChange={this.handleChange}
          onSubmit={this.handlePictureSubmit}
          randomPic={this.state.randomPicture}
        />
      </div>
    );
  }
}

export default App;
