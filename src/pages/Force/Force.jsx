import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const Force = () => {
  return (
    <section id="feelTheForce" className="feelTheForce">
      <Fade cascade>
        <h2>Feel the force</h2>
        <h3>Feel the force</h3>
        <p>
          Hone ligthsaber combat forms to refine striking, blocking, and dodging
          your enemies. Use your Jedi weapon and the Force to take on any
          challenge.
        </p>
        <img src="./images/lightsaber.png" alt="Cal Kestis Lightsaber" />
        <article className="button">
          <Link to="galaxyAwaits" spy={true} smooth={true}>
            <Button text="Explore the galaxy" />
          </Link>
        </article>
        <article className="scroll">
          <Pulse />
        </article>
      </Fade>
    </section>
  );
};

export default Force;
