import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Tania-Amanda Fredrick </span>
            from <span className="purple"> Lubbock, Texas, USA.</span>
            <br />I am a <b className="purple"> Front-End Engineer</b> and a
            graduate student specializing in
            <b className="purple"> Software & Security Engineering.</b>
            <br />
            My work spans across web development, machine learning, and security
            research, where I build scalable web applications and explore
            AI-driven solutions.
            <br />
            <br />
            Besides coding, here are a few things I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              {ImPointRight({})} Exploring War & Mythology History
            </li>
            <li className="about-activity">
              {ImPointRight({})} Mentoring & Supporting Women in Tech
            </li>
            <li className="about-activity">
              {ImPointRight({})} Watching Anime & Sci-Fi Movies
            </li>
            <li className="about-activity">
              {ImPointRight({})} Researching AI & Cybersecurity
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology should be more than just code—it should empower,
            protect, and inspire change."
          </p>
          <footer className="blockquote-footer">Tania-Amanda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
