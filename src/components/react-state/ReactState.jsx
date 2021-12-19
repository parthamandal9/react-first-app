import React, { useState } from "react";

const ReactState = (props) => {
  const [name] = useState("Dilshad");

  return (
    <>
      <h1>React State</h1>
      <p>Name : {name}</p>
    </>
  );
};

export default ReactState;
