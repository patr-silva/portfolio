import { Col, Container, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

import savethechild from "../assets/img/savethechild.png";
import REUS from "../assets/img/REUS.png";
import houseMarket from "../assets/img/houseMarket.png";
import hangout from "../assets/img/hangout.png";
import bistroCafe from "../assets/img/bistroCafe.png";
import inspquote from "../assets/img/inspquote.png";
import wordle from "../assets/img/wordle.png";
import dalle from "../assets/img/dall-e.png";

const Projects = () => {
  const projects = [
    {
      title: "Bistro Cafe",
      description: "React",
      imgUrl: bistroCafe,
      url: "https://bistro-cafe-murex.vercel.app/",
    },
    {
      title: "Prime Estate",
      description: "React & Firebase",
      imgUrl: houseMarket,
      url: "https://prime-estate.vercel.app/",
    },
    {
      title: "Hangout Haven",
      description: "Next.js & TailwindCSS",
      imgUrl: hangout,
      url: "https://github.com/patr-silva/hangout-haven",
    },
    {
      title: "Save the Child",
      description: "JS, HTML & CSS",
      imgUrl: savethechild,
      url: "https://patr-silva.github.io/Project-I-Save-the-Child/",
    },
    {
      title: "InspQuote",
      description: "Next.js",
      imgUrl: inspquote,
      url: "https://inspquote.vercel.app/",
    },
    {
      title: "Wordle",
      description: "React",
      imgUrl: wordle,
      url: "https://wordle-patr-silva.vercel.app/",
    },
    {
      title: "DALL-E 2.0",
      description: "React, TailwindCSS, MongoDB, Express",
      imgUrl: dalle,
      url: "https://soft-dieffenbachia-f427e0.netlify.app/",
    },
    {
      title: "REUS",
      description: "React",
      imgUrl: REUS,
      url: "https://ironhack-reus.netlify.app/",
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id='projects-tab' defaultActiveKey='first'>
              <Tab.Content id='slideInUp'>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((elem, index) => {
                      return <ProjectCard key={index} {...elem} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
