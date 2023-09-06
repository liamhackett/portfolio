import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Row, Col } from 'react-bootstrap';
import yourImage from '../assets/images/liam-hackett.png'; 
import { Link } from 'react-router-dom';
import About from './About'
import Contact from './Contact';

const Body = () => {
  return (
    <div>
    <div className="body-container">
      <Container>
        <Row className="first-row">
          {/* Left Column for Text Content */}
          <Col lg={6} md={12}>
            <div className="content text-left d-flex flex-column justify-content-center">
              <h1 className="display-4">
                <span className="smaller-text">I'm</span> <span className="name">Liam Hackett</span>
              </h1>
              <p className="lead">
                A recent University of Vermont graduate<br></br>and aspiring web developer
              </p>
              <Link to="/projects">
                <Button variant="custom">Projects</Button>
              </Link>
            </div>
          </Col>

          {/* Right Column for the Image */}
          <Col lg={6} md={12} className="text-center">
            <div className="image-container">
              <img src={yourImage} alt="liam-hackett" className="image" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Social Media Icons */}
      <div className="social-icons">
        <hr className="vertical-hr"></hr>
        <a
          href="https://github.com/liamhackett"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="1x" className="icon-spacing icon-hover" />
        </a>
        <a
          href="https://www.linkedin.com/in/william-j-hackett/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" className="icon icon-hover" />
        </a>
      </div>
      </div>
      <About></About>
      {/* <Contact></Contact> */}
    </div>
    
  );
};

export default Body;