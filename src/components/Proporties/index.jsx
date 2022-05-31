import React, { useState } from "react";
import { Container, Total, Wrapper } from "./style";
import Filter from "../Filter";
import Card from "../Card";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
const { REACT_APP_BASE_URL: url } = process.env;

export const Proporties = () => {
  // console.log(location, "loc");
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const query = useSearch();
  useQuery(
    ["get data", search],
    () => {
      return fetch(`${url}/v1/houses/list${search}`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );
  // console.log(data, "res");
  return (
    <Container>
      <Filter />
      <div className="title">Proporties</div>
      <div className="description center">
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Total className="description">{data?.length}Total</Total>
      <Wrapper>
        {data?.map((value) => {
          return <Card key={value.id} info={value} />;
        })}
      </Wrapper>
    </Container>
  );
};
export default Proporties;
