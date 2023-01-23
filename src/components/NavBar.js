import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import logo from "../assets/logo_neu.png";
import "../styles/NavBar.css";

const NavBar = () => {

    return (
        <Navbar className="NavBar" variant="dark" expand="sm" sticky="top">
            <Container>
                <Navbar.Brand href="#top">
                    <img src={logo} style={{height: "60px"}} alt="logo"/>
                </Navbar.Brand>
                {/* responsable for responsive design  */}
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    {/* with href it will always refresh the page -> not good! */}
                    <Nav>
                        <Nav.Link as={HashLink} to="/#top">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/#projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
