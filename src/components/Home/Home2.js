import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/images/IMG_1943.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiBitbucket } from "react-icons/di";

function Home2() {

  return (
    <Container fluid className="home-about-section" id="about">
      {/* <Container> */}
        <Row>
          
          <Col md={9} className="home-about-description">
            
            <h2>Allow me to re-introduce myself...</h2>          
            <p>Mike is an experienced developer and tech enthusiast with over 15 years in the marketing and advertising industry, where he combines front-end and back-end expertise to create seamless digital experiences.</p>
            <p>He has had the pleasure of working with both large and boutique agencies, including Surrey Place, TAXI, Bensimon Byrne, Grassriots, Zync, and BLVD. At larger agencies, he experienced the thrill of seeing his work showcased by major brands, while smaller teams allowed him to collaborate closely with designers, refining his skills in UX and strategy.</p>
            <p>Mike has a deep passion for open-source technology and knowledge sharing and is currently focused on expanding his skills in TypeScript, project management, and cloud-based services.</p>
            <p>An introvert by nature, yet one who thrives in collaborative environments, he balances his time outside work by staying up-to-date on tech trends, refining his design skills, and diving into creative coding projects.          </p>
            <p>
              Hit me up on the socials:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/turnermike?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://bitbucket.org/Hi-hatConsulting/workspace/snippets/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <DiBitbucket />
                </a>
              </li>              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/turnermike/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/leatherface416/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>    
            
          </Col>
          
          <Col md={3} className="gordon">

            <div className="img-overlay-wrapper">
              <img src={myImg} className="img-fluid" alt="avatar" />
              <div className="overlay"></div>
            </div>
            
          </Col>
          
        </Row>
      {/* </Container> */}
    </Container>
  );
}
export default Home2;
