import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import Button from "../../UI/button";
import window from "../../../assets/header/window.png";
import graph from "../../../assets/header/graph.png";
import dots from "../../../assets/general/dots.svg";
import box from "../../../assets/general/box-solid.svg";
import person1 from "../../../assets/sections/intro/person-1.png";
import person2 from "../../../assets/sections/intro/person-2.png";

const Intro = ({ onBook }) => {
  return (
    <Container>
      <div className="section-1">
        <div className="description">
          <h1>Online Training to Help You Start Earning</h1>
          <p>Online training to boost your earning</p>
          <Button onClick={onBook}>Book a Free Consultation</Button>
        </div>
        <div className="illustration">
          <img src={window} id="window" alt="window" />
          <img src={graph} id="graph" alt="graph" />
        </div>
      </div>
      <div className="section-2">
        <div className="illustration">
          {ReactDOM.createPortal(
            <img src={dots} id="header-dots" alt="dots" />,
            document.getElementById("backgrounds-root")
          )}
          {ReactDOM.createPortal(
            <img src={box} id="header-box" alt="box" />,
            document.getElementById("backgrounds-root")
          )}
        </div>
        <div className="profiles">
          <div className="profile-bg-1 profile-container">
            <img src={person1} id="person-1" alt="person-1" />
            <h3>Akash Singh</h3>
            <p>Microentrepreneur, Earns upto 50K monthly</p>
          </div>
          <div className="profile-bg-2 profile-container">
            <img src={person2} id="person-2" alt="person-2" />
            <h3>Rakhi Dasgupta</h3>
            <p>Chef, Earns upto 30K monthly</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
