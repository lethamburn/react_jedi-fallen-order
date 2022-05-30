import React from "react";
import { Carousel } from "react-carousel-minimal";
import Pulse from "../../layout/Pulse";
import { Fade } from "react-awesome-reveal";
const Locations = () => {
  const data = [
    {
      image: "./images/locations/bogano.jpg",
      caption: "Bogano",
    },
    {
      image: "./images/locations/zeffo.jpg",
      caption: "Zeffo",
    },
    {
      image: "./images/locations/kashyyyk.jpg",
      caption: "Kashyyyk",
    },
    {
      image: "./images/locations/dathomir.jpg",
      caption: "Dathomir",
    },
    {
      image: "./images/locations/bracca.jpg",
      caption: "Bracca",
    },
    {
      image: "./images/locations/ilum.jpg",
      caption: "Ilum",
    },
    {
      image: "./images/locations/nur.jpg",
      caption: "Nur",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "Gothic",
    textTransform: "uppercase",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <Fade delay={300}>
      <section className="locations" id="locations">
        <Fade cascade>
          <article>
            <h2>Locations</h2>
            <h3>Locations</h3>
          </article>
          <article>
            <Carousel
              data={data}
              time={2000}
              width="800px"
              height="400px"
              captionStyle={captionStyle}
              radius="30px"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </article>
          <article className="scroll">
            <Pulse />
          </article>
        </Fade>
      </section>
    </Fade>
  );
};

export default Locations;
