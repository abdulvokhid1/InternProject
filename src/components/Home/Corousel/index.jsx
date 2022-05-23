import React, { useRef } from "react";
import { Container, Icon, Img, Wrapper } from "./style";
import img1 from "../../../assets/imgs/img1.png";
import img2 from "../../../assets/imgs/img2.png";

export const Home = () => {
  const slider = useRef();
  return (
    <Wrapper>
      <Icon.Left onClick={() => slider.current.prev()} />
      <Icon.Right onClick={() => slider.current.next()} />
      <Container ref={slider} dots autoplay>
        <Img src={img2} />
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img1} />
      </Container>
    </Wrapper>
  );
};
export default Home;
