import React from "react"
import { Col, Row, Table } from "react-bootstrap";
import about_img from "../assets/Marius_6.png";
import "../styles/About.css";


const About = () => {
  
  
  return (
    <div className="about" id="about">
      <Row breakpoints={['xl']}>
        <Col xs={12} md={5} className="image-col">
          <img src={about_img} alt="Marius" />
        </Col>
        <Col xs={12} md={7} className="description-col ps-5 pe-5">
          <h2>About me</h2>
          <span className='line'></span>
          <p>In 2021 I successfully completed my studies in Biomedical Engineering at the Trier University of Applied Sciences. In the course of my studies I discovered a new love for computer science and therefore started a second degree in computer science B. Sc.</p>
          <p>I am currently working as a working student at the BBT Group in the field of Applications – Clinical Special Systems.</p>
          <h3 className="mt-5">Key-Facts:</h3>
          <Table borderless size="sm" style={{ width: "max-content", padding: "10px" }}>
            <thead>
              <tr>
                <th >Name:</th>
                <th>Marius Müller</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>Age:</th>
                <th>24</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th >Location:</th>
                <th>Trier</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th >Email:</th>
                <th>marius.mueller98@outlook.de</th>
              </tr>
            </thead>
          </Table>

          <h3 className="mt-5">Links:</h3>
          <Row>
            <Col xs={12} md={2}><button className='button mt-3'>Linkedin</button></Col>
            <Col xs={12} md={2}><button className='button mt-3'>GitHub</button></Col>
          </Row>

        </Col>
      </Row>
    </div>

  );
}

export default About