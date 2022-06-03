import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import Input from "../../components/Generic/Input";
import { Button } from "../../components/Generic/Button";

export const Generic = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = () => {
    console.log(email);
    console.log(pw);
  };
  return (
    <Container>
      <div className="title">Signin</div>
      <Wrapper>
        <Input
          onChange={({ target }) => setEmail(target?.value)}
          value={email}
          placeholder="Email"
        />
        <Input
          onChange={({ target }) => setPw(target?.value)}
          value={pw}
          placeholder="password"
        />
        <Button onClick={onSubmit} type="secondary">
          Login
        </Button>
      </Wrapper>
    </Container>
  );
};
export default Generic;
