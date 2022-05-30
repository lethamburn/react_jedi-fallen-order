import React from "react";
import Home from "../Home/Home";
import Force from "../Force/Force";
import GalaxyAwaits from "../GalaxyAwaits/GalaxyAwaits";
import Kashyyyk from "../Kashyyyk/Kashyyyk";
import Locations from "../Locations/Locations";
const Container = () => {
  const backgroundVideo = "./images/video.mp4"
  return (
    <>
      <div className="container">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
        <Home />
        <Force />
        <GalaxyAwaits />
        <Kashyyyk />
        <Locations />
      </div>
    </>
  );
};

export default Container;
