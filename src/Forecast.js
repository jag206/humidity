import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Forecast = () => {
    const [forecast, setForecast] = useState({
        times: ['9am', '10am', '11am'],
        temps: [3, 2, 1],
        rel_humids: [10, 20, 30],
        abs_humid: [.1, .2, .3],
    });

    const times = forecast.times.map((time) =>
        <Col className="text-center">{time}</Col>
    );
    const temps = forecast.temps.map((temp) =>
        <Col className="text-center">{temp} °C</Col>
    );
    const rel_humids = forecast.rel_humids.map((rel_humid) =>
        <Col className="text-center">{rel_humid}%</Col>
    );
    const abs_humids = forecast.abs_humid.map((abs_humid) =>
        <Col className="text-center">{abs_humid}</Col>
    );

    return (
        <Container>
          <Row>
            <Col className="text-center"><strong>Time</strong></Col>
            {times}
          </Row>
          <Row>
            <Col className="text-center"><strong>Temperature</strong></Col>
            {temps}
          </Row>
          <Row>
            <Col className="text-center"><strong>Rel. Humidity</strong></Col>
            {rel_humids}
          </Row>
          <Row>
            <Col className="text-center"><strong>Abs. Humidity</strong></Col>
            {abs_humids}
          </Row>
        </Container>
    )
}

export default Forecast;