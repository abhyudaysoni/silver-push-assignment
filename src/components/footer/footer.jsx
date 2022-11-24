import React from "react";
import { Container } from "./styles";
import Button from "../UI/button";
import illustration1 from "../../assets/footer/illustration-1.svg";
import illustration2 from "../../assets/footer/illustration-2.svg";
import illustration3 from "../../assets/footer/illustration-3.svg";
import bg1 from "../../assets/footer/background-1.svg";

const Footer = () => {
  return (
    <Container>
      <div className="footer-description">
        <div className="illustration-container">
          <img src={illustration3} id="illustration-3" alt="illustration3" />
          <img src={illustration2} id="illustration-2" alt="illustration2" />
          <img src={illustration1} id="illustration-1" alt="illustration1" />
        </div>
        <div className="footer-details">
          <h1>Start Learning Today</h1>
          <p>
            Talk to our experts and start chasing your dream by booking a free
            consultation
          </p>
          <Button>Book A free Consultaion</Button>
        </div>
      </div>
      <div className="footer-footnotes">
        <img src={bg1} alt="" />
      </div>
    </Container>
  );
};

export default Footer;
