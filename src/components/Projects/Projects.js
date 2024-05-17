import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aquarius from "../../Assets/Projects/aquarius.png";
import aqurareporter from "../../Assets/Projects/aqurareporter.png";
import adminpage from "../../Assets/Projects/adminpage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminpage}
              isBlog={false}
              title="AdminPage"
              description="AdminPage is an internal management system tailored for company-wide use. It 
              enables the production department to publish and track new controllers in 
              production, while providing the sales department with a graphical interface to 
              visualize monthly sales and manage customer information. Additionally, the R&D 
              department can utilize AdminPage to monitor the running status of each new device."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aqurareporter}
              isBlog={false}
              title="Aquareporter"
              description="By connecting the controller to the web via Modem, WiFi or Ethernet, AquaReporter gives you the power to monitor and make real time adjustments to your controller from a smart phone, tablet or computer anywhere in the world."
              //ghLink="https://github.com/polokang"
              demoLink="https://www.aquareporter.com.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aquarius}
              isBlog={false}
              title="Aquariustech"
              description="Aquariustech is a company website built using the WordPress theme The7. The site utilizes the WPBakery plugin to edit pages and showcase company products, and the Tawk.to plugin to provide customers with online chat support."
              demoLink="https://www.aquariustech.com.au/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
