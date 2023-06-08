import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt={title} className='proj-img' />
        <div className='proj-txtx'>
          <a href={url}>
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
