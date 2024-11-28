import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/pdf/MichaelTurner-Developer-Resume.pdf";

function ResumeNew() {
  
  // const [width, setWidth] = useState(1200);
  
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <div>
      <Container className="resume-section"> 
        {/* <Particle /> */}
        

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* <Row className="resume">
          
          resume here
          
        <object data={{pdf}} type="application/pdf" width="100%" height="100%">
            <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
        </object>      
          
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
        
      </Container>
    </div>
  );
}

export default ResumeNew;
