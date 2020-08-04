import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkedAlt, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDes">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />

                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDes">Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />

                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDes">Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Your message" />

                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>

                        </Col>

                        <Col lg={6} md={6} sm={12} className="text-justify">

                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDes"> <FontAwesomeIcon className="" icon={faMapMarkedAlt} /> West Dewannagar,Hathazari,Chattogram</p>
                            <p className="serviceDes">  <FontAwesomeIcon className="" icon={faEnvelope} /> amd55077@gmail.com</p>
                            <p className="serviceDes">  <FontAwesomeIcon className="" icon={faPhone} /> +8801787281564</p>

                        </Col>
                    </Row>
                </Container>


            </>
        );
    }
}

export default ContactSection;
