import React, { useRef, useState } from "react";
// import Card from "../../Card";
import {
  ArrowLeft,
  ArrowRight,
  Carousel,
  CategoryWrapper,
  Container,
  Details,
  Img,
  Wrapper,
} from "./style";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import uy from "../../../assets/imgs/uy.png";

const { REACT_APP_BASE_URL: url } = process.env;

const Card = ({ title }) => {
  return (
    <CategoryWrapper>
      <Img src={uy} alt="test" />
      <Details>{title}</Details>
    </CategoryWrapper>
  );
};
export const Category = () => {
  const slider = useRef();

  const [list, setList] = useState([]);

  useQuery(
    "",
    () => {
      return fetch(`${url}/v1/categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        let response = res?.data?.map((value) => <Card title={value} />);
        setList(response || []);
      },
    }
  );

  return (
    <Container>
      <div className="title center">Categories</div>
      <div className="description center">
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Carousel>
          <AliceCarousel ref={slider} autoWidth items={list} />
          {/* <ArrowRight onClick={() => slider.current?.sliderPrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.sliderNext()}>
            &lang;
          </ArrowLeft> */}
        </Carousel>
      </Wrapper>
    </Container>
  );
};
export default Category;
