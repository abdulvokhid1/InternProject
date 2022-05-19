import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);

  -webkit-touch-callout: none; /*iOS Safari*/
  -webkit-user-select: none; /*Safari*/
  -khtml-user-select: none; /*Konqueror HTML*/
  -moz-user-select: none; /*Old versions of Firefox*/
  -ms-user-select: none; /*Internet Explorer/Edge*/
  user-select: none; /*Non-prefixed version, currently 
  supported by Chrome,Opera and Firefox*/
`;
const NavbarWrapper = styled.div`
  display: flex;
  height: 64px;
  max-width: 1440px;
  font-family: "Montserrat";
  font-weight: 400px;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
  align-items: center;
`;
const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  .active {
    color: #00fff5;
  }
`;
const Body = styled.div`
  display: flex;
  width: 100%;
`;
const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Logo_Icon = styled(logo)``;
const Logo_Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
`;
export {
  Logo_Icon,
  Logo_Title,
  Logo,
  Wrapper,
  Container,
  Body,
  NavbarWrapper,
  NavbarBody,
  Link,
};
