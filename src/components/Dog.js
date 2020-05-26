// Dog.js
import React from "react";
// import { render } from "@testing-library/react";

class Dog extends React.Component {
  constructor(props) {
    super(props);
  }
  petDog = () => {
    alert(`You Pet ${this.props.dog.name}!`);
  };
  render() {
    return (
      <div>
        {this.props.dog.name}
        <button onClick={this.petDog}>Pet</button>
      </div>
    );
  }
}

export default Dog;
