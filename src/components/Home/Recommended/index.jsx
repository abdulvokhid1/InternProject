import React, { useRef } from "react";
import Card from "../../Card";
import { ArrowLeft, ArrowRight, Carousel, Container, Wrapper } from "./style";
import AliceCarousel from "react-alice-carousel";

export const Recommend = () => {
  const items = [
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
  ];
  const slider = useRef();
  return (
    <Container>
      <div className="title center">Recommended</div>
      <div className="description center">
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Carousel>
          <AliceCarousel ref={slider} autoWidth items={items} />
          <ArrowRight onClick={() => slider.current?.sliderPrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.sliderNext()}>
            &lang;
          </ArrowLeft>
        </Carousel>
      </Wrapper>
    </Container>
  );
};
export default Recommend;
