import React from "react";
import { Container } from "./styles";
import Intro from "./intro/intro";
import Interests from "./interests/interests";
import Reliance from "./reliance/reliance";

const Sections = () => {
  return (
    <Container>
      <Intro />
      <Interests />
      <Reliance />
    </Container>
  );
};

export default Sections;
