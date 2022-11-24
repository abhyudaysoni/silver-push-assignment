import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import Button from "../../UI/button";
import window from "../../../assets/header/window.svg";
import graph from "../../../assets/header/graph.svg";
import dots from "../../../assets/general/dots.svg";
import box from "../../../assets/general/box-solid.svg";
import person1 from "../../../assets/header/person-1.svg";
import person2 from "../../../assets/header/person-2.svg";

const Intro = () => {
  return (
    <Container>
      <div className="section-1">
        <div className="description">
          <h1>Online Training to Help You Start Earning</h1>
          <p>Online training to boost your earning</p>
          <Button>Book a Free Consultation</Button>
        </div>
        <div className="illustration">
          {ReactDOM.createPortal(
            <img src={window} id="window" alt="window" />,
            document.getElementById("backgrounds-root")
          )}
          {ReactDOM.createPortal(
            <img src={graph} id="graph" alt="graph" />,
            document.getElementById("backgrounds-root")
          )}
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
