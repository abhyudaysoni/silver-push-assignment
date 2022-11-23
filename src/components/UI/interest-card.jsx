import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 2px 10px 16px rgba(101, 97, 125, 0.2);
  padding: 1rem;
  border-radius: 10px;
`;

const InterestCard = (props) => {
  return <Container className={props.className}>{props.children}</Container>;
};

export default InterestCard;
