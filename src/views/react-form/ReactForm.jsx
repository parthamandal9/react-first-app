import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ReactForm.css";

const ReactForm = () => {
  const [theme, setTheme] = useState();
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("id");
  const [orderManner, setOrderManner] = useState("asc");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    console.log("useEffect Executed");
    console.log(
      `API Call to https://demo.com/api/product/${page}?limit=${limit}&order_by=${orderBy}&order_manner=${orderManner}`
    );
    return () => {
      console.log("Unmounted");
    };
  }, [page, orderBy, orderManner, limit]);

  const handleChange = (e, prop) => {
    switch (prop) {
      case "limit":
        setLimit(e.target.value);
        break;
      case "orderBy":
        setOrderBy(e.target.value);
        break;
      case "orderManner":
        setOrderManner(e.target.value);
        break;
      case "page":
        setPage(e);
        break;
      default:
        console.log("Maa Chuda");
    }
  };

  const changeTheme = (theme) => {
    setTheme(theme);
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
      <h1>React Pagination</h1>
      <select
        onChange={(event) => handleChange(event, "limit")}
        name="limit"
        value={limit}
      >
        <option value="">Select Limit</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
      <select
        onChange={(event) => handleChange(event, "orderBy")}
        name="orderBy"
        value={orderBy}
      >
        <option value="">Select Order By</option>
        <option value="id">Id</option>
        <option value="name">Name</option>
      </select>
      <select
        onChange={(event) => handleChange(event, "orderManner")}
        name="orderManner"
        value={orderManner}
      >
        <option value="">Select Order Manner</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <br />
      <br />
      <br />
      <div>
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            style={{
              border: "1px solid red",
              cursor: "pointer",
              color: "red",
              margin: "2px",
              padding: "10px",
              fontSize: 16,
            }}
            onClick={() => handleChange(item, "page")}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <br />
      <br />
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default ReactForm;
