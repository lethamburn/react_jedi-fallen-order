import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const CalKestis = () => {
  return (
    <Fade delay={300}>
      <section id="calKestis" className="calKestis">
        <Fade cascade>
          <article>
            <h2>Cal Kestis</h2>
            <h3>Cal Kestis</h3>
            <p>
            <strong>Cal Kestis</strong> is a Force-sensitive human male who became a Jedi Knight during the reign of the <strong>Galactic Empire</strong>. As one of the few Jedi who survived the purge that all but destroyed the <strong>Jedi Order</strong>, Kestis lived in seclusion for years until a confrontation with the Inquisitorius compelled him to openly resist the Empire's rule. Hunted across the galaxy by the Empire's Jedi hunters, Kestis embraced his connection to the Force once more, having decided to restore the <strong>Jedi Order</strong>.
            </p>
          </article>
          <article className="hero">
          <img src="./images/characters/cal.png" alt="Cal Kestis Portrait" />
            <Link to="bdOne" spy={true} smooth={true}>
              <Button text="Meet BD-1" />
            </Link>
            <Pulse />
          </article>
        </Fade>
      </section>
    </Fade>
  );
};

export default CalKestis;
