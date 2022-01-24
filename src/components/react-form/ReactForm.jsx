import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../custom-input/CustomInput";
import "./ReactForm.css";

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
  const [theme, setTheme] = useState();

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 21 || hours <= 4) setTheme("dark");
    else setTheme("light");
  }, [formData]);

  const navigate = useNavigate();

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

  const changeTheme = (theme) => {
    setTheme(theme);
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
    navigate("/");
  };

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      Theme :{" "}
      <input
        type="radio"
        name="theme"
        value="dark"
        id="dark"
        checked={theme === "dark"}
        onChange={() => changeTheme("dark")}
      />{" "}
      <label htmlFor="dark">Dark</label>
      <input
        type="radio"
        name="theme"
        id="light"
        value="light"
        checked={theme === "light"}
        onChange={() => changeTheme("light")}
      />{" "}
      <label htmlFor="light">Light</label>
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
      <Link to="/">Back</Link>
    </div>
  );
};

export default ReactForm;
