import React from "react";
import { Col } from 'react-bootstrap';
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaCss3Alt, FaExternalLinkAlt, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
const CardDetelis = ({ title, description, image, demo, github, tags }) => {

    const openGitHub = () => {
        window.open(github, "_blank");
    }

    const openLive = () => {
        window.open(demo, "_blank");
    }

    const icons = {
        html:  <FaHtml5 size={40} className="text-danger" />,
        css:  <FaCss3Alt size={40} className="text-primary" />,
        js:  <FaJsSquare size={40} className="text-warning" />,
        react: <FaReact size={40} className="text-info" />,
    Bootstrap:<BsFillBootstrapFill size={40} className="text-info" />,
    };

    return (
        <Col xs="12" md="12" lg="12" className="my-1 ">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card_project bg-dark">
                    <img alt="" src={image} className="card_image" />
                    <div className="cardText">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="languagesAll">
                            {tags.map((t) => (
                                <span
                                    key={t}
                                    className="languages_used"
                                    title={t.toUpperCase()}
                                >
                                    {icons[t]}
                                </span>
                            ))}
                            
                        </div>
                        <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                            <button className="btn text-white px-4" style={{ background: "#BB86FC" }} onClick={openLive}>
                                <FaExternalLinkAlt className="me-2" /> Live Drem
                            </button>
                            <button className="btn text-white px-4" onClick={openGitHub} style={{ background: "#BB86FC" }}> <FaGithub className="me-2" />
                                Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Col>
    );
}

export default CardDetelis;
