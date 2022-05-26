import React, { useState } from "react";
import { Container, Total, Wrapper } from "./style";
import Filter from "../Filter";
import Card from "../Card";

export const Proporties = () => {
  const [data, setData] = useState([]);
  return (
    <Container>
      <Filter />
      <div className="title">Proporties</div>
      <div className="description center">
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Total className="description">{data.length}Total</Total>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </Container>
  );
};
export default Proporties;
