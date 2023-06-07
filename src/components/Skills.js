import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

import javascriptImg from "../assets/img/javascript.png";
import htmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import reactImg from "../assets/img/react.png";
import expressImg from "../assets/img/express.png";
import nodeImg from "../assets/img/node.png";
import mongoImg from "../assets/img/Mongodb-PNG-Photo.png";
import bootstrapImg from "../assets/img/bootstrap-5-logo-icon.png";
import tailwindImg from "../assets/img/tailwind.png";
import typescriptImg from "../assets/img/typescript.png";
import nextjsImg from "../assets/img/nextjs.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      name: "JavaScript",
      img: javascriptImg,
    },
    {
      name: "HTML",
      img: htmlImg,
    },
    {
      name: "CSS",
      img: cssImg,
    },
    {
      name: "ReactJS",
      img: reactImg,
    },
    {
      name: "Tailwind CSS",
      img: tailwindImg,
    },
    {
      name: "Bootstrap",
      img: bootstrapImg,
    },
    {
      name: "Node",
      img: nodeImg,
    },
    {
      name: "Express",
      img: expressImg,
    },
    {
      name: "MongoDB",
      img: mongoImg,
    },
    {
      name: "TypeScript",
      img: typescriptImg,
    },
    {
      name: "NextJS",
      img: nextjsImg,
    },
  ];

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Skills</h2>
                </div>
              )}
            </TrackVisibility>

            <div className='skill-bx'>
              {/* <h2>Skills</h2> */}

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className='skill-slider'
              >
                {skills.map((elem, index) => {
                  return (
                    <div className='item' key={index}>
                      <h5>{elem.name}</h5>
                      <img src={elem.img} alt={elem.name} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
