import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const Kashyyyk = () => {
  return (
    <section id="kashyyyk" className="kashyyyk">
      <Fade cascade>
        <h2>Kashyyyk</h2>
        <h3>Kashyyyk</h3>
        <article className="button">
          <Link to="locations" spy={true} smooth={true}>
            <Button text="Discover the full galaxy" />
          </Link>
        </article>
        <article className="scroll">
          <Pulse />
        </article>
      </Fade>
    </section>
  );
};

export default Kashyyyk;
