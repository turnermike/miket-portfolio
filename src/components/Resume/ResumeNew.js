import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/pdf/MichaelTurner-Developer-Resume.pdf";

function ResumeNew() {

  return (

      <Container className="resume-section"> 

        <Row style={{ justifyContent: "left", position: "relative" }}>
          
          <h1>Mike's Resume</h1>
          <p>Click the button to download a PDF.</p>
          
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

      </Container>

  );
}

export default ResumeNew;
