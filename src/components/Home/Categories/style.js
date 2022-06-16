import styled from "styled-components";
import { ReactComponent as arrowright } from "../../../assets/icons/arrowright.svg";
import { ReactComponent as arrowleft } from "../../../assets/icons/arrowleft.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
  position: relative;
  padding: 0 130px;
`;
const Carousel = styled.div`
  display: flex;
  width: 1440px;
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: none;
  }
`;
const ArrowLeft = styled(arrowleft)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  right: 20%;
  transform: translate(-50%, -100%);
  width: 45px;
  height: 45px;
  color: black;
  background: white;
  opacity: 0.5;
  padding-left: 10px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 0.7;
  }
`;
const ArrowRight = styled(arrowright)`
  left: 20px;
  transform: translate(50%, -100%);
  padding-left: 0;
  padding-right: 10px;
`;
const CategoryWrapper = styled.div`
  display: flex;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  width: 280px;
  max-width: 280px;
  height: 350px;
  position: relative;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;
const Img = styled.img`
  /* width: 100%;
  height: 100%; */
  width: 280px;
  height: 350px;
`;
export {
  Details,
  Img,
  CategoryWrapper,
  Wrapper,
  Container,
  Carousel,
  ArrowLeft,
  ArrowRight,
};
