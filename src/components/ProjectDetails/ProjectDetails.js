import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="image" src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg"/>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Foll Bazar</h1>
                            <p className="serviceDes">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                            <ul>
                                <li className="serviceDes">Unlimited Dynamic Product Category</li>
                                <li className="serviceDes">Admin Can Add, Edit, Delete Product Dynamically</li>
                                <li className="serviceDes">Dynamic shipping point facilities</li>
                                <li className="serviceDes">Admin can send special offer for special user</li>
                                <li className="serviceDes">App force update system form server</li>
                                <li className="serviceDes">App can receive push notification anytime also after the app is closed.</li>
                                <li className="serviceDes">Admin can send free message in app inbox</li>
                            </ul>

                            <Button variant="outline-primary">More Info</Button>


                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ProjectDetails;
