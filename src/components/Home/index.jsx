import React from "react";
import Filter from "../Filter";
import { Container } from "./style";
import Carousel from "./Corousel";
import Recommended from "../Home/Recommended";
export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
    </Container>
  );
};
export default Home;
