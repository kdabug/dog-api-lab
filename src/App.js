import React, { Component } from "react";
import "./App.css";
import { fetchAllDogs } from "./services/api-helper";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: []
    };
  }

  async componentDidMount() {
    const dogs = await fetchAllDogs();
  }

  render() {
    return (
      <div className="App">
        <h1>DOG APP</h1>
      </div>
    );
  }
}

export default App;
