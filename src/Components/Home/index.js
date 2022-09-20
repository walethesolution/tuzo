import { Col, Row } from "react-bootstrap";
import hookahVector from "../../Images/hookahVector.png";
import "./index.scss";

function Home() {
  return (
    <div className="home">
      {/* <div className="container"> */}
      <Row>
        <Col>
          <img
            src={hookahVector}
            width="100%"
            height="100%"
            alt="hookah vector"
          />
        </Col>
      </Row>
      <h2 className="tuzoText">TUZO HOOKAH</h2>
      <div className="onePull">
        <h3>1 pull</h3>
        <h3>LOUD CLOUD</h3>
      </div>
    </div>
    // </div>
  );
}

export default Home;
