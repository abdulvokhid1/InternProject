import React from "react";
import Navbar from "../components/Navbar";
import { Wrapper } from "./style";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import navbar from "../utils/navbar";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, Element }) => {
            return <Route key={id} path={path} element={Element} />;
          })}
        </Route>
      </Routes>
    </Router>
  );
};
export default Root;
