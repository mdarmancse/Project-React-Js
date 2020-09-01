import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faCheckCircle, faEnvelope, faMapMarkedAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";

class Footer extends Component {
    constructor() {
        super();
        this.state={
            address:'...',
            email:'...',
            phone:'...',
            facebook:'...',
            youtube:'...',
            footer_credit:'...',
            loaderClass:'text-center',
            mainDiv:'d-none',

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.footer).then(result=>{
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                facebook:result[0]['facebook'],
                youtube:result[0]['youtube'],
                footer_credit:result[0]['footer_credit'],
                loaderClass:'d-none',
                mainDiv:'p-5 text-justify'
            })
        })

    }
    render() {
        return (
            <>
                <Container fluid={true} className="footer text-center">
                    <Row>
                        <Col lg={3} md={6} sm={6} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                          <a className="socialLink" target='_blank' href={'//'+this.state.facebook}> <FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                            <a target='_blank' href={'//'+this.state.youtube} className="socialLink">  <FontAwesomeIcon icon={faYoutube} /> Youtube</a>


                        </Col>

                        <Col lg={3} md={6} sm={6} className={this.state.loaderClass}>
                            <h1 className="serviceName">Address</h1>
                          <Loading/>

                        </Col>
                        <Col lg={3} md={6} sm={6} className={this.state.mainDiv}>
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDes"> <FontAwesomeIcon className="" icon={faMapMarkedAlt} /> {this.state.address}</p>
                            <p className="serviceDes">  <FontAwesomeIcon className="" icon={faEnvelope} /> {this.state.email}</p>
                            <p className="serviceDes">  <FontAwesomeIcon className="" icon={faPhone} /> {this.state.phone}</p>

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
