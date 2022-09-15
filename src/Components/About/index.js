import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col>
            {/* <video loop autoPlay>
              <source src={TuzoHookah} type="video/mp4" />
            </video> */}
            <h2>About Us</h2>
            <p>
              Tuzo hookah takes pride in providing you with BOSS-LIKE hookah
              experience in all kind of events
            </p>
            <p>
              ...with variety of flavors hand-crafted by the hookah technician
              himself GATUZO.
            </p>
            <p>1 pull</p>
            <p>LOUD CLOUD!!!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Book now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
