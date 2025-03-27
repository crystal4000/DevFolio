import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../Assets/Tania_Amanda_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "./Particle";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Set width initially and add event listener for window resize
    updateWidth();
    window.addEventListener("resize", updateWidth);

    // Cleanup
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const scale = width > 786 ? 1.5 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "20px",
          }}
        >
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

        <Row className="resume">
          <Col md={12} className="d-flex flex-column align-items-center">
            <Document
              file={pdf}
              className="d-flex flex-column align-items-center"
              onLoadSuccess={onDocumentLoadSuccess}
              loading="Loading PDF..."
              error="An error occurred!"
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div
                  key={`page_${index + 1}`}
                  className="pdf-page mb-4"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Page
                    pageNumber={index + 1}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
            </Document>
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
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
    </div>
  );
};

export default Resume;
