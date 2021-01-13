import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Col, Container, Row, Table} from "react-bootstrap";


function App() {
    const [mechanisms, setMechanisms] = useState([
        "Force",
        "Cutting / splitting",
        "Removing",
        "Joining / combining",
        "Change shape",
        "Fixate shape",
        "Elevation",
        "New material",
        "Surface",
        "Barrier",
        "Fluid separation",
        "Fluid connection",
        "Gas / Air",
        "Flow",
        "Volume",
        "Pressure",
        "Sound / Vibration",
        "Radiation",
        "Energy / Power",
        "Heat",
        "Light",
        "Vision",
        "Electromagnetism",
        "Electronics",
        "Detection",
        "Feedback loop",
        "Sensor",
        "Data",
        "Calculation"
    ]);
    const [trends, setTrends] = useState([
        "Customisable product",
        "Globalisation",
        "Tailor to local setting",
        "Developing countries",
        "Industry consolidation (M&A)",
        "Deliver whole care 'package'",
        "Lower production costs",
        "Inexpensive materials",
        "Wearable",
        "Miniaturization",
        "Smartphone integration",
        "Internet connectivity",
        "Use customer feedback",
        "Artificial intelligence",
        "Big data",
        "Pharma/device combo",
        "Device with several functions",
        "Prevention and treatment combo",
        "Regulation changes",
        "Data protection",
        "Direct-to-consumer",
        "Pay-per-use",
        "Subscription model",
        "Combine two 'silos'",
        "Unique team expertise",
        "Unique team expertise",
        "Unique team expertise",
        "Unique team expertise",
        "Unique team expertise",
        "Alternative care setting",
        "Alternative healthcare provider",
        "Active patient",
        "Patient psychology"
    ]);
    const [values, setvalues] = useState([
        "Cost reduction",
        "Cost reduction",
        "Cost reduction",
        "Cost reduction",
        "Cost reduction",
        "Better usability",
        "Patient empowerment",
        "Increased safety",
        "Fewer side effects",
        "Reduced time use",
        "Increased patient adherence",
        "Reduced (re)hospitalization",
        "Increased access to a solution",
        "Reduce or prevent complications",
        "Greater mobility",
        "Increased survival/recovery",
        "Decreased morbidity",
        "Diagnostics accuracy",
        "Reduced manpower",
        "Disease prevention",
        "Reduced space utilization",
        "Fewer sick days",
        "Less pain",
        "Higher quality of life",
        "Less stress/anxiety",
        "Emotional well-being",
        "Accessibility"
    ]);


    const [mechanism, setMechanism] = useState("");
    const [trend, setTrend] = useState("");
    const [value, setValue] = useState("");
    function randomizeMechanism() {
        const mech = mechanisms[Math.floor(Math.random() * mechanisms.length)];
        setMechanism(mech);
    }   function randomizeTrend() {
        const trend = trends[Math.floor(Math.random() * trends.length)];
        setTrend(trend);
    }   function randomizeValue() {
        const value = values[Math.floor(Math.random() * values.length)];
        setValue(value);
    }


    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col><Alert>Mechanism:<br/>
                        {mechanism}</Alert></Col>

                    <Col>Trend:<br/>
                        {trend}</Col>

                    <Col>Value:<br/>
                        {value}</Col>

                </Row>
                <Row>
                    <Col>
                        <Button onClick={randomizeMechanism}>Randomize</Button>
                    </Col>
                    <Col>
                        <Button onClick={randomizeTrend}>Randomize</Button>
                    </Col>
                    <Col>
                        <Button onClick={randomizeValue}>Randomize</Button>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Button onClick={()=>{randomizeTrend();randomizeMechanism();randomizeValue()}}>
                            Randomize all
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered>
                            <TableHeader title={"Mechanisms"}/>
                            <tbody>

                            {mechanisms.map(element =>
                                <tr>
                                    <td>{element}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table striped bordered>
                            <TableHeader title={"Trend"}/>
                            <tbody>

                            {trends.map(element =>
                                <tr>
                                    <td>{element}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>

                    </Col>
                    <Col>
                        <Table striped bordered>
                            <TableHeader title={"Value"}/>
                            <tbody>

                            {values.map(element =>
                                <tr>
                                    <td>{element}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>

                    </Col>
                </Row>

            </Container>
        </div>
    );
}


function TableHeader ({title}: { title:string }) {
    return (<thead>
    <tr>
        <th>{title}</th>
    </tr>
    </thead>)
}

export default App;
