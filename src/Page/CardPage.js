
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardDetelis from '../Components/CardDetelis';
import food from "../images/food1.png";
import ecomjs from "../images/js.png";
import profile from "../images/profile.png";
import { Element } from 'react-scroll';

const projectsData = [

    {
        id: 1,
        title: "Food-Wibsite",
        description: ` Welcome to our restaurant, where delicious flavors meet a cozy atmosphere.
                    Explore our menu, discover our story, and enjoy a memorable dining experience.`,
        category: "Web",
        image: food,
        demo: "https://ahmad82-cell.github.io/project-2/",
        github: "https://github.com/Ahmad82-cell/project-2",
        tags: ["html", "css", "js"],
    },
    {
        id: 2,
        title: "E-Commerce Website",
        description: "A fully functional e-commerce website built with React and Node.js.",
        category: "Web",
        image: ecomjs,
        demo: "https://ahmad82-cell.github.io/Online-store/",
        github: "https://github.com/Ahmad82-cell/Online-store",
        tags: ["html", "css", "js"],
    },
    {
        id: 3,
        title: "Profile-Wibsite",
        description: `A personal website showcasing my projects, skills,and ideas.`,
        category: "Web",
        image: profile,
        demo: "https://github.com/Ahmad82-cell/profile",
        github: "https://Ahmad82-cell.github.io/profile",
        tags: ["html", "css", "react",],
    },
]
const CardDetelisjs = projectsData.map((item) => {
    return (
        <CardDetelis key={item.id} title={item.title} description={item.description} image={item.image} demo={item.demo} github={item.github} tags={item.tags} />
    )
})
const CardPage = () => {
    return (
        <Element name='Project'>
            <div className='section4'>
                <Container>
                    <Row className='mb-4 pt-5' style={{ display: "flex", justifyContent: "center",textAlign:"center" }}>
                        <Col lg="6" md="12" sm="12">
                            <h1 className='logoName2'><span style={{ color: "#BB86FC" }}>My </span>Project</h1>
                        </Col>
                    </Row>
                    <p className="text-center mb-4 text-light">
                        Here are some of my recent works, showcasing my skills in web
                        development and design.
                    </p>
                    <Row>
                        {CardDetelisjs}
                    </Row>
                </Container>
            </div>
        </Element>

    );
}

export default CardPage;



// 
