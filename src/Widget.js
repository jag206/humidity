import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Widget = () => {
    const [locked, setLocked] = useState("abs_humid");
    const [temperature, setTemperature] = useState(10);
    const [relativeHumidity, setRelativeHumidity] = useState(50);
    const [absoluteHumidity, setAbsoluteHumidity] = useState(calculateAbsoluteHumidity(temperature, relativeHumidity));

    function calculateAbsoluteHumidity(temperature, relativeHumidity) {
        // https://journals.ametsoc.org/view/journals/mwre/108/7/1520-0493_1980_108_1046_tcoept_2_0_co_2.xml?tab_body=pdf
        // saturation pressure
        // Pa
        const saturation_pressure = 6.112 * Math.exp(17.67 * temperature / (temperature + 243.5)) * 100;  // Pa
        const specific_gas = 461.5;
        // pV = mRT
        // kg/m^3
        const abs_humidity = (relativeHumidity / 100) * saturation_pressure / (specific_gas * (temperature + 273.15));
        // g/m^3
        return 1000 * abs_humidity;
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
        const T = parseFloat(e.target.value);
        setTemperature(T);
        calculateValue(absoluteHumidity, relativeHumidity, T);
    }

    function updateRelativeHumidity(e) {
        const RH = parseFloat(e.target.value);
        setRelativeHumidity(RH);
        calculateValue(absoluteHumidity, RH, temperature);
    }

    function updateAbsoluteHumidity(e) {
        const AH = parseFloat(e.target.value);
        setAbsoluteHumidity(AH);
        calculateValue(AH, relativeHumidity, temperature);
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
        <Form.Label>Absolute Humidity: {Number(absoluteHumidity).toFixed(2)}g/m<sup>3</sup></Form.Label>
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