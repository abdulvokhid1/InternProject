import React from "react";
import { Container, Img } from "./style";
import img1 from "../../../assets/imgs/img1.png";
import img2 from "../../../assets/imgs/img2.png";

export const Home = () => {
  return (
    <Container dots autoplay>
      <Img src={img2} />
      <Img src={img1} />
      <Img src={img2} />
      <Img src={img1} />
    </Container>
  );
};
export default Home;
