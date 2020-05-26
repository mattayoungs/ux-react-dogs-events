import React, { Component } from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    dogs: [
      {
        name: "Scruffles",
      },
      {
        name: "Snarf",
      },
      {
        name: "Wookie",
      },
    ],
    newDogName: "",
  };

  handleChangeDogName = (event) => {
    this.setState({ newDogName: event.target.value });
  };

  handleAddDogName = () => {
    let newDogObj = {
      name: this.state.newDogName,
    };
    this.setState((state) => ({
      dogs: [...state.dogs, newDogObj],
      newDogName: "",
    }));
  };

  render() {
    return (
      <div className="app">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <ul className="dogList">
          {this.state.dogs.map((dog, index) => (
            <li key={index}>
              <Dog dog={dog} />
            </li>
          ))}
        </ul>
        <br />

        <input
          type="text"
          onChange={this.handleChangeDogName}
          value={this.state.newDogName}
        />
        <button onClick={this.handleAddDogName}>Add Dog</button>
      </div>
    );
  }
}

export default App;
