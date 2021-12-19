import React, { useState } from "react";

const ReactState = (props) => {
  const [name, setName] = useState("Dilshad");

  const changeState = () => {
    setName("Partha");
  };

  return (
    <>
      <h1>React State</h1>
      <p onClick={changeState}>Name : {name}</p>
    </>
  );
};

export default ReactState;
