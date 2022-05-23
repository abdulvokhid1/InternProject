import React from "react";
import { Container, Wrapper, Icon, Advanced, Section } from "./style";
import { Popover } from "antd";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";

export const Home = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address </Advanced.Title>
      <Section>
        <Input mr={20} placeholder={"Country"} />
        <Input mr={20} placeholder={"Region"} />
        <Input mr={20} placeholder={"City"} />
        <Input mr={20} placeholder={"Zip code"} />
      </Section>
      <Advanced.Title>Address info</Advanced.Title>
      <Section>
        <Input placeholder={"Room"} />
        <Input placeholder={"Size"} />
        <Input placeholder={"Sort"} />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input placeholder={"Min price"} />
        <Input placeholder={"Max price"} />
      </Section>
      <Section>
        <Button width={"131px"} ml={20} type={"secondary"}>
          Cancel
        </Button>
        <Button width={"131px"} ml={20} type={"primary"}>
          Search
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
