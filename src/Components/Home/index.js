import { Col, Container, Row } from "react-bootstrap";
import hookahVector from "../../Images/hookahVector.png";
import "./index.scss";

function Home() {
  return (
    <div className="home">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <img
              src={hookahVector}
              width="100%"
              height="100%"
              alt="hookah vector"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
