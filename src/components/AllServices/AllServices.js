import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import graphics from "../../asset/images/graphics.svg";
import mobile from "../../asset/images/mobile.svg";
import web from "../../asset/images/web.svg";

class AllServices extends Component {
    render() {
        return (
            <>
                <Container className="mt-5">

                    <Row>


                        <Col lg={4} md={8} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphics}/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDes">I desing modern user interface and other graphical components for your business and instiution.</p>

                            </div>


                        </Col>
                        <Col lg={4} md={8} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobile}/>
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDes">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>

                        </Col>
                        <Col lg={4} md={8} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={web}/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDes">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>

                            </div>
                        </Col>

                    </Row>

                </Container>


            </>
        );
    }
}

export default AllServices;
