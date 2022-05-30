import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const GalaxyAwaits = () => {
  return (
    <section id="galaxyAwaits" className="galaxyAwaits">
      <Fade cascade>
        <h2>The Galaxy Awaits</h2>
        <h3>The Galaxy Awaits</h3>
        <p>
          Explore ancients forests, windswept cliffs and haunted jungles as you
          decide when and where you want to go next.
        </p>
        <article className="button">
          <Link to="kashyyyk" spy={true} smooth={true}>
            <Button text="Enter Kashyyyk"/>
          </Link>
        </article>
        <article className="description">
        
            <h3>Bracca</h3>
            <p>Mytaranor sector</p>
       
        </article>
        <article className="scroll">
          <Pulse />
        </article>
      </Fade>
    </section>
  );
};

export default GalaxyAwaits;
