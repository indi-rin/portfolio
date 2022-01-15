import React from "react";
import RouteList from "./RouteList";
import Navbar from "./components/Navbar/Navbar";

import "./style.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <RouteList />
    </div>
  );
};

export default App;
