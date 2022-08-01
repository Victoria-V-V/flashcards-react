import React from "react";
import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div className="App">
      This page doesn't exist. Go <Link to="/">Home</Link>
    </div>
  );
};

export default Notfoundpage;
