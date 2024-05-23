import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiPostman,
  SiNginx,
  SiVercel,
  SiApache,
  SiApachetomcat
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachetomcat  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
