import React from "react";
import Filter from "../Filter";
import { Container } from "./style";
import Carousel from "./Corousel";
import Card from "../Card";
export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Card />
    </Container>
  );
};
export default Home;
