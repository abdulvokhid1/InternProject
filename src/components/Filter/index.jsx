import React from "react";
import { Container, Wrapper } from "./style";
import { Popover } from "antd";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Input />
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
