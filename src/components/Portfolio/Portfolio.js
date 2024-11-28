import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import pdf from "../../assets/pdf/MichaelTurner-Developer-Resume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Portfolio() {
  // const [width, setWidth] = useState(1200);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <div>
      <Container fluid className="portfolio-section">
        
        <Particle />
        
        <Container className="portfolio-content">
          <Row>
            
            <h1>Mike's Most Recent Work</h1>
            
            <Col md={3} className="list-wrapper" style={{ background: 'lightblue' }}>
              <h2>Surrey Place</h2>
              <ul>
                <li>
                  <a href="#stripe-payments">Stripe Payments</a>
                </li>
                <li>
                  <a href="#camp-filters">Camp/Program Filters</a>
                </li>                
              </ul>
            </Col>
              
            <Col md={9} className="feature-wrapper" style={{ background: 'lightgreen' }}>
              <p>feature</p>
            </Col>
              
          </Row>        
        </Container>
        
        
        
        
        
        {/* <Container>
          <Tabs>
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
              <Tab>Tab 4</Tab>
            </TabList>            

            <TabPanel>
              <p>Tab 1 Panel</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 2 Panel</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 3 Panel</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 4 Panel</p>
            </TabPanel>
            
          </Tabs>
              
        </Container> */}

      </Container>
    </div>
  );
}

export default Portfolio;
