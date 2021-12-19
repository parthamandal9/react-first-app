import React from "react";

class ReactState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Dilshad" };
    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    this.setState({ name: "Partha" });
  }
  render() {
    return (
      <>
        <h1>React State</h1>
        <p onClick={this.changeState}>Name : {this.state.name}</p>
      </>
    );
  }
}

export default ReactState;
