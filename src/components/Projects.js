import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import koesterlich_img from "../assets/proj_koesterlich.png";
import mmportfolio_img from "../assets/proj_mmportfolio.png"
import "../styles/Projects.css";


function Projects() {
    return (
        <Container className="projects" id="projects">
            <div>
                <h1 className="mb-5">Projects</h1>
            </div>

            {/** KOESTERLICH APP */}
            <Row>
                <Col xs={12} md={5} className="image-col">
                    <img src={koesterlich_img} alt="Koesterlich App" />
                </Col>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-3">Koesterlich - Android App</h2>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </Col>
            </Row>

            <span className="line-long mt-5 mb-5"></span>

            {/** MM-PORTFOLIO */}
            <Row>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-3">MM-Portfolio</h2>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </Col>
                <Col xs={12} md={5} className="image-col">
                    <img src={mmportfolio_img} alt="MM-Portfolio" />
                </Col>
            </Row>

            <span className="line-long mt-5 mb-5"></span>
        </Container>
    );
}

export default Projects