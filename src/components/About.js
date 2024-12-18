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
          <p>During my studies in Medical Technology at the University of Applied Sciences Trier, I discovered my passion for software development. To deepen this interest, I decided to pursue a second degree in Computer Science (B.Sc.), which I successfully completed.</p>
          <p>I currently live in Munich, where I began my professional career as a trainee in software development at CHECK24 Comparison Portal. During the trainee program, I had the opportunity to work in various teams and gain valuable experience in different areas of software development. After successfully completing the program, I was promoted to Software Developer and have since contributed my knowledge and skills to exciting projects.</p>
          
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