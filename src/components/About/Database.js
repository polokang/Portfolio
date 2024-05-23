import React from "react";
import { Tooltip } from 'react-tooltip';
import { Col, Row } from "react-bootstrap";
import {
    SiMysql,
    SiPostgresql,
    SiMicrosoftsqlserver ,
    SiOracle,
    SiMongodb,
    SiRedis,
    SiSqlite
} from "react-icons/si";
function Database() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Mysql " data-tooltip-id="SiMysql">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="PostgreSQL" data-tooltip-id="SiPostgresql">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tooltip-content="Microsoft SQL Server" data-tooltip-id="SiMicrosoftsqlserver">
                <SiMicrosoftsqlserver  />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiOracle />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis  />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSqlite  />
            </Col>
            {/* <Tooltip id="SiMysql" />
            <Tooltip id="SiPostgresql" />
            <Tooltip id="SiMicrosoftsqlserver" /> */}
             
        </Row>
    );
}

export default Database;
