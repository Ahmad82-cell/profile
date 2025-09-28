import { Col, Row } from "react-bootstrap";
import SkillCircle from "./../Components/SkillCircle";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaCode } from "react-icons/fa";
import { Element } from "react-scroll";

export default function SkillsPage() {
    return (
        <Element name="Skills">
            <section className="container py-5">
                <Row className='mb-4 pt-5' style={{ display: "flex", justifyContent: "center" }}>
                    <Col lg="6" md="12" sm="12">
                        <h1 className='logoName2'><span style={{ color: "#BB86FC" }}>My </span>Skills</h1>
                    </Col>
                </Row>
                <div className="row g-4">
                    <div className="col-6 col-md-4">
                        <SkillCircle
                            name="HTML5"
                            percent={95}
                            color="#ff6b6b"
                            sub="Markup & semantics"
                            icon={<FaHtml5 style={{ color: "#ff6b6b" }} />}
                        />
                    </div>
                    <div className="col-6 col-md-4">
                        <SkillCircle
                            name="CSS3"
                            percent={90}
                            color="#3b82f6"
                            sub="Responsive & animations"
                            icon={<FaCss3Alt style={{ color: "#3b82f6" }} />}
                        />
                    </div>
                    <div className="col-6 col-md-4">
                        <SkillCircle
                            name="JavaScript"
                            percent={75}
                            color="#f7df1e"
                            sub="ES6+, DOM, async"
                            icon={<FaJs style={{ color: "#f7df1e" }} />}
                        />
                    </div>
                    <div className="col-6 col-md-4">
                        <SkillCircle
                            name="React"
                            percent={82}
                            color="#61dbfb"
                            sub="Components & hooks"
                            icon={<FaReact style={{ color: "#61dbfb" }} />}
                        />
                    </div>
                    <div className="col-6 col-md-4">
                        <SkillCircle
                            name="Bootstrap"
                            percent={85}
                            color="#7b5cff"
                            sub="Rapid prototyping"
                            icon={<FaBootstrap style={{ color: "#7b5cff" }} />}
                        />
                    </div>
                    <div className="col-6 col-md-4">
                        <SkillCircle
                            name="C++"
                            percent={65}
                            color="#9aa0a6"
                            sub="Algorithms & data structures"
                            icon={<FaCode style={{ color: "#9aa0a6" }} />}
                        />
                    </div>
                </div>
            </section>
        </Element>

    );
}