import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Notfoundpage = () => {
  return (
    <div className="App">
      <Title>
        This page doesn't exist. Go <Link to="/">Home</Link>
      </Title>
    </div>
  );
};

export default Notfoundpage;
