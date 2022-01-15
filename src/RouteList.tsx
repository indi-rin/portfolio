import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";

const RouteList = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RouteList;
