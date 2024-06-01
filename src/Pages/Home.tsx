import React, { useRef } from "react";
import FooterComponent from "../components/Footer/FooterComponent";
import HeaderComponent from "../components/Header/HeaderComponent";
import StartComponent from "../components/sectionstart/StartComponent";
import MainComponent from "../components/Main/MainComponent";

function Home() {
  return (
    <div>
      <section>
        <HeaderComponent />
      </section>
      <StartComponent />
      <section id="main-section">
        <MainComponent />
      </section>
      <section id="contact-section">
        <FooterComponent />
      </section>
    </div>
  );
}

export default Home;
