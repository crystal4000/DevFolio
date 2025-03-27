import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiVercel,
  SiApple,
  SiGithub,
  SiDocker,
  SiGooglecolab,
} from "react-icons/si";

const ToolStack = () => {
  const tools = [
    { icon: <SiApple />, name: "MacOS" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiGooglecolab />, name: "Google Colab" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
};

export default ToolStack;
