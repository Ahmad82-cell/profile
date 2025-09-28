import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion"
const About = () => {
    return (
        <div className='section2' id='About'>
            <Container>
                <Row className='mb-4 pt-5'>
                    <Col sm="12">
                        <h1 className='logoName2'><span style={{ color: "#BB86FC" }}>About </span>Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg="7" md="12" sm="12" >
                        <motion.p>
                            <p className='pargtext2'>
                                I started my coding journey tow year ago, and I am currently a 21-year-old university student.
                                My passion for technology drives me every day to improve my skills and build a strong fo My
                            </p>
                            <p className='pargtext2'>
                                I believe that every website should tell a story, and every line of code should solve a real problem.
                                That's why I focus on creating exceptional user experiences that combine beauty with functionality.
                            </p>
                            <p className='pargtext2'>
                                My expertise spans across modern web technologies,
                                from responsive front-end interfaces to scalable back-end architectures.
                                I'm passionate about clean code, performance optimization,
                                and creating solutions that make a difference.
                                ht
                            </p>
                        </motion.p>
                    </Col>
                    <Col lg="5" md="12" sm="12">
                        <div className='carddate'>
                            <div className='card_header'>
                                <div className='line_color' style={{ background: "#ea0c00" }}></div>
                                <div className='line_color' style={{ background: "#ffbd2e" }}></div>
                                <div className='line_color' style={{ background: "#27ca3f" }}></div>
                            </div>
                            <div className='code'>
                                <div className='code_data'>const: <span>developer = ;</span></div>
                                <div className='code_data'>name: <span style={{ color: "red" }}>'Ahmad Abo Sara', </span></div>
                                <div className='code_data'>skills: <span style={{ color: "red" }}> ['Frontend', 'Backend'], </span></div>
                                <div className='code_data'>passion: <span style={{ color: "red" }}> passion: 'Dream it. Code it. Live it', </span></div>
                                <div className='code_data'>location: <span style={{ color: "red" }}> 'Syria', </span></div>
                                <div className='code_data'>code:() => <span className='code_function'>  'Less bugs, more fun ❤',</span></div>
                                <div style={{ color: "#10b981" }}>availableForHire: <span className='code_function'> true,</span></div>
                                <div className='code_data'>};</div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default About;
