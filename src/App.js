import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReactForm from "./views/react-form/ReactForm";
import ReactState from "./views/react-state/ReactState";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReactState />} />
        <Route path="/form" element={<ReactForm />} />
      </Routes>
    </>
  );
};

export default App;
