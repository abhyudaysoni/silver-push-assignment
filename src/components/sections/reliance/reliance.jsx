import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import Button from "../../UI/button";
import bigDots from "../../../assets/sections/reliance/big-dots.svg";
import profileImg from "../../../assets/sections/reliance/profile.svg";
import illustration from "../../../assets/sections/reliance/illustration-section-2.png";
import curlyLines from "../../../assets/sections/reliance/curly-lines.svg";

const Reliance = () => {
  return (
    <Container>
      {ReactDOM.createPortal(
        <img id="curly-lines" src={curlyLines} alt="curly-lines" />,
        document.getElementById("illustrations-root")
      )}
      <div className="section-1">
        <h1>Become Self Reliant</h1>

        <p>
          Start your own business or service and add an extra income to your
          family with ease.
        </p>
        <Button>See How</Button>
        <div className="profile">
          <img src={bigDots} id="big-dots" alt="big-dots" />
          <img src={profileImg} id="profile-img" alt="profile-img" />
          <div className="profile-details">
            <h3>Rahul Mahajan</h3>
            <p>Banker, Earns upto 25K monthly reselling products</p>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="illustration-container">
          <img
            src={illustration}
            id="illustration-section-2"
            alt="illustration"
          />
        </div>
      </div>
    </Container>
  );
};

export default Reliance;
