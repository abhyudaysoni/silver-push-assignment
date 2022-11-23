import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sections from "./components/sections/sections";

function App() {
  return (
    <section className="bg">
      <Header />
      <Sections />
      <Footer />
    </section>
  );
}

export default App;
