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
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="HTML5" data-tooltip-id="DiHtml5">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="CSS3" data-tooltip-id="DiCss3">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Javascript" data-tooltip-id="DiJavascript1">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="ReactJS" data-tooltip-id="DiReact">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="VueJs" data-tooltip-id="FaVuejs">
                <FaVuejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Typescript" data-tooltip-id="SiTypescript">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Sass" data-tooltip-id="SiSass">
                <SiSass />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Less" data-tooltip-id="SiLess">
                <SiLess />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Bootstrap" data-tooltip-id="DiBootstrap">
                <DiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Ant Design" data-tooltip-id="SiAntdesign">
                <SiAntdesign />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Tailwindcss" data-tooltip-id="SiTailwindcss">
                <SiTailwindcss />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Wordpress" data-tooltip-id="DiWordpress">
                <DiWordpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="NextJS" data-tooltip-id="SiNextdotjs">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="ViteJS" data-tooltip-id="SiVite">
                <SiVite />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Shadcn UI" data-tooltip-id="SiShadcnui">
                <SiShadcnui />
            </Col>
            {/* <Tooltip id="DiHtml5" />
            <Tooltip id="DiCss3" />
            <Tooltip id="DiJavascript1" />
            <Tooltip id="DiReact" />
            <Tooltip id="FaVuejs" />
            <Tooltip id="SiTypescript" />
            <Tooltip id="SiSass" />
            <Tooltip id="SiLess" />
            <Tooltip id="DiBootstrap" />
            <Tooltip id="SiAntdesign" />
            <Tooltip id="SiTailwindcss" />
            <Tooltip id="DiWordpress" />
            <Tooltip id="SiNextdotjs" />
            <Tooltip id="SiVite" />
            <Tooltip id="SiShadcnui" /> */}
        </Row>
    );
}

export default Frontend;
