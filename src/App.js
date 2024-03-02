import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div>
    <Container>
      <Row>
        <Col className="text-center"><strong>Time</strong></Col>
        <Col className="text-center">9am</Col>
        <Col className="text-center">10am</Col>
        <Col className="text-center">11am</Col>
        <Col className="text-center">12pm</Col>
      </Row>
      <Row>
        <Col className="text-center"><strong>Temperature</strong></Col>
        <Col className="text-center">10°C</Col>
        <Col className="text-center">12°C</Col>
        <Col className="text-center">14°C</Col>
        <Col className="text-center">16°C</Col>
      </Row>
      <Row>
        <Col className="text-center"><strong>Rel. Humidity</strong></Col>
        <Col className="text-center">60%</Col>
        <Col className="text-center">30%</Col>
        <Col className="text-center">40%</Col>
        <Col className="text-center">40%</Col>
      </Row>
      <Row>
        <Col className="text-center"><strong>Abs. Humidity</strong></Col>
        <Col className="text-center">3.2</Col>
        <Col className="text-center">4.1</Col>
        <Col className="text-center">5.6</Col>
        <Col className="text-center">2.3</Col>
      </Row>
    </Container>
    <Footer></Footer>
    </div>
  );
}

export default App;
