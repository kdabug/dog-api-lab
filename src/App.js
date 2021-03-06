import React, { Component } from "react";
import "./App.css";
import { fetchAllDogs, fetchRandomDogPicture } from "./services/api-helper";
import BreedList from "./components/BreedList";
import RandomDogs from "./components/RandomDogs";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: null,
      randomPicture: null,
      currentPic: "",
      breed: "",
      currentView: ""
    };
  }

  setView = currentView => {
    this.setState({
      currentView
    });
  };

  pageView = () => {
    switch (this.state.currentView) {
      case "random dogs":
        return (
          <RandomDogs
            name="breed"
            onChange={this.handleChange}
            fetchPicture={this.fetchDogPicture}
            randomPic={this.state.randomPicture}
            input={this.state.breed}
          />
        );
      default:
        return (
          <BreedList dogs={this.state.dogs} getBreeds={this.fetchDogData} />
        );
    }
  };

  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
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
        <Header setView={this.setView} /> {this.pageView()}
      </div>
    );
  }
}

export default App;
