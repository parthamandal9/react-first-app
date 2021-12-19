import React, { useState } from "react";
import "./App.css";
import ReactForm from "./components/react-form/ReactForm";
import ReactState from "./components/react-state/ReactState";

const App = () => {
  const [tab] = useState("form");
  return (
    <>
      {tab === "form" ? <ReactForm /> : tab === "state" ? <ReactState /> : ""}
    </>
  );
};

export default App;
