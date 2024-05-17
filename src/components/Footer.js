import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn,FaMailBulk } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const  handleEmail = () => {
    const subject = encodeURIComponent('Your Subject Here');
    const body = encodeURIComponent('Your email body here.');
    window.location.href = `mailto:hunter.zhou.au@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Hunter Zhou</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Hunter Zhou</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/polokang"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hunter-zhou/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
                <a
                  onClick={handleEmail}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hunter.zhou.au@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaMailBulk />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
