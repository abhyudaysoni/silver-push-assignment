import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import Button from "../UI/button";
import illustration1 from "../../assets/footer/illustration-1.png";
import illustration2 from "../../assets/footer/illustration-2.png";
import illustration3 from "../../assets/footer/illustration-3.png";
import goToTop from "../../assets/footer/go-to-top.png";
import lines from "../../assets/general/lines.svg";

const Footer = () => {
  return (
    <Container>
      <div className="footer-description">
        <div className="illustration-container">
          <img src={illustration1} id="illustration-1" alt="illustration1" />
          <img src={illustration2} id="illustration-2" alt="illustration2" />
          <img src={illustration3} id="illustration-3" alt="illustration3" />
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
        <div className="utils">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="copyrights">©2020 Yukti || All Right Reserved</div>
      </div>
      {ReactDOM.createPortal(
        <img src={lines} id="footer-lines-1" alt="footer-lines" />,
        document.getElementById("illustrations-root")
      )}
      {ReactDOM.createPortal(
        <img src={lines} id="footer-lines-2" alt="footer-lines" />,
        document.getElementById("illustrations-root")
      )}
      {ReactDOM.createPortal(
        <img src={goToTop} id="go-to-top" alt="go-to-top" />,
        document.getElementById("illustrations-root")
      )}
    </Container>
  );
};

export default Footer;
