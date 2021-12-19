import React from "react";

const CustomInput = ({ name, type = "text", value, handleChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => handleChange(event)}
      />
      <p>Name : {value}</p>
    </>
  );
};

export default CustomInput;
