import React from "react";
import Filter from "../Filter";
import { Container } from "./style";
import Carousel from "./Corousel";
import Recommended from "../Home/Recommended";
import Categories from "./Categories";
export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
      <Categories />
    </Container>
  );
};
export default Home;
