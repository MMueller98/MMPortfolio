import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import koesterlich_img from "../assets/proj_koesterlich.png";
import mmportfolio_img from "../assets/proj_mmportfolio.png"
import cinema_img from "../assets/proj_cinemaapp.png";
import merncourse_img from "../assets/proj_merncourse.png";
import algorithmen_img from "../assets/proj_algorithmen.png"
import "../styles/Projects.css";
import ProjectContainer from "./Project_Container";


function Projects() {
    return (
        <Container className="projects" id="projects">
            <h1>My Projects</h1>
            <span className="line-long"></span>

            {/** KOESTERLICH APP */}
            <ProjectContainer 
                img={koesterlich_img}
                imgAlt={"Koesterlich App"}
                imgLeft={true}
                heading={"Koesterlich - Android App"}
                p1={"Koesterlich is a fully functional Android Application that publishes recipes from the Instagram food blog Koesterlich. Recipes can be saved in the user's individual cookbook, so all favorite recipes are collected in one place."}
                p2={"With their own web application, administrators have the possibility to set new recipes. The app is connected to a Firebase database where all recipes are stored."}
                repoHref={"https://github.com/MMueller98/Koesterlich"}
            />
            <span className="line-long"></span>

            {/** CINEMA APP*/}
            <ProjectContainer 
                img={cinema_img}
                imgAlt={"MM-Portfolio"}
                imgLeft={false}
                heading={"Cinema WebApp"}
                p1={"This is the final project of the module 'Web Development' of Trier University of Applied Sciences."}
                p2={"It is a web application for managing a cinema. The application consists of a server that stores the necessary resources persistently and makes them available on request, as well as a browser application that provides functionalities for cinema operators and customers based on these resources."}
                repoHref={"https://github.com/DwieDave/cinema-app"}
            />
            <span className="line-long"></span>

            {/** ALGORITHMEN DESIGN */}
            <ProjectContainer 
                img={algorithmen_img}
                imgAlt={"Image Algorithmen-Design"}
                imgLeft={true}
                heading={"Algorithmic Design - Python"}
                p1={"This is the repository, which I built up during the module 'Algorithmic Design' at Trier University of Applied Sciences. The repositorycontains the analysis of several algorithm mines according to the pattern: problem description, modeling, algorithmic design, analysis (running time, correctness), implementation and testing."}
                p2={"Python was used as the programming language. The main topics of the course were graph theory, Greedy design patterns, divide and conquer, recursion equations, principles of dynamic programming."}
                repoHref={"https://github.com/MMueller98/Algorithmen-Design-Python"}
            />
            <span className="line-long"></span>

            {/** MERN COURSE */}
            <ProjectContainer 
                img={merncourse_img}
                imgAlt={"Image MERN-Course"}
                imgLeft={false}
                heading={"MERN-Course"}
                p1={"This is a full-stack MERN Application, created with React, Node, Express, MongoDB Atlas, and TypeScript. Users are authenticated with a username and password and can manage their notes stored in a NO-SQL database."}
                p2={"The full course can be found on the YouTube-Channel @CodingInFlow. Please support him - he's doing fantastic work!"}
                repoHref={"https://github.com/MMueller98/MERNCourse"}
            />
            <span className="line-long"></span>
            
            {/** MM-PORTFOLIO */}
            <ProjectContainer 
                img={mmportfolio_img}
                imgAlt={"Image MM-Portfolio"}
                imgLeft={true}
                heading={"MM-Portfolio"}
                p1={"MM-Portfolio is the page you are seeing right now!"}
                p2={"The page is created with React and styled with Bootstrap and contains most of my Computer Science related work. MM-Portfolio is hosted on my own VPS with NGINX."}
                repoHref={"https://github.com/MMueller98/MMPortfolio"}
            />
        </Container>
    );
}

export default Projects