import React from "react";
import navbar from "../../utils/navbar.js";
import { Body, Container, NavbarBody, NavbarWrapper, Wrapper } from "./style";
import { NavLink, Outlet } from "react-router-dom";
export const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <span>Logo</span>
          <NavbarBody>
            {navbar.map(({ title, id, path }) => {
              return (
                <NavLink key={id} to={path}>
                  {title}
                </NavLink>
              );
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
