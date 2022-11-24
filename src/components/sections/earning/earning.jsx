import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import { earningSteps } from "../../../constants/earning-steps";
import EarningStepsCard from "../../UI/earning-steps-card";
import dots from "../../../assets/general/dots.svg";
import boxSolid from "../../../assets/general/box-solid.svg";

const Earning = () => {
  const [tab, setTab] = useState(0);
  const tabHandler = (index) => {
    setTab(index);
  };
  return (
    <Container>
      <h1>Steps to Start Earning with Bright</h1>
      {ReactDOM.createPortal(
        <img src={dots} id="earning-dots" alt="earning-dots" />,
        document.getElementById("illustrations-root")
      )}
      <div className="earning-container">
        <div className="earning-steps">
          {earningSteps.map((step, index) => (
            <EarningStepsCard
              key={index}
              title={step.title}
              desc={step.desc}
              onClick={tabHandler}
              index={index}
              className={`earning-step ${
                index === tab ? "active" : "in-active"
              }`}
            />
          ))}
        </div>
        <div className="illustration-container">
          <img src={`assets/earning/${earningSteps[tab].img}.svg`} alt="" />
        </div>
      </div>
      {ReactDOM.createPortal(
        <img src={boxSolid} id="earning-box-solid" alt="earning-box-solid" />,
        document.getElementById("illustrations-root")
      )}
    </Container>
  );
};

export default Earning;
