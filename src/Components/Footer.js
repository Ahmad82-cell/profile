import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FotterPage = () => {
    return (
        <div className='Footer'>
            <Container>
                <Row style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Col sm="6">
                        <div className='footerdata' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                © 2025Ahmad Abo Sara .All rights reserved .
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default FotterPage;
