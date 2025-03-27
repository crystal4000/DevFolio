import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  isBlog: boolean;
  demoLink?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="project-card-view h-100">
      <div
        className="card-img-container"
        style={{ height: "350px", overflow: "hidden" }}
      >
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ height: "50px", overflow: "hidden" }}>
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "justify",
            flex: "1 1 auto",
            overflow: "auto",
            height: "150px",
          }}
        >
          {props.description}
        </Card.Text>
        <div className="mt-auto">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            disabled={!props.ghLink}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
              disabled={!props.demoLink}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
