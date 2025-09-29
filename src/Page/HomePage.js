import React from 'react';
import image from "../images/ahmad.jpg"
import { motion } from "framer-motion"
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa"
import { BsFillBootstrapFill } from "react-icons/bs"
import { Element, Link } from 'react-scroll';

const HomePage = () => {

    return (
        <Element name="Home">
            <div className='bg-dark text-white min-vh-100 section1'>
                <section className="container d-flex flex-column align-items-center justify-content-center text-center min-vh-100 mb-100 mt-5">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="display-4 fw-bold mb-3 mt-5"
                    >
                        Hi,  I'm <span className="logoName" >Ahmad Abo Sara</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="lead text-secondary mb-4"
                    >
                        I craft responsive web applications where technologies meet creativity.
                        Building exceptional digital experiences with modern full stack
                        frameworks.
                    </motion.p>
                    {/* Buttons */}
                    <div className="d-flex gap-3 mb-5">
                        <Link to='Contact' smooth={true} duration={500}>
                            <button className="btn text-white px-4" style={{ background: "#BB86FC" }}>Contact Me</button>
                        </Link>

                        <Link to='Project' smooth={true} duration={500}>
                            <button className="btn text-white px-4" style={{ background: "#BB86FC" }} >View My Work</button>
                        </Link>

                    </div>
                    {/* Profile Image */}
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={image}
                        alt="profile"
                        className="rounded-circle border border-4 border-#BB86FC shadow mb-5"
                        style={{ width: "220px", height: "260px", objectFit: "cover" }}
                    />
                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="row text-center g-4"
                    >
                        <div className="col">
                            <FaHtml5 size={40} className="text-danger" />
                            <div>HTML</div>
                        </div>
                        <div className="col">
                            <FaCss3Alt size={40} className="text-primary" />
                            <div>CSS</div>
                        </div>
                        <div className="col">
                            <BsFillBootstrapFill size={40} className="text-info" />
                            <div>Bootstrap</div>
                        </div>
                        <div className="col">
                            <FaJsSquare size={40} className="text-warning" />
                            <div>JavaScript</div>
                        </div>
                        <div className="col">
                            <FaReact size={40} className="text-info" />
                            <div>React</div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </Element>
    );
}

export default HomePage;



