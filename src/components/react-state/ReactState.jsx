import React from "react";

class ReactState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Dilshad" };
  }

  render() {
    return (
      <>
        <h1>React State</h1>
        <p>Name : {this.state.name}</p>
      </>
    );
  }
}

export default ReactState;
