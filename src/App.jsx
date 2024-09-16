import React from "react";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Opinion from "./components/Opinion";
import Price from "./components/Price";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Price />
        <Opinion />
        <Footer />
      </div>
    </>
  );
};

export default App;
