import React, { useState } from "react";

const ReactForm = () => {
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>React Form Inputs</h1>
      <input
        type="text"
        name="name"
        onChange={(event) => handleChange(event)}
      />
      <p>Name : {name}</p>
    </>
  );
};

export default ReactForm;
