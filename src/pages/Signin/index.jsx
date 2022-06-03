import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import Input from "../../components/Generic/Input";
import { Button } from "../../components/Generic/Button";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

export const Generic = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const { mutate } = useMutation(
    () => {
      fetch(`${url}/public/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: pw }),
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        localStorage.setItem("token", res?.authenticationToken);
        console.log(res?.authenticationToken);
        if (res?.authenticationToken) navigate("/home");
      },
      onError: (res) => {
        console.log(res, "error");
      },
    }
  );

  const onSubmit = () => {
    console.log(email);
    console.log(pw);
    mutate();
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
