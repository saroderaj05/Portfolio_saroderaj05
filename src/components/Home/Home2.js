import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
            I delved deep into the realm of Data and have nurtured a deep passion 
            for transforming raw data into insightful narratives 📊
              <br />
              <br />I am proficient in classics like
              <i>
                <b className="purple"> Python, R and SQL. </b>
              </i>
              <br />
              <br />
              My field of interest's are orchestrating &nbsp;
              <i>
                <b className="purple">ETL pipelines </b>
              </i> or integrating {" "}
              <i>
                <b className="purple">OpenAI with FastAPI. </b>
              </i> 
  
              <br />
              <br />
              Whenever possible, I combine my comprehensive data engineering background with a fervent interest in pioneering interactive applications, harnessing the innovative capabilities of
              <i>
                <b className="purple">
                  {" "}
                  OpenAI
                </b>
              </i>
              {" "}
              to drive insightful, user-centric solutions
              <br/>
              <br/>
              Let's connect and chart a course to explore how I can contribute to your organization's data-driven journey. Together, we can sail towards a future where data doesn't just inform, but inspires. So, are you ready to embark on a voyage through the vast seas of data with me? Let's go!
              &nbsp;
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
                  href="https://github.com/saroderaj05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajsarode/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rajsarode_05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
