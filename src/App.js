import './App.css';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Forecast from './Forecast';
import Row from 'react-bootstrap/Row';
import Widget from './Widget';

function App() {
  return (
    <>
    <Container>
        <Row><Forecast/></Row>
        <Row><Widget/></Row>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
