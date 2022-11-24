import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;
  background: rgba(0, 0, 0, 0.75);
`;

const Backdrop = ({ onClick }) => {
  return <Container onClick={onClick}></Container>;
};

export default Backdrop;
