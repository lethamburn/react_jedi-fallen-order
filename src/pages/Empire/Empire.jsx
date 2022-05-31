import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const Empire = () => {
  return (
    <Fade delay={300}>
      <section id="empire" className="empire">
        <Fade cascade>
          <article className="hero">
            <img
              src="./images/characters/stormtrooper.png"
              alt="Stormtrooper Portrait"
            />
            <Link to="inquisitors" spy={true} smooth={true}>
              <Button text="Meet the Inquisitors" />
            </Link>
            <Pulse />
          </article>
          <article>
            <h2>The Galactic Empire</h2>
            <h3>The Galactic Empire</h3>
            <p>
              The successor state of the Galactic Republic, the <strong>Galactic Empire</strong> emerged from the ruins of the Republic following the events of the Clone Wars. Ruling the galaxy with an Iron fist, the authoritarian state tolerates no dissent among the inhabitants of the galaxy, and utilizes the Imperial military to squash any potential insurrections. <br/>In <strong>Star Wars Jedi: Fallen Order</strong>, the Empire is the primary enemy that will be fought countless times across multiple planets, attacking in many different varieties such as Stormtroopers and Scout Troopers, as listed below.
            </p>
          </article>
        </Fade>
      </section>
    </Fade>
  );
};

export default Empire;
