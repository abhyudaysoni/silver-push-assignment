import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sections from "./components/sections/sections";
import headerBg from "./assets/backgrounds/header-bg.png";

function App() {
  return (
    <>
      {ReactDOM.createPortal(
        <img src={headerBg} id="header-bg" alt="header-bg" />,
        document.getElementById("backgrounds-root")
      )}
      <Header />
      <Sections />
      <Footer />
    </>
  );
}

export default App;
