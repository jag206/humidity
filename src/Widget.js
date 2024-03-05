import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Widget = () => {
    const [locked, setLocked] = useState("abs_humid");
    const [temperature, setTemperature] = useState(10);
    const [relativeHumidity, setRelativeHumidity] = useState(50);
    const [absoluteHumidity, setAbsoluteHumidity] = useState(calculateAbsoluteHumidity(temperature, relativeHumidity));

    function calculateAbsoluteHumidity(temperature, relativeHumidity) {
        return temperature * (relativeHumidity / 100);
    }

    function calculateValue(absoluteHumidity, relativeHumidity, temperature) {
        // Note: This calculation is completely wrong!
        if (locked === "temp") {
            setTemperature(absoluteHumidity * relativeHumidity / 100);
        }
        if (locked === "rel_humid") {
            setRelativeHumidity(100 * absoluteHumidity / temperature);
        }
        if (locked === "abs_humid") {
            setAbsoluteHumidity(calculateAbsoluteHumidity(temperature, relativeHumidity));
        }
    }

    function updateTemperature(e) {
        setTemperature(e.target.value);
        calculateValue(absoluteHumidity, relativeHumidity, e.target.value);
    }

    function updateRelativeHumidity(e) {
        setRelativeHumidity(e.target.value);
        calculateValue(absoluteHumidity, e.target.value, temperature);
    }

    function updateAbsoluteHumidity(e) {
        setAbsoluteHumidity(e.target.value);
        calculateValue(e.target.value, relativeHumidity, temperature);
    }

    return (
    <Container>
        <Form.Label>Temperature: {Number(temperature).toFixed(1)} °C</Form.Label>
        <Form.Range
            {...{"disabled":locked==="temp"}}
            min="-10"
            max="30"
            step="0.5"
            value={temperature}
            onChange={updateTemperature}
        />
        <Form.Label>Relative Humidity: {Number(relativeHumidity).toFixed(0)}%</Form.Label>
        <Form.Range
            {...{"disabled":locked==="rel_humid"}}
            min="0"
            max="100"
            step="5"
            value={relativeHumidity}
            onChange={updateRelativeHumidity}
        />
        <Form.Label>Absolute Humidity: {Number(absoluteHumidity).toFixed(2)}g/kg</Form.Label>
        <Form.Range
            {...{"disabled":locked==="abs_humid"}}
            min="0"
            max="20"
            step="0.5"
            value={absoluteHumidity}

            onChange={updateAbsoluteHumidity}
        />
        <div key="tmp" className="mb-3">
          <Form.Check
            inline
            {...{"checked":locked==="temp"}}
            label="Temperature"
            name="lock"
            type="radio"
            id="lock-temp"
            onChange={e => {setLocked("temp")}}
          />
          <Form.Check
            inline
            {...{"checked":locked==="rel_humid"}}
            label="Relative Humidity"
            name="lock"
            type="radio"
            id="lock-rel-humid"
            onChange={e => {setLocked("rel_humid")}}
          />
          <Form.Check
            inline
            {...{"checked":locked==="abs_humid"}}
            label="Absolute Humidity"
            name="lock"
            type="radio"
            id="lock-abs-umid"
            onChange={e => {setLocked("abs_humid")}}
          />
        </div>
        <p><strong>Note that the above calculation is completely inaccurate</strong></p>
    </Container>
    )
}

export default Widget;