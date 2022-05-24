import React from "react";
import { Container, Img, InfoWrapper, Info } from "./style";
import nobackground from "../../assets/imgs/nobackground.png";
import nouser from "../../assets/imgs/nouser.png";

export const Card = ({ info }) => {
  return (
    <Container>
      <Img src={info?.img || nobackground} />
      <InfoWrapper>
        <div className="subtitle">New Apartment Nice Wiew</div>
        <div className="descripton">Quincy St, Brooklyn, NY, USA</div>
      </InfoWrapper>
      <Info>
        <Info.Detail>Hello</Info.Detail>
        <Info.Detail>Hello</Info.Detail>
        <Info.Detail>Hello</Info.Detail>
        <Info.Detail>Hello</Info.Detail>
      </Info>
    </Container>
  );
};
export default Card;
