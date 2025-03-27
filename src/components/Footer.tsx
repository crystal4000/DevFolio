import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Fredrick Tania-Amanda</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/crystal4000"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {AiFillGithub({})}
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/tania_amanda_?s=21"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {AiOutlineTwitter({})}
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/tania-amanda"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {FaLinkedinIn({})}
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/fredrick_amanda_/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {AiFillInstagram({})}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
