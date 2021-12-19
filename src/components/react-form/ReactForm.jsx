import React, { useState } from "react";

const ReactForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>React Form Inputs</h1>
      <input
        type="text"
        name="name"
        onChange={(event) => handleChange(event)}
      />
      <p>Name : {formData.name}</p>
    </>
  );
};

export default ReactForm;
