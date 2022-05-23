import React from "react";
import Filter from "../Filter";
import { Container } from "./style";
import Carousel from "./Corousel";
export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
    </Container>
  );
};
export default Home;
