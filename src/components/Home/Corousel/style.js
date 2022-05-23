import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as arrowleft } from "../../../assets/icons/arrowleft";
const Container = styled(Carousel)`
  height: 570px;
  width: 100%;
`;
const Img = styled.img`
  background: black;
  width: 100%;
  height: 500px;
`;
const Icon = styled.div``;

Icon.Left = styled(arrowleft)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(100%, -50%);
`;
export { Container, Img, Icon };
