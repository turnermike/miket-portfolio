import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import 'react-tabs/style/react-tabs.css';
import SurreyPlaceLogo from "../svg/SurreyPlaceLogo";
import SiriusXMLogo from "../svg/SiriusXMLogo";
import MazdaLogo from "../svg/MazdaLogo";
import KFCLogo from "../svg/KFCLogo";

function Portfolio() {

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
                <p>Developed a WordPress plugin integrating the Stripe API to facilitate secure online payments. The solution included a dynamic questionnaire form and flexible payment options, such as full payment, a 50/50 split, or a 30/40/30 subscription model tailored to program requirements. Additionally, implemented and documented a robust Git-based workflow, streamlining collaboration and continuous deployment using Bitbucket and WP Engine.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
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

    </Container>

  );

}

export default Portfolio;
