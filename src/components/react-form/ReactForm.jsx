import React, { useState } from "react";

const ReactForm = () => {
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");

  return (
    <>
      <h1>React Form Inputs</h1>
      <input
        type="text"
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <p>Name : {name}</p>
    </>
  );
};

export default ReactForm;
