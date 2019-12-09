import React, { Component } from "react";
import "./App.css";
import { fetchAllDogs } from "./services/api-helper";
import BreedList from "./components/BreedList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: null
    };
  }

  fetchDogData = async () => {
    const dogs = await fetchAllDogs();
    console.log(dogs);
    this.setState({
      dogs
    });
  };

  // async componentDidMount() {
  //   await this.fetchDogData();
  // }

  render() {
    return (
      <div className="App">
        <h1>DOG APP</h1>
        <BreedList dogs={this.state.dogs} getBreeds={this.fetchDogData} />
      </div>
    );
  }
}

export default App;
