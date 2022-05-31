import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const PurgeTroopers = () => {
  return (
    <Fade delay={300}>
      <section id="purgeTroopers" className="purgeTroopers">
        <Fade cascade>
          <article>
            <h2>Purge Troopers</h2>
            <h3>Purge Troopers</h3>
            <p>
            <strong>Purge Troopers</strong>, also known as Purge Stormtroopers, were Imperial soldiers led by the  <strong>Sith Lord Darth Vader</strong> and the Inquisitorius during the reign of the Galactic Empire assigned to hunt down any surviving Jedi. Trained as expendable death squads, they were activated after the Great Jedi Purge and subsequent termination of the cloning operation on Kamino. Not every Purge Trooper was one of the Jango Fett clones, but at least one group was from the last generation produced from the Fett template. As with their precursors in the Grand Army of the Galactic Republic, Purge Troopers were programmed to obey <strong>Order 66</strong>, making them hostile against all Jedi.
            </p>
          </article>
          <article className="hero">
          <img src="./images/characters/purge.png" alt="Purge Trooper Portrait" />
            <Link to="empire" spy={true} smooth={true}>
              <Button text="Meet the Galactic Empire" />
            </Link>
            <Pulse />
          </article>
        </Fade>
      </section>
    </Fade>
  );
};

export default PurgeTroopers;
