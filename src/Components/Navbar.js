import React from 'react';
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
const Nav_bar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Navbar expand="lg" className={`navbar navbar-expand-lg fixed-top ${scrolled ? "bg-dark shadow" : "bg-transparent"
                }`}>
                <Container >
                
                    <Navbar.Brand className="logo" as={Link} to={"Home"} smooth={true} duration={500} offset={-70}>Ahmad Abo Sara</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"#fff", border:"2px solid green"}} />
                    <Navbar.Collapse id="basic-navbar-nav" style={{color:"#000",backdropFilter:"blur(9px)"}}>
                        <Nav className="mx-auto">
                            <Nav.Link className="NavLink ps-3" as={Link} to={"Home"} smooth={true} duration={500} offset={-70}>Home</Nav.Link>
                            <Nav.Link className="NavLink  ps-3" as={Link} to={"About"} smooth={true} duration={500} offset={-70}>About</Nav.Link>
                            <Nav.Link className="NavLink  ps-3" as={Link} to={"Skills"} smooth={true} duration={500} offset={-70}>Skills</Nav.Link>
                            <Nav.Link className="NavLink  ps-3" as={Link} to={"Project"} smooth={true} duration={500} offset={-70}>Project</Nav.Link>
                            <Nav.Link className="NavLink  ps-3" as={Link} to={"Contact"} smooth={true} duration={500} offset={-70}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Nav_bar;

