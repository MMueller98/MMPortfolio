import React from "react"
import { Col, Container, Row} from "react-bootstrap";
import about_img from "../assets/images/Marius_Mueller_min.png";
import "../styles/About.css";


const About = () => {


  return (
    <Container id="about" className="about">
      <Row>
        <Col xs={12} md={5} className="image-col">
          <img src={about_img} alt="Marius" />
        </Col>
        <Col xs={12} md={7} className="description-col ps-5 pe-5">
          <h2>About me</h2>
          <span className='line-center'></span>
          <p>In 2021 I successfully completed my studies in Biomedical Engineering at the Trier University of Applied Sciences. In the course of my studies I discovered a new love for computer science and therefore started a second degree in computer science B. Sc.</p>
          <p>I am currently working as a working student at the BBT Group in the field of Applications – Clinical Special Systems.</p>
          
          <h3 className="mt-5">Links:</h3>
          <Row>
            <div className="links">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marius-mueller-dev/" className="me-3"><button className="button mt-3">Linkedin</button></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/MMueller98"><button className="button mt-3">GitHub</button></a>
            </div>
          </Row>

        </Col>
      </Row>
    </Container>

  );
}

export default About