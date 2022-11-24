import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sections from "./components/sections/sections";
import headerBg from "./assets/backgrounds/header-bg.png";
import Backdrop from "./components/UI/backdrop";
import Modal from "./components/UI/modal/modal";

function App() {
  const [overlay, setOverlay] = useState(false);
  const onBookHandler = () => {
    setOverlay(true);
  };
  const closeOverlay = () => {
    setOverlay(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <img src={headerBg} id="header-bg" alt="header-bg" />,
        document.getElementById("backgrounds-root")
      )}
      <Header />
      <Sections onBook={onBookHandler} />
      <Footer onBook={onBookHandler} />
      {overlay &&
        ReactDOM.createPortal(
          <Backdrop onClick={closeOverlay} />,
          document.getElementById("backdrop-root")
        )}
      {overlay &&
        ReactDOM.createPortal(
          <Modal />,
          document.getElementById("overlay-root")
        )}
    </>
  );
}

export default App;
