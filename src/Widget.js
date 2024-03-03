import React, { useState } from 'react';
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

const Widget = () => {
    return (
        <>
        <Temperature/>
        <RelativeHumidity/>
        </>
    )
}

export default Widget;