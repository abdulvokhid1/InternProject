import React, { useRef, useState } from "react";
// import Card from "../../Card";
import {
  ArrowLeft,
  ArrowRight,
  Carousel,
  CategoryWrapper,
  Container,
  Img,
  Wrapper,
} from "./style";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import img1 from "../../../assets/imgs/img1.png";

const { REACT_APP_BASE_URL: url } = process.env;

// const Title = ({ title }) => {
//   return <h1>{title}</h1>;
// };
const Card = () => {
  return (
    <CategoryWrapper>
      <Img src={img1} />
    </CategoryWrapper>
  );
};
export const Category = () => {
  // const items = [
  //   <Card mr={20} />,
  //   <Card mr={20} />,
  //   <Card mr={20} />,
  //   <Card mr={20} />,
  // ];
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
        let response = res?.data?.map((value) => (
          <Card key={value.id} title={value} />
          // <div style={{ height: "200px", width: "200px" }}>
          //   <Title title={value} />
          // </div>
        ));
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
