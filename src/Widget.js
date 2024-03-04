import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Temperature = () => {
    const [value, setValue] = useState(10);

    return (
        <>
        <Form.Label>Temperature: {Number(value).toFixed(1)} °C</Form.Label>
        <Form.Range min="-10" max="30" step="0.5" value={value} onChange={e => setValue(e.target.value)}/>
        </>
    )
}

const RelativeHumidity = () => {
    const [value, setValue] = useState(50);
    return (
        <>
        <Form.Label>Relative Humidity: {value}%</Form.Label>
        <Form.Range min="0" max="100" step="5" value={value} onChange={e => setValue(e.target.value)}/>
        </>
    )
}

const AbsoluteHumidity = () => {
    const [value, setValue] = useState(5);
    return (
        <>
        <Form.Label>Absolute Humidity: {Number(value).toFixed(2)}g/kg</Form.Label>
        <Form.Range min="0" max="20" step="0.5" value={value} onChange={e => setValue(e.target.value)}/>
        </>
    )
}

const Widget = () => {
    return (
    <Container>
        <Temperature/>
        <RelativeHumidity/>
        <AbsoluteHumidity/>
    </Container>
    )
}

export default Widget;