import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, 
            <br />
            I am <span className="purple">Hunter Zhou</span>, a web developer based in
            <br />
            <span className="purple"> Brisbane, Queensland, Australia.</span>
            <br />
            I currently work at Aquarius Technologies. 
            <br />
            I hold a Bachelor's degree in Information Management 
            <br />
            and a Diploma in Computer Communication.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Basketball & Badminton
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hunter Zhou</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
