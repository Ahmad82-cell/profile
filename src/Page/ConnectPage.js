import React from 'react';
import ConnectCard from "../Components/ConnectCard";
import { Row, Col, Container } from 'react-bootstrap';
import WhatsApp from "../images/WhatsApp.png"
import fecebook from "../images/fecebook.png"
import email from "../images/email.png"
import instgram from "../images/instgram.png"
import Telegram from "../images/Telegram.png"
import { Element } from 'react-scroll';
const ConnectPage = () => {
    return (
        <Element name="Contact">
            <div className='section5'>
                <Container>
                    <Row><Col sm="12"><h1 className='connectName'>Connect With Me</h1></Col></Row>
                    <Row><Col sm="12"><p className='pargtext_connect'>Let's collaborate and create something amazing together!</p></Col></Row>
                    <Row>
                        <ConnectCard name={"Facebook"} image={fecebook} socil={"https://www.facebook.com/share/1J3tXzVHp5/"}
                            baseStyle={{ color: "#fff", }}
                            hoverStyle={{ backgroundColor: "#fff", boxShadow: " 0px  5px 11px 11px #3a5897", color: "#3a5897" }}
                        />
                        <ConnectCard name={"WhatsApp"} image={WhatsApp} socil={" https://wa.me/qr/7XX5TKCUXJUTA1"}
                            baseStyle={{ color: "#fff" }}
                            hoverStyle={{ backgroundColor: "#FFF", boxShadow: " 0px  5px 11px 11px #09c412ff", color: "#09c412ff" }}
                        />
                        <ConnectCard name={"instgram"} image={instgram} socil={"https://www.instagram.com/ahmadsh750?igsh=d3d1NXFhdGZ5aWZu"}
                            baseStyle={{ color: "#fff" }}
                            hoverStyle={{ backgroundColor: "#FFF", boxShadow: " 0px  5px 11px 11px #f70268", color: "#f70268" }}
                        />
                        <ConnectCard name={"Telegram"} image={Telegram} socil={"https://t.me/@Ahmad_Abo_Sara"}
                            baseStyle={{ color: "#fff" }}
                            hoverStyle={{ backgroundColor: "#FFF", boxShadow: " 0px  5px 11px 11px #31b1e8", color: "#31b1e8" }}
                        />
                        <ConnectCard name={"Email.com"} image={email} socil={"AhmadSara9600@gmail.com"}
                            baseStyle={{ color: "#fff" }}
                            hoverStyle={{ backgroundColor: "#FFF", boxShadow: " 0px  5px 11px 11px #f23a3aff", color: "#f23a3aff " }}
                        />
                    </Row>
                </Container>
            </div>
        </Element>

    );
}

export default ConnectPage;
