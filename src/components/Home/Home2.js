import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn,FaMailBulk } from "react-icons/fa";

const  handleEmailClick = () => {
  const subject = encodeURIComponent('Your Subject Here');
  const body = encodeURIComponent('Your email body here.');
  window.location.href = `mailto:hunter.zhou.au@gmail.com?subject=${subject}&body=${body}`;
};

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a full-stack developer proficient in languages such as
              <br />
              <i>
                <b className="purple">  Javascript(Typescript),&nbsp;  C++,&nbsp;  Python and&nbsp;  Java. </b>
              </i>
              <br />
              <br />
              I am passionate about developing new web technologies and products, &nbsp;
              <br />
              <i>
                as well as applications in {" "}
                <b className="purple">
                the Internet of Things (IoT) industry.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I utilize
              with <b className="purple">React.js, Node.js</b> or
              <i>
                <b className="purple">
                  {" "}
                  Next.js
                </b>
              </i>
              &nbsp; to quickly build new product systems on the
              <i>
                <b className="purple"> Azure.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/polokang"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hunter-zhou/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  onClick={handleEmailClick}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hunter.zhou.au@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaMailBulk />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
