import React from "react";
import navbar from "../../utils/navbar.js";
import {
  Body,
  Container,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
  LinkNav,
} from "./style";
import { Outlet, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <span>Logo</span>
          <NavbarBody>
            {navbar.map((value) => {
              return <LinkNav>{value.title}</LinkNav>;
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
