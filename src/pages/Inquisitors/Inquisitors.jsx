import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const Inquisitors = () => {
  return (
    <Fade delay={300}>
      <section id="inquisitors" className="inquisitors">
        <Fade cascade>
          <article>
            <h2>Inquisitors</h2>
            <h3>Inquisitors</h3>
            <p>
              <strong>Inquisitor</strong> was a rank used within the Inquisitorius Program of the Galactic Empire. As high-ranking members of the Empire, their main purview was to hunt surviving Jedi in the aftermath of Order 66 for the purpose of mination or induction into the Inquisitorius, where they could be made to serve Emperor Palpatine as agents of the dark side. <br />The Grand Inquisitor led the Inquisitors. Among the Inquisitors ranks were <strong>Brothers and Sisters, the Second Sister, Third Brother, Third Sister, Fourth Sister, Fifth Brother, Sixth Brother, Seventh Sister, Eighth Brother, Ninth Sister, and Tenth Brother</strong>. A female, a red-skinned individual, and a Twi'lek, also served as Inquisitors.
            </p>
          </article>
          <article className="hero">
            <img
              src="./images/characters/inquisitors.png"
              alt="Inquisitor Portrait"
            />
            <Link to="trailer" spy={true} smooth={true}>
              <Button text="Watch the trailer" />
            </Link>
            <Pulse />
          </article>
        </Fade>
      </section>
    </Fade>
  );
};

export default Inquisitors;
