import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiJupyter,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const TechStack = () => {
  const techIcons = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiPython />, name: "Python" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
    { icon: <FaDatabase />, name: "Data Science & AI" },
    { icon: <SiJest />, name: "Jest (Testing)" },
    { icon: <SiCypress />, name: "Cypress (E2E Testing)" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
};

export default TechStack;
