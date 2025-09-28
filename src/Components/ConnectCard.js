import React from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
const ConnectCard = ({ name, image, baseStyle, hoverStyle, socil }) => {
    const [isHovered, setIsHovered] = useState(false);
    return ( 
            <Col lg="4" md="3" sm="6" className='mb-4'>
                <a href={socil} style={{ textDecoration: "none" }}>
                    <div data-aos="fade-up">
                        <div className='Conn_card' style={isHovered ? { ...hoverStyle } : baseStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <div>
                                <div className='icon_image' style={isHovered ? { ...hoverStyle } : baseStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><img alt='' src={image} style={{ width: "50px", height: "50px", objectFit: "cover" }} /></div>
                                <h4>{name}</h4>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
    );
}

export default ConnectCard;

/*

*/