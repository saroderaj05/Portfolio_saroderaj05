import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
// import { ImCircleRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raj Sarode </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            <br />I am currently pursuing a Master's degree in Information Systems at Northeastern University, Boston, and am employed as a Graduate Teaching Assistant at Northeastern University as well. For my previous education, I completed my Bachelor's Degree in Computer Engineering at the University of Mumbai. 
            Bridging the gap between data and decision-making, I am a versatile professional specializing in Data Engineering and Data Analysis, as my expertise lies in synthesizing data and analytical insights to drive strategic business decisions. I am eager to contribute my skills for full-time roles in the United States.
            <br />
            <br />
            Beyond architecting data pipelines, discover what inspires me outside the realm of data!
          </p>
          <ul>
            <li className="about-activity">
              <IoIosArrowForward /> Travelling
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Console Gaming
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Networking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Raj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
