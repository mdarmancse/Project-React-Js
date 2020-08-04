import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {BigPlayButton, Player} from "video-react";

class CourseDetails extends Component {
    render() {
        return (
            <>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topContentPage">
                            <Row>
                                <Col lg={6}  md={6} sm={12}>
                                    <h1 className="courseDetailsName">Web Development Full Online Course</h1>
                                    <p className="courseDetailsDes">Total Lecture=100</p>
                                    <p className="courseDetailsDes">Total Student=100</p>


                                </Col>
                                <Col lg={6}  md={6} sm={12}>
                                    <p className="courseDetailsDes">I build native and cross platfrom mobile app for your business app for your business. I build native and cross platfrom mobile app for your business app for your business</p>
                                </Col>


                            </Row>


                        </Container>

                    </div>

                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName mb-3">Skill You Get</h1>
                            <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Web Development Skill</p>
                            <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Web Development Skill</p>
                            <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Web Development Skill</p>
                            <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Web Development Skill</p>
                            <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Web Development Skill</p>
                            <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Web Development Skill</p>
                            <Button variant="outline-primary">More Info</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="mb-3">
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center"/>
                            </Player>
                        </Col>
                    </Row>


                </Container>

            </>
        );
    }
}

export default CourseDetails;
