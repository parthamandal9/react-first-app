import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";

const ReactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    gender: "",
    education: [],
    country: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducation = (e) => {
    let educ = formData.education;
    const index = educ.indexOf(e.target.value);
    if (index === -1)
      setFormData({
        ...formData,
        education: [...educ, e.target.value],
      });
    else {
      educ = educ.filter((item) => educ.indexOf(item) !== index);
      setFormData({
        ...formData,
        education: educ,
      });
    }
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      profilePic: e.target.files[0],
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      address: "",
      gender: "",
      country: "",
      education: [],
      profilePic: null,
    });
  };

  return (
    <>
      <h1>React Form Inputs</h1>
      <CustomInput
        name="name"
        value={formData.name}
        handleChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(event) => handleChange(event)}
      />
      <p>Email : {formData.email}</p>
      <textarea
        name="address"
        value={formData.address}
        onChange={(event) => handleChange(event)}
      ></textarea>
      <p>Address : {formData.address}</p>

      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={(event) => handleChange(event)}
      />
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={(event) => handleChange(event)}
      />
      <input
        type="radio"
        name="gender"
        value="Other"
        checked={formData.gender === "Other"}
        onChange={(event) => handleChange(event)}
      />
      <p>Gender : {formData.gender}</p>

      <input
        type="checkbox"
        checked={formData.education.includes("Metric")}
        name="education"
        value="Metric"
        onChange={(event) => handleEducation(event)}
      />
      <input
        type="checkbox"
        name="education"
        checked={formData.education.includes("Intermediate")}
        value="Intermediate"
        onChange={(event) => handleEducation(event)}
      />
      <input
        type="checkbox"
        name="education"
        checked={formData.education.includes("Graduate")}
        value="Graduate"
        onChange={(event) => handleEducation(event)}
      />
      <input
        type="checkbox"
        name="education"
        checked={formData.education.includes("Master")}
        value="Master"
        onChange={(event) => handleEducation(event)}
      />
      <p>Education : {formData.education.map((item) => `${item} ,`)}</p>
      <select
        onChange={(event) => handleChange(event)}
        name="country"
        value={formData.country}
      >
        <option value="">Select country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="UAE">UAE</option>
      </select>
      <p>Country : {formData.country}</p>
      <input type="file" name="profilePic" onChange={handleFile} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default ReactForm;
