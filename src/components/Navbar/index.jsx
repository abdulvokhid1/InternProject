import React from "react";
import { Outlet } from "react-router-dom";
import navbar from "../../utils/navbar.js";
import { Body, Container, NavbarBody, NavbarWrapper, Wrapper } from "./style";

export const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <span>Logo</span>
          <NavbarBody>
            {navbar.map(({ title }) => {
              return <h1>{title}</h1>;
            })}
          </NavbarBody>
          <span>Button</span>
        </NavbarWrapper>
      </Container>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
};
export default Navbar;
