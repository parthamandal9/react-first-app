import React from "react";

class ReactState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: ["Dilshad", "Partha", "Shakil"] };
    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    this.setState({ name: "Partha" });
  }
  render() {
    return (
      <>
        <h1>React State</h1>
        <ul>
          {this.state.data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default ReactState;
