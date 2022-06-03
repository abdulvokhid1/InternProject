import React, { useRef } from "react";
import { Container, Wrapper } from "./style";
import Input from "../../components/Generic/Input";
import { Button } from "../../components/Generic/Button";

export const Generic = () => {
  const emailRef = useRef("");
  const pwRef = useRef("");
  return (
    <Container>
      <Wrapper>
        <Input ref={emailRef} placeholder="Email" />
        <Input ref={pwRef} placeholder="password" />
        <Button type="secondary">Login</Button>
      </Wrapper>
    </Container>
  );
};
export default Generic;
