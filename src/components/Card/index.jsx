import React from "react";
import {
  Container,
  Img,
  InfoWrapper,
  Info,
  Icons,
  Footer,
  User,
} from "./style";
import nobackground from "../../assets/imgs/nobackground.png";
import nouser from "../../assets/imgs/nouser.png";

export const Card = ({ info, mr }) => {
  return (
    <Container mr={mr}>
      <InfoWrapper>
        <User>
          <User.Img src={info?.user?.img || nouser} />
        </User>
        <Img src={info?.img || nobackground} />
        <div className="subtitle">New Apartment Nice Wiew</div>
        <div className="descripton">Quincy St, Brooklyn, NY, USA</div>
        <Info>
          <Info.Detail>
            <Icons.Bed />
            <div className="description">{info?.beds || 0} beds</div>
          </Info.Detail>{" "}
          <Info.Detail>
            <Icons.Bath />
            <div className="description">{info?.baths || 0} Baths</div>
          </Info.Detail>{" "}
          <Info.Detail>
            <Icons.Garage />
            <div className="description">{info?.garage || 0} Garages</div>
          </Info.Detail>{" "}
          <Info.Detail>
            <Icons.Ruler />
            <div className="description">{info?.sqr || 0} Sqr</div>
          </Info.Detail>
        </Info>
      </InfoWrapper>
      <Footer>
        <Info.Detail>
          <div className="deleted description ">12,000$</div>
          <div className="subtitle">15,000$</div>
        </Info.Detail>
        <div className="endToRight">
          <Icons.Resize />
          <Icons.Heart />
        </div>
      </Footer>
    </Container>
  );
};
export default Card;
