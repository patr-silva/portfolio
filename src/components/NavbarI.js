import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function NavbarI() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const links = [
    {
      id: 1,
      name: "Linkedin",
      icon: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/patricia-res-silva",
    },
    {
      id: 2,
      name: "GitHub",
      icon: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/patr-silva",
    },
    {
      id: 3,
      name: "Email",
      icon: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:patriciaresende.s92@gmail.com",
    },
    {
      id: 4,
      name: "CV",
      icon: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/CvEng.pdf",
      download: true,
    },
  ];

  return (
    <Navbar expand='lg' className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href='#home'>
          <h1 className='logo'>PRS</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === "home" ? "actvive navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === "skills" ? "actvive navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === "project" ? "actvive navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              {links.map((elem, index) => {
                return (
                  <>
                    <a
                      href={elem.href}
                      key={index}
                      download={elem.download}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {elem.icon}
                    </a>
                  </>
                );
              })}
            </div>

            <a className='nav-button' href='#connect'>
              <span>Let's talk</span>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarI;
