import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import koesterlich_img from "../assets/proj_koesterlich.png";
import mmportfolio_img from "../assets/proj_mmportfolio.png"
import cinema_img from "../assets/proj_cinemaapp.png";
import merncourse_img from "../assets/proj_merncourse.png";
import algorithmen_img from "../assets/proj_algorithmen.png"
import "../styles/Projects.css";


function Projects() {
    return (
        <Container className="projects" id="projects">
            <h1>My Projects</h1>
            <span className="line-long"></span>

            {/** KOESTERLICH APP */}
            <Row>
                <Col xs={12} md={5} className="image-col">
                    <img src={koesterlich_img} alt="Koesterlich App" />
                </Col>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-4">Koesterlich - Android App</h2>
                    <p>Koesterlich is a fully functional Android Application that publishes recipes from the Instagram food blog <a className="no-deco" href="https://www.instagram.com/koestlich_koesterlich/">Koesterlich</a>. Recipes can be saved in the user's individual cookbook, so all favorite recipes are collected in one place.</p>
                    <p>With their own web application, administrators have the possibility to set new recipes. The app is connected to a Firebase database where all recipes are stored.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/MMueller98/Koesterlich"><button className="button">Repository</button></a>

                </Col>
            </Row>

            <span className="line-long"></span>

            {/** CINEMA APP*/}
            <Row>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-4">Cinema WebApp</h2>
                    <p>This is the final project of the module "Web Development" of Trier University of Applied Sciences.</p>
                    <p>It is a web application for managing a cinema. The application consists of a server that stores the necessary resources persistently and makes them available on request, as well as a browser application that provides functionalities for cinema operators and customers based on these resources.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/DwieDave/cinema-app"><button className="button">Repository</button></a>
                </Col>
                <Col xs={12} md={5} className="image-col">
                    <img src={cinema_img} alt="MM-Portfolio" />
                </Col>
            </Row>

            <span className="line-long"></span>

            {/** ALGORITHMEN DESIGN */}
            <Row>
                <Col xs={12} md={5} className="image-col">
                    <img src={algorithmen_img} alt="MM-Portfolio" />
                </Col>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-4">Algorithmic Design - Python</h2>
                    <p>This is the repository, which I built up during the module "Algorithmic Design" at Trier University of Applied Sciences. The repositorycontains the analysis of several algorithm mines according to the pattern: problem description, modeling, algorithmic design, analysis (running time, correctness), implementation and testing.</p>
                    <p>Python was used as the programming language. The main topics of the course were graph theory, Greedy design patterns, divide and conquer, recursion equations, principles of dynamic programming.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/MMueller98/Algorithmen-Design-Python"><button className="button">Repository</button></a>
                </Col>
            </Row>

            <span className="line-long"></span>

            {/** MERN COURSE */}
            <Row>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-4">MERN-Course</h2>
                    <p>This is a full-stack MERN Application, created with React, Node, Express, MongoDB Atlas, and TypeScript. Users are authenticated with a username and password and can manage their notes stored in a NO-SQL database.</p>
                    <p>The full course can be found on the YouTube-Channel<a className="no-deco" href="https://www.youtube.com/watch?v=FcxjCPeicvU&t=18646s">@CodingInFlow</a>. Please support him - he's doing fantastic work!</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/MMueller98/MERNCourse"><button className="button">Repository</button></a>
                </Col>
                <Col xs={12} md={5} className="image-col">
                    <img src={merncourse_img} alt="MM-Portfolio" />
                </Col>
            </Row>

            <span className="line-long"></span>

            {/** MM-PORTFOLIO */}
            <Row>
                <Col xs={12} md={5} className="image-col">
                    <img src={mmportfolio_img} alt="MM-Portfolio" />
                </Col>
                <Col xs={12} md={7} className="description-col ps-5 pe-5">
                    <h2 className="mb-4">MM-Portfolio</h2>
                    <p>MM-Portfolio is the page you are seeing right now!</p>
                    <p>The page is created with React and styled with Bootstrap and contains most of my Computer Science related work.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/MMueller98/MMPortfolio"><button className="button">Repository</button></a>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects