import React from "react";
import InterestCard from "../../UI/interest-card";
import { Container } from "./styles";
import Button from "../../UI/button";
import { interests } from "../../../constants/interests";
import arrowRed from "../../../assets/sections/arrow-red.svg";
import circles from "../../../assets/general/circles.svg";
import lines from "../../../assets/general/lines.svg";

const Interests = () => {
  return (
    <Container>
      <h1>Find What Matches Your Interests</h1>
      <img id="circles" src={circles} alt="circles" />
      <div className="interest-cards">
        {interests.map((interest, index) => (
          <InterestCard className="interest-card" key={index}>
            <h2>{interest.title}</h2>
            <p>{interest.desc}</p>
            <Button>
              <div id="btn-content">
                <p>Book Now</p>
                <img src={arrowRed} alt="" />
              </div>
            </Button>
            <img
              src={`assets/interest/${interest.img}.svg`}
              className="interest-image"
              alt={interest.img}
            />
          </InterestCard>
        ))}
      </div>
      <h2 id="more">More Coming soon</h2>
      <img id="lines" src={lines} alt="lines" />
    </Container>
  );
};

export default Interests;
