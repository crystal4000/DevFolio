import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Interests from "./Interests";
import Summary from "./Summary";
import LottieAnimation from "../LottieAnimation";
import mainScene from "../../animations/main_scene.json";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TANIA-AMANDA FREDRICK</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Interests />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <LottieAnimation
                animationData={mainScene}
                height={450}
                width={450}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Summary />
    </section>
  );
};

export default Home;
