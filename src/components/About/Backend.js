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
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Node.js" data-tooltip-id="DiNodejs ">
                <DiNodejs  />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDotnet data-tooltip-content="Dotnet" data-tooltip-id="SiDotnet"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPhp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGo />
            </Col>
            <Tooltip id="SiNodedotjs" />
            <Tooltip id="SiDotnet" />
            
        </Row>
    );
}

export default Backend;
