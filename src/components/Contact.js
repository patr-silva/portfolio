import { Container, Row, Col } from "react-bootstrap";

import "animate.css";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  return (
    <section className='contact' id='connect' name='contact'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <img src={contactImg} alt='contact i' />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Get in touch</h2>
                </div>
              )}
            </TrackVisibility>

            <form action={process.env.REACT_APP_FORM_URL} method='POST'>
              <Row>
                <Col sm={12} size={24} className='px-1'>
                  <input type='text' name='name' placeholder='Name' />
                </Col>
                <Col sm={12} size={24} className='px-1'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                  />
                </Col>
                <Col size={12} className='px-1'>
                  <textarea
                    rows='6'
                    name='message'
                    placeholder='Message'
                  ></textarea>
                  <button type='submit'>
                    <span> Let's talk</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
