import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import pdf from "../../assets/pdf/MichaelTurner-Developer-Resume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
    
    // <div>
      
    //   <Container fluid className="portfolio-section">
        
    //     <Container className="portfolio-content">
    //       <Row>
            
    //         <h1>Mike's Most Recent Work</h1>
            
    //         <Col md={3} className="list-wrapper" style={{ background: 'lightblue' }}>
    //           <h2>Surrey Place</h2>
    //           <ul>
    //             <li>
    //               <a href="#stripe-payments">Stripe Payments</a>
    //             </li>
    //             <li>
    //               <a href="#camp-filters">Camp/Program Filters</a>
    //             </li>                
    //           </ul>
    //         </Col>
              
    //         <Col md={9} className="feature-wrapper" style={{ background: 'lightgreen' }}>
    //           <p>feature</p>
    //         </Col>
              
    //       </Row>        
    //     </Container>

    //   </Container>
      
    // </div>
  );
}

export default Portfolio;
