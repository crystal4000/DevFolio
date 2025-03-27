import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";
import Github from "./Github";
import LottieAnimation from "../LottieAnimation";
import programmer from "../../animations/programmer.json";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "70px", paddingBottom: "40px" }}
            className="about-img"
          >
            <LottieAnimation
              animationData={programmer}
              height={450}
              width={450}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <TechStack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolStack />

        <Github />
      </Container>
    </Container>
  );
};

export default About;
