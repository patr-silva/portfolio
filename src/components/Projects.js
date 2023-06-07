import { Col, Container, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

import savethechild from "../assets/img/savethechild.png";
import REUS from "../assets/img/REUS.png";
import houseMarket from "../assets/img/houseMarket.png";
import hangout from "../assets/img/hangout.png";
import bistroCafe from "../assets/img/bistroCafe.png";

const Projects = () => {
  const projects = [
    {
      title: "Bistro Cafe",
      description: "ReactJS",
      imgUrl: bistroCafe,
    },
    {
      title: "House Market",
      description: "ReactJS & Firebase",
      imgUrl: houseMarket,
    },
    {
      title: "Hangout Haven",
      description: "NextJS",
      imgUrl: hangout,
    },
    {
      title: "Save the Child",
      description: "JS, HTML & CSS",
      imgUrl: savethechild,
    },
    {
      title: "REUS",
      description: "ReactJS",
      imgUrl: REUS,
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
