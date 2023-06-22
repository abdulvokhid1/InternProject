import React from "react";
import { Container, Wrapper, Icon, Advanced, Section } from "./style";
import { Popover } from "antd";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";
import { useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import UseReplace from "../../hooks/useReplace";

export const Home = () => {
  const navigate = useNavigate();
  const query = useSearch();
  const onChange = ({ target }) => {
    const { value, name } = target;
    // console.log(target, name);
    navigate(`${UseReplace(name, value)}`);
  };

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address </Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="country"
          defaultValue={query.get("country")}
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          name="region"
          defaultValue={query.get("region")}
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          name="city"
          defaultValue={query.get("city")}
          placeholder={"City"}
        />
        <Input placeholder={"Zip code"} />
      </Section>
      <Advanced.Title>Address info</Advanced.Title>
      <Section>
        <Input placeholder={"Address"} />
        <Input placeholder={"House Name"} />
        <Input placeholder={"Rooms"} />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input placeholder={"Min price"} />
        <Input placeholder={"Max price"} />
      </Section>
      <Section>
        <Button width={"131px"} type={"primary"} onClick={() => {}}>
          Clear
        </Button>
      </Section>
    </Advanced>
  );

  return (
    <Container>
      <Wrapper>
        <Input
          pl={"42px"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          content={advancedSearch}
          trigger={"click"}
        >
          <Button width={"131px"} ml={20} type={"secondary"}>
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <Button width={"131px"} ml={20} type={"primary"}>
          <Icon.Search /> Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
