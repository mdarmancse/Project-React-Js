import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkedAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";

class ContactSection extends Component {
    constructor() {
        super();
        this.state={
            address:'...',
            email:'...',
            phone:'...',
            loading:true



        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.footer).then(result=>{
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                loading:false

            })
        })

    }

    sendMessage(){
        let name=document.getElementById('name').value;
        let email=document.getElementById('email').value;
        let message=document.getElementById('message').value;


        let jsonObject={name:name,email:email,message:message};

    RestClient.PostRequest(AppUrl.contactSend,JSON.stringify(jsonObject)).then(result=>{
        alert(result) ;
    }).catch(error=>{
        alert('Error');
    })


    }
    render() {

        if(this.state.loading==true){

            return <Loading/>

        }else {

            return (
                <>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Quick Connect</h1>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="serviceDes">Name</Form.Label>
                                        <Form.Control id="name" type="text" placeholder="Enter your name" />

                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDes">Email</Form.Label>
                                        <Form.Control id="email" type="email" placeholder="Enter your email" />

                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDes">Message</Form.Label>
                                        <Form.Control id="message" as="textarea" rows="3" placeholder="Your message" />

                                    </Form.Group>
                                    <Button onClick={this.sendMessage} variant="primary">
                                        Send
                                    </Button>
                                </Form>

                            </Col>

                            <Col lg={6} md={6} sm={12} className="text-justify">

                                <h1 className="serviceName">Discuss Now</h1>
                                <p className="serviceDes"> <FontAwesomeIcon className="" icon={faMapMarkedAlt} /> {this.state.address}</p>
                                <p className="serviceDes">  <FontAwesomeIcon className="" icon={faEnvelope} /> {this.state.email}</p>
                                <p className="serviceDes">  <FontAwesomeIcon className="" icon={faPhone} /> {this.state.phone}</p>

                            </Col>
                        </Row>
                    </Container>


                </>
            );

        }

    }
}

export default ContactSection;
