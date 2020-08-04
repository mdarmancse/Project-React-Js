import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faCheckCircle, faEnvelope, faMapMarkedAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                <Container fluid={true} className="footer text-center">
                    <Row>
                        <Col lg={3} md={6} sm={6} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                          <a className="socialLink" href="#"> <FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                            <a href="#" className="socialLink">  <FontAwesomeIcon icon={faYoutube} /> YouTube</a>


                        </Col>

                        <Col lg={3} md={6} sm={6} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDes"> <FontAwesomeIcon className="" icon={faMapMarkedAlt} /> West Dewannagar,Hathazari,Chattogram</p>
                            <p className="serviceDes">  <FontAwesomeIcon className="" icon={faEnvelope} /> amd55077@gmail.com</p>
                            <p className="serviceDes">  <FontAwesomeIcon className="" icon={faPhone} /> +8801787281564</p>


                        </Col>

                        <Col lg={3} md={6} sm={6} className="p-5 text-justify">
                            <h1 className="serviceName">Information</h1>
                            <Link className="footerLink" to="/about">About me</Link><br/>
                            <Link className="footerLink"  to="/contact">Contact me</Link>


                        </Col>

                        <Col lg={3} md={6} sm={6} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>

                            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/terms">Terms & Condition</Link><br/>
                            <Link className="footerLink" to="/privacy">Privacy Policy</Link>

                        </Col>

                    </Row>

                </Container>


                <Container fluid={true} className="text-center copyRightSection">

                    <a className="copyRightLink" href="#">Md Arman Ullah &copy; 2020-2021</a>

                </Container>

            </>
        );
    }
}

export default Footer;
