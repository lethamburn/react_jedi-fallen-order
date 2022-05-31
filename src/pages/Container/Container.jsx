import React from "react";
import Home from "../Home/Home";
import Force from "../Force/Force";
import GalaxyAwaits from "../GalaxyAwaits/GalaxyAwaits";
import Poster from "../Poster/Poster";
import Locations from "../Locations/Locations";
import { Fade } from "react-awesome-reveal";
import CalKestis from "../CalKestis/CalKestis";
import BdOne from "../BdOne/BdOne";
import PurgeTroopers from "../PurgeTroopers/PurgeTroopers";
import Empire from "../Empire/Empire";
import Inquisitors from "../Inquisitors/Inquisitors";
import Trailer from "../Trailer/Trailer";
const Container = () => {
  const backgroundVideo = "./images/video.mp4";
  return (
    <>
      <div className="container">
        <Fade delay={200} triggerOnce>
          <video autoPlay loop muted id="video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </Fade>
        <Home />
        <Force />
        <GalaxyAwaits />
        <Poster />
        <Locations />
        <CalKestis />
        <BdOne />
        <PurgeTroopers />
        <Empire />
        <Inquisitors />
        <Trailer />
      </div>
    </>
  );
};

export default Container;
