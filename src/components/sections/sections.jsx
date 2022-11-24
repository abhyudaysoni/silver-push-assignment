import React from "react";
import { Container } from "./styles";
import Intro from "./intro/intro";
import Interests from "./interests/interests";
import Reliance from "./reliance/reliance";
import Earning from "./earning/earning";

const Sections = () => {
  return (
    <Container>
      <Intro />
      <Interests />
      <Reliance />
      <Earning />
    </Container>
  );
};

export default Sections;
