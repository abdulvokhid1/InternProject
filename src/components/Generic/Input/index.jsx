import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    {
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
      defaultValue,
    },
    ref
  ) => {
    return (
      <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
        <Icon>{children}</Icon>
        <Container
          ref={ref}
          onChange={onChange}
          placeholder={placeholder}
          pl={pl}
          type={type}
          width={width}
          height={height}
          onClick={onClick}
          name={name}
          defaultValue={defaultValue}
        />
      </Wrapper>
    );
  }
);
export default Input;
