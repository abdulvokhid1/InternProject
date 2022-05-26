import React from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = ({
  children,
  onClick,
  height,
  width,
  type,
  ml,
  mr,
  mt,
  mb,
  pl,
  onChange,
  placeholder,
  name,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
      <Icon>{children}</Icon>
      <Container
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        name={name}
      />
    </Wrapper>
  );
};
export default Input;
