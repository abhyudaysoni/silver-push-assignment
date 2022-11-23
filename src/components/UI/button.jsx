import React from "react";
import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  padding: 1rem;
  background: none;
  border: none;
  border-radius: 10px;
  color: black;
`;

const Button = (props) => {
  return (
    <Container
      className={props.className}
      id={props.id}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  );
};

export default Button;
