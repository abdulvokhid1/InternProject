import React from "react";
import navbar from "../../utils/navbar";
import {
  Container,
  Link,
  Logo,
  Logo_Icon,
  Logo_Title,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";
import { Button } from "../Generic/Button";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo_Icon />
            <Logo_Title>Houzing</Logo_Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path }) => {
              return (
                <Link key={id} to={path}>
                  {title}
                </Link>
              );
            })}
          </NavbarBody>
          <Button onClick={() => navigate("/login")} width="120px">
            Login
          </Button>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};
export default Navbar;
