import React, { useRef } from "react";
import { Container } from "./style";
import Input from "../../components/Generic/Input";
import Button from "../../components/Generic/Button";

export const Generic = () => {
  const emailRef = useRef("");
  const pwRef = useRef("");
  return (
    <Container>
      <Input ref={emailRef} placeholder="Email" />
      <Input ref={pwRef} placeholder="password" />
      <Button>Login</Button>
    </Container>
  );
};
export default Generic;
