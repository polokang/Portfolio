import React from "react";
import { Tooltip } from 'react-tooltip';
import { Col, Row } from "react-bootstrap";
import { FaVuejs } from "react-icons/fa";
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiBootstrap,
    DiWordpress,
} from "react-icons/di";
import {
    SiTypescript,
    SiSass,
    SiLess,
    SiAntdesign,
    SiTailwindcss,
    SiNextdotjs,
    SiVite,
    SiShadcnui
} from "react-icons/si";
function Frontend() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 data-tooltip-content="HTML5" data-tooltip-id="my-tooltip"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 data-tooltip-content="DiCss3" data-tooltip-id="DiCss3"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaVuejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSass />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLess />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAntdesign />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiWordpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVite />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiShadcnui />
            </Col>
            <Tooltip id="my-tooltip" />
            <Tooltip id="DiCss3" />
            
        </Row>
    );
}

export default Frontend;
