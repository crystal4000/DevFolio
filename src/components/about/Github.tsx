import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const colorTheme = {
    light: ["#282a36", "#d2b4de", "#af7ac5", "#9b59b6", "#8e44ad"],
    dark: ["#282a36", "#d2b4de", "#af7ac5", "#9b59b6", "#8e44ad"],
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="crystal4000"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={colorTheme}
        hideColorLegend={false}
        hideMonthLabels={false}
      />
    </Row>
  );
};

export default Github;
