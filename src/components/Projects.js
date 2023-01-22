import React from "react"
import { Col, Container, Row, Table } from "react-bootstrap";
import koesterlich_img from "../assets/Koesterlich_Kollage.png";
import "../styles/Projects.css";


function Projects() {
    return (
        <Container className="projects" id="projects">
            <div>
                <h1 className="mb-5">Projects</h1>
            </div>

            <Row>
                <Col xs={12} md={5} className="image-col">
                    <img src={koesterlich_img} alt="Marius" />
                </Col>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-3">Koesterlich - Android App</h2>
                    <p>In 2021 I successfully completed my studies in Biomedical Engineering at the Trier University of Applied Sciences. In the course of my studies I discovered a new love for computer science and therefore started a second degree in computer science B. Sc.</p>
                    <p>I am currently working as a working student at the BBT Group in the field of Applications – Clinical Special Systems.</p>
                </Col>
            </Row>

            <span className="line-long mt-5 mb-5"></span>

            <Row>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-3">Koesterlich - Android App</h2>
                    <p>In 2021 I successfully completed my studies in Biomedical Engineering at the Trier University of Applied Sciences. In the course of my studies I discovered a new love for computer science and therefore started a second degree in computer science B. Sc.</p>
                    <p>I am currently working as a working student at the BBT Group in the field of Applications – Clinical Special Systems.</p>
                </Col>
                <Col xs={12} md={5} className="image-col">
                    <img src={koesterlich_img} alt="Marius" />
                </Col>
            </Row>

            <span className="line-long mt-5 mb-5"></span>
        </Container>
    );
}

export default Projects