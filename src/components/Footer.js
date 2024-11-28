import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiBitbucket } from "react-icons/di";
import { FaReact } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container className="footer">
      <Row>
        <Col md="4">
          <p><FaReact />{" "}Thanks to <a href="https://github.com/soumyajit4419/Portfolio" target="_blank" rel="noreferrer">soumyajit4419</a> for the React starter template.</p>
        </Col>
        <Col md="4" className="footer-copywright">
          <p>Copyright © {year} Mike Turner</p>
        </Col>
        <Col md="4" className="footer-social">
          
          <ul className="footer-icons">
            
            <li className="social-icons">
              <a
                href="https://github.com/turnermike"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://bitbucket.org/Hi-hatConsulting/workspace/snippets/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <DiBitbucket />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/turnermike/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.instagram.com/leatherface416/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            
          </ul>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
