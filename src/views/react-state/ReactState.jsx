import React, { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  { name: "Dilshad", mob: 6201419054 },
  { name: "Partha", mob: 8250761658 },
];

const ReactState = (props) => {
  const [data, setData] = useState(items);

  const changeState = () => {
    setData([
      { name: "Shakil", mob: 6201419054 },
      { name: "Deepak", mob: 8250761658 },
    ]);
  };

  return (
    <>
      <h1>React State</h1>
      <ul onClick={changeState}>
        {data.map((item) => (
          <li key={item.name}>Name : {item.name}</li>
        ))}
      </ul>
      <Link to="/form">Fill Form</Link>
    </>
  );
};

export default ReactState;
