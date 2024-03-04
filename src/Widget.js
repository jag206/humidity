import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Widget = () => {
    const [temperature, setTemperature] = useState(10);
    const [relativeHumidity, setRelativeHumidity] = useState(50);
    const [absoluteHumidity, setAbsoluteHumidity] = useState(10);

    function updateTemperature(e) {
        setTemperature(e.target.value);
        calculateAbsoluteHumidity(e.target.value, relativeHumidity);
    }

    function updateRelativeHumidity(e) {
        setRelativeHumidity(e.target.value);
        calculateAbsoluteHumidity(temperature, e.target.value);
    }

    function updateAbsoluteHumidity(e) {
        setAbsoluteHumidity(e.target.value);
        calculateRelativeHumidity(temperature, e.target.value)
    }

    function calculateAbsoluteHumidity(temperature, relativeHumidity) {
        // Note: This calculation is completely wrong!
        setAbsoluteHumidity(temperature * (relativeHumidity / 100));
    }

    function calculateRelativeHumidity(temperature, absoluteHumidity) {
        // Note: This calculation is completely wrong!
        setRelativeHumidity(absoluteHumidity * 100 / temperature);
    }

    return (
    <Container>
        <Form.Label>Temperature: {Number(temperature).toFixed(1)} °C</Form.Label>
        <Form.Range
            min="-10"
            max="30"
            step="0.5"
            value={temperature}
            onChange={updateTemperature}
        />
        <Form.Label>Relative Humidity: {Number(relativeHumidity).toFixed(0)}%</Form.Label>
        <Form.Range
            min="0"
            max="100"
            step="5"
            value={relativeHumidity}
            onChange={updateRelativeHumidity}
        />
        <Form.Label>Absolute Humidity: {Number(absoluteHumidity).toFixed(2)}g/kg</Form.Label>
        <Form.Range
            min="0"
            max="20"
            step="0.5"
            value={absoluteHumidity}
            onChange={updateAbsoluteHumidity}
        />
        <p><strong>Note that the above calculation is completely inaccurate</strong></p>
    </Container>
    )
}

export default Widget;