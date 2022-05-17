import React from "react";
import Navbar from "../components/Navbar";
import { Wrapper } from "./style";
import { BrowserRouter as Router, Routes } from "react-router-dom";

export const Root = () => {
  return (
    <Router>
      <Wrapper>
        <Navbar />
      </Wrapper>
    </Router>
  );
};
export default Root;
