import React from "react";
import { Container } from "./styles";
import Intro from "./intro/intro";
import Interests from "./interests/interests";
import Reliance from "./reliance/reliance";
import Earning from "./earning/earning";

const Sections = ({ onBook }) => {
  return (
    <Container>
      <Intro onBook={onBook} />
      <Interests onBook={onBook} />
      <Reliance />
      <Earning />
    </Container>
  );
};

export default Sections;
