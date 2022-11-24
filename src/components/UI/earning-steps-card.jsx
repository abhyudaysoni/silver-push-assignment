import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0;
`;

const EarningStepsCard = ({ title, desc, onClick, index, className }) => {
  return (
    <Container className={className} onClick={onClick.bind(null, index)}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Container>
  );
};

export default EarningStepsCard;
