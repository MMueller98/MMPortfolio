import React from "react"
import {Container} from "react-bootstrap"
import koesterlich_img from "../assets/images/proj_koesterlich.png"
import mmportfolio_img from "../assets/images/proj_mmportfolio.png"
import cinema_img from "../assets/images/proj_cinemaapp.png"
import check24_img from "../assets/images/proj_check24.png"
import algorithmen_img from "../assets/images/proj_algorithmen.png"
import "../styles/Projects.css";
import ProjectContainer from "./Project_Container"


function Projects() {
    return (
        <div className="projects" id="projects">
        <Container >
            <h1>My Projects</h1>
            <span className="line-long"></span>

            {/** CHECK24 */}
            <ProjectContainer 
                img={check24_img}
                imgAlt={"Check24 Kfz Startseite"}
                imgLeft={true}
                heading={"CHECK24 - Full-Stack Development"}
                p1={"CHECK24 is the leading German comparison platform with 15 million customers, more than 40 products and over 6,000 employees. For years, CHECK24's motor insurance comparison has set the benchmark in Germany in terms of user-friendliness and customer benefits"}
                p2={"In the first stage of my trainee position, I work as a full-stack developer in the customer area of CHECK24. We are building web applications and REST-APIs with Spring Boot and React, deployed with Jenkins, Git and Gradle."}
                repoHref={"https://www.check24.de/kfz-versicherung/"}
                repoName={"Zu Check24"}
            />
            <span className="line-long"></span>

            {/** KOESTERLICH APP */}
            <ProjectContainer 
                img={koesterlich_img}
                imgAlt={"Koesterlich App"}
                imgLeft={false}
                heading={"Koesterlich - Android App"}
                p1={"Koesterlich is a fully functional Android Application that publishes recipes from the Instagram food blog Koesterlich. Recipes can be saved in the user's individual cookbook, so all favorite recipes are collected in one place."}
                p2={"With their own web application, administrators have the possibility to set new recipes. The app is connected to a Firebase database where all recipes are stored."}
                repoHref={"https://github.com/MMueller98/Koesterlich"}
                repoName={"Repository"}
            />
            <span className="line-long"></span>

            {/** CINEMA APP*/}
            <ProjectContainer 
                img={cinema_img}
                imgAlt={"MM-Portfolio"}
                imgLeft={true}
                heading={"Cinema WebApp"}
                p1={"This is the final project of the module 'Web Development' of Trier University of Applied Sciences."}
                p2={"It is a web application for managing a cinema. The application consists of a server that stores the necessary resources persistently and makes them available on request, as well as a browser application that provides functionalities for cinema operators and customers based on these resources."}
                repoHref={"https://github.com/DwieDave/cinema-app"}
                repoName={"Repository"}
            />
            <span className="line-long"></span>

            {/** ALGORITHMEN DESIGN */}
            <ProjectContainer 
                img={algorithmen_img}
                imgAlt={"Image Algorithmen-Design"}
                imgLeft={false}
                heading={"Algorithmic Design - Python"}
                p1={"This is the repository, which I built up during the module 'Algorithmic Design' at Trier University of Applied Sciences. The repository contains the analysis of several algorithm mines according to the pattern: problem description, modeling, algorithmic design, analysis (running time, correctness), implementation and testing."}
                p2={"Python was used as the programming language. The main topics of the course were graph theory, Greedy design patterns, divide and conquer, recursion equations, principles of dynamic programming."}
                repoHref={"https://github.com/MMueller98/Algorithmen-Design-Python"}
                repoName={"Repository"}
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
                repoName={"Repository"}
            />
        </Container>
        </div>
    );
}

export default Projects