import React from "react";
import Card from "../Card";
import { Carousel, Container, Wrapper } from "./style";
import AliceCarousel from "react-alice-carousel";

export const Recommend = () => {
  const items = [
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
  ];
  return (
    <Container>
      <div className="title center">Recommended</div>
      <div className="description center">
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Carousel>
          <AliceCarousel autoWidth items={items} />
        </Carousel>
      </Wrapper>
    </Container>
  );
};
export default Recommend;
