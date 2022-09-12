import "./index.scss";
import { Button } from "react-bootstrap";

function About() {
  return (
    <div className="about">
      <div className="grid-container">
        <div className="img"></div>
        <div className="text"></div>
        <div className="img"></div>
      </div>
      <Button>Book now</Button>
    </div>
  );
}

export default About;
