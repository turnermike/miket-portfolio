import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import 'react-tabs/style/react-tabs.css';

function Portfolio() {

  return (
    

    <Container className="portfolio-section"> 

      <Row>
        <h1>Mike's Portfolio</h1>
        <p>Here's some project work that I've completed with some details about the task.</p>
        
        <h2>Surrey Place</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
                
      </Row>

    </Container>    
    
  );
  
}

export default Portfolio;
