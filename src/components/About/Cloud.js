import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiMicrosoftazure,
  SiAzurefunctions,
  SiAmazonaws,
  SiAwslambda,
} from "react-icons/si";

function Cloud() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzurefunctions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
    </Row>
  );
}

export default Cloud;
