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
      <Img src={info?.attachments[0]?.imgPath || nobackground} />
      <InfoWrapper>
        <User>
          <User.Img src={info?.user?.img || nouser} />
        </User>
        <div
          className="subtitle"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {info?.description}
        </div>
        <div className="descripton">
          {info?.name || "house"},{info?.address || "Address"},{""}
          {info?.city || "City"},{info?.country || "Country"}
        </div>
        <Info>
          <Info.Detail>
            <Icons.Bed />
            <div className="description">
              {info?.houseDetails?.beds || 0} beds
            </div>
          </Info.Detail>{" "}
          <Info.Detail>
            <Icons.Bath />
            <div className="description">
              {info?.houseDetails?.bath || 0} Baths
            </div>
          </Info.Detail>{" "}
          <Info.Detail>
            <Icons.Garage />
            <div className="description">
              {info?.houseDetails?.garage || 0} Garages
            </div>
          </Info.Detail>{" "}
          <Info.Detail>
            <Icons.Ruler />
            <div className="description">
              {info?.houseDetails?.area || 0} Sqr
            </div>
          </Info.Detail>
        </Info>
      </InfoWrapper>
      <Footer>
        <Info.Detail>
          <div className="deleted description ">{info?.salePrice || 0}</div>
          <div className="subtitle">{info?.price || 0}</div>
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
