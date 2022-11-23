import React from "react";
import { Container } from "./styles";
import logo from "../../assets/header/logo.svg";

const Header = () => {
  return (
    <Container>
      <div className="logo-container">
        <img id="logo" src={logo} alt="" />
      </div>
    </Container>
  );
};

export default Header;
