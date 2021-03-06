import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll/modules";
import Button from "../../layout/Button";
import Pulse from "../../layout/Pulse";

const Poster = () => {
  return (
    <Fade delay={300}>
      <section id="poster" className="poster">
        <Fade cascade>
          <h2>Find the light</h2>
          <span></span>
          <span></span>
          <article className="button">
            <Link to="locations" spy={true} smooth={true}>
              <Button text="Discover the full galaxy" />
            </Link>
          </article>
        </Fade>
      </section>
    </Fade>
  );
};

export default Poster;
