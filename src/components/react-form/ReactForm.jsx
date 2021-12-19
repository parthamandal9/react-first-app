import React, { useState } from "react";

const ReactForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      <input
        type="email"
        name="email"
        onChange={(event) => handleChange(event)}
      />
      <p>Email : {formData.email}</p>
    </>
  );
};

export default ReactForm;
