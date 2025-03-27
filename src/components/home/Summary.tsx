import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Summary = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey in tech began with a curiosity for problem-solving, and
              over the years, I’ve honed my skills in crafting efficient and
              scalable solutions.
              <br />
              <br />I specialize in
              <i>
                <b className="purple"> JavaScript, TypeScript, and Python,</b>
              </i>
              with experience in both front-end and full-stack development.
              <br />
              <br />
              My areas of expertise include building
              <i>
                <b className="purple">
                  {" "}
                  web applications, scalable front-end architectures,
                </b>
              </i>
              and exploring domains like
              <b className="purple">
                {" "}
                AI-driven solutions and security engineering.
              </b>
              <br />
              <br />I enjoy working with
              <b className="purple"> React.js, Next.js, and Tailwind CSS,</b>
              leveraging modern frameworks to build seamless user experiences.
              <br />
              <br />
              Whether it’s optimizing performance, integrating APIs, or
              enhancing UI/UX, I’m always excited to bring ideas to life through
              clean, maintainable code.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                width={280}
                height={280}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/crystal4000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {AiFillGithub({})}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/tania_amanda_?s=21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {AiOutlineTwitter({})}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/tania-amanda"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {FaLinkedinIn({})}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fredrick_amanda_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  {AiFillInstagram({})}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Summary;
