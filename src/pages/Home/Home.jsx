import React from "react";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const Home = () => {
  return (
    <main className="home">
      <section className="home-header">
        <img src="./images/logo.png" alt="Jedi Fallen Order Logo" />
      </section>
      <section className="home-hero">
        <h2>Your Jedi journey</h2>
        <p>
          Aided by a former Jedi Knight, a prickly pilot and a fearless droid
          companion, you must escape the sinister machinations of the Imperial
          forces in this story driven adventure.
        </p>
      </section>
      <section className="home-button">
          <Button text="Explore the journey"/>
      </section>
      <section className="home-scroll">
          <p>Scroll down</p>
          <Pulse />
      </section>
    </main>
  );
};

export default Home;
