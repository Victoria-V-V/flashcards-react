import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="App">
        <div>
          <Link to="/WordList">Check WordList</Link>
        </div>
        <div>
          <Link to="/Game">Play Game</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
