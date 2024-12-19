import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// logos
import SurreyPlaceLogo from "../svg/SurreyPlaceLogo";
import SiriusXMLogo from "../svg/SiriusXMLogo";
import MazdaLogo from "../svg/MazdaLogo";
import KFCLogo from "../svg/KFCLogo";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (imageSrc) => {
    setModalImage(imageSrc);
    setShow(true);
  };

  return (
    <Container className="portfolio-section">
      <Row>
        <h1>Mike's Portfolio</h1>
        <p>Here's an overview of my completed projects, along with key details about each task.</p>
      </Row>

      {/* Surrey Place */}
      <Row>
        <Tab.Container id="sp-tabs" defaultActiveKey="first">
          <Col sm={3} lg={2}>
            <Nav className="flex-column">
              <Nav.Item>
                <SurreyPlaceLogo />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first">Stripe Payments with Custom Checkout</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Camp/Program Filters</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} lg={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h3>Custom WordPress Plugin for Online Payments</h3>
                <p>Designed and developed a custom WordPress plugin leveraging the Stripe API for secure online payment processing. The solution featured a dynamic questionnaire form and flexible payment options, including full payment, 50/50 split payments, and a 30/40/30 subscription model tailored to specific program needs. Additionally, established and documented a robust Git-based workflow, enhancing team collaboration and enabling seamless continuous deployment via Bitbucket and WP Engine.</p>
                <div className="images-wrapper">
                  <Row>
                    <Col sm={12} md={6} lg={4} className="mb-5">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleShow('https://placehold.co/400x600'); }}>
                        <img src="https://placehold.co/400x600" alt="" className="img-fluid" />
                      </a>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="mb-5">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleShow('https://placehold.co/400x600'); }}>
                        <img src="https://placehold.co/400x600" alt="" className="img-fluid" />
                      </a>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="mb-5">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleShow('https://placehold.co/400x600'); }}>
                        <img src="https://placehold.co/400x600" alt="" className="img-fluid" />
                      </a>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} md={6} lg={4} className="mb-5">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleShow('https://placehold.co/400x600'); }}>
                        <img src="https://placehold.co/400x600" alt="" className="img-fluid" />
                      </a>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="mb-5">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleShow('https://placehold.co/400x600'); }}>
                        <img src="https://placehold.co/400x600" alt="" className="img-fluid" />
                      </a>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="mb-5">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleShow('https://placehold.co/400x600'); }}>
                        <img src="https://placehold.co/400x600" alt="" className="img-fluid" />
                      </a>
                    </Col>
                  </Row>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h3>Camp and Program Filters</h3>
                <p>Developed functional React filters to allow customers to sort products by age group, location, and program level. Products were dynamically populated using a custom post type, with taxonomies facilitating categorization, all managed through a custom WordPress plugin.</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>

      {/* SiriusXM Canada */}
      <Row>
        <Tab.Container id="sxm-tabs" defaultActiveKey="first">
          <Col sm={3} lg={2}>
            <Nav className="flex-column">
              <Nav.Item>
                <SiriusXMLogo />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} lg={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">First tab content</Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>

      {/* Mazda Canada */}
      <Row>
        <Tab.Container id="mazda-tabs" defaultActiveKey="first">
          <Col sm={3} lg={2}>
            <Nav className="flex-column">
              <Nav.Item>
                <MazdaLogo />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} lg={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">First tab content</Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>

      {/* KFC */}
      <Row>
        <Tab.Container id="kfc-tabs" defaultActiveKey="first">
          <Col sm={3} lg={2}>
            <Nav className="flex-column">
              <Nav.Item>
                <KFCLogo />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} lg={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">First tab content</Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalImage} alt="Modal Preview" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Portfolio;
