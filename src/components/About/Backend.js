import React from "react";
import { Tooltip } from 'react-tooltip';
import { Col, Row } from "react-bootstrap";
import {
    DiJava,
    DiNodejs
} from "react-icons/di";
import {
    SiDotnet,
    SiSpringboot,
    SiPython,
    SiPhp,
    SiGo
} from "react-icons/si";
function Backend() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="NodeJS" data-tooltip-id="DiNodejs">
                <DiNodejs  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Dotnet" data-tooltip-id="SiDotnet">
                <SiDotnet />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Java" data-tooltip-id="DiJava">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="SpringBoot" data-tooltip-id="SiSpringboot">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Python" data-tooltip-id="SiPython">
                <SiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="PHP" data-tooltip-id="SiPhp">
                <SiPhp />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Go" data-tooltip-id="SiGo">
                <SiGo />
            </Col>
            {/* <Tooltip id="DiNodejs" />
            <Tooltip id="SiDotnet" />
            <Tooltip id="DiJava" />
            <Tooltip id="SiSpringboot" />
            <Tooltip id="SiPython" />
            <Tooltip id="SiPhp" />
            <Tooltip id="SiGo" /> */}
        </Row>
    );
}

export default Backend;
