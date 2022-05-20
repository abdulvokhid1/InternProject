import React from "react";
import { Container, Wrapper } from "./style";
import { Button } from "../Generic/Button";
import { Popover } from "antd";

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Button width={"131px"} ml={20} type={"secondary"}>
          Advanced
        </Button>
        <Button width={"131px"} ml={20} type={"primary"}>
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
