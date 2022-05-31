import React from "react";
import { Fade } from "react-awesome-reveal";

const Trailer = () => {
  const trailerVideo = "./images/trailer.mp4";
  return (
    <Fade delay={300}>
      <section id="trailer" className="trailer">
        <Fade cascade>
          <video autoPlay loop muted id="trailerVideo">
            <source src={trailerVideo} type="video/mp4" />
          </video>
        </Fade>
      </section>
    </Fade>
  );
};

export default Trailer;
