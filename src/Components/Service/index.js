import { Col, Container, Row, Card } from "react-bootstrap";
import "./index.scss";

function Service() {
  return (
    <div className="service">
      <Container>
        <h2>Our Services</h2>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Hookah Service</Card.Title>
                <Card.Text>Top notch service by the hookah maestro.</Card.Text>
              </Card.Body>
            </Card>
            <h1></h1>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Hookah Flavor cocktails</Card.Title>
                <Card.Text>
                  Top notch cocktails by the hookah maestro.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Hookah Setup Tutoial</Card.Title>
                <Card.Text>
                  Top notch teaching by the hookah maestro.
                </Card.Text>
              </Card.Body>
            </Card>
            <h1></h1>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Customized Hookah Menu</Card.Title>
                <Card.Text>
                  Top notch customized hookah by the hookah maestro.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;
