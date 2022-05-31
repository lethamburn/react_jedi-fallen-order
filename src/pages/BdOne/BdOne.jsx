import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const BdOne = () => {
  return (
    <Fade delay={300}>
      <section id="bdOne" className="bdOne">
        <Fade cascade>
          <article className="hero">
            <img src="./images/characters/bd1.png" alt="BD-1 Portrait" />
            <Link to="purgeTroopers" spy={true} smooth={true}>
              <Button text="Meet the Purge Troopers" />
            </Link>
            <Pulse />
          </article>
          <article>
            <h2>BD-1</h2>
            <h3>BD-1</h3>
            <p>
            <strong>BD-1</strong> was a BD unit droid that accompanied Jedi Master <strong>Eno Cordova</strong> during the last years of the Galactic Republic. Following Order 66 and the rise of the Galactic Empire, the droid befriended Cal Kestis, a former Padawan who endeavored to rebuild the fallen Jedi Order.
            </p>
          </article>
        </Fade>
      </section>
    </Fade>
  );
};

export default BdOne;
