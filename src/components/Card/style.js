import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as heart } from "../../assets/icons/heart.svg";
const Container = styled.div`
  display: flex;
  max-width: 380px;
  flex-direction: column;
  height: 430px;
  min-width: 280px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  margin-right: ${({ mr }) => mr && `${mr}px`};
`;
const Img = styled.img`
  min-height: 220px;
  max-height: 220px;
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  padding-bottom: 0;
  border-top: 1px solid #e6e9ec;
  position: relative;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;
Info.Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  cursor: pointer;
  margin-left: 2px;
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 10px;
`;
Icons.Heart = styled(heart)`
  margin-left: 2px;
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 10px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
const Footer = styled.div`
  display: flex;
  border-top: 1px solid #e6e9ec;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;
const User = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 220px;
  right: 20px;
  /* margin-left: 240px; */
  border-radius: 70%;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  overflow: hidden;
`;
User.Img = styled.img`
  width: 43px;
  height: 43px;
  object-fit: cover;
`;
export { Container, Img, InfoWrapper, Info, User, Icons, Footer };
