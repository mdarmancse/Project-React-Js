import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed: 2000,
            dots: true,
            infinite: true,
            speed: 2000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <Container>
                    <h1 className="serviceMainTitle text-center">CLIENT REVIEW</h1>
                    <Slider {...settings}>
                        <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} sm={6} md={6}>
                                <img className="circleImg" src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-1/p720x720/76651479_531770727610413_5448752230767263744_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=ir8ZD-0EQjEAX-Fvsts&_nc_ht=scontent.fcgp3-1.fna&_nc_tp=6&oh=d4d01beb290551af5a0aceb2f09ab247&oe=5F4BBE7E"/>
                                <h1 className="serviceName">Web development</h1>
                                <p className="serviceDes">You design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>

                            </Col>

                        </Row>
                    </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} sm={6} md={6}>
                                    <img className="circleImg" src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-1/p720x720/76651479_531770727610413_5448752230767263744_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=ir8ZD-0EQjEAX-Fvsts&_nc_ht=scontent.fcgp3-1.fna&_nc_tp=6&oh=d4d01beb290551af5a0aceb2f09ab247&oe=5F4BBE7E"/>
                                    <h1 className="serviceName">Web development</h1>
                                    <p className="serviceDes">You design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>

                                </Col>

                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} sm={6} md={6}>
                                    <img className="circleImg" src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-1/p720x720/76651479_531770727610413_5448752230767263744_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=ir8ZD-0EQjEAX-Fvsts&_nc_ht=scontent.fcgp3-1.fna&_nc_tp=6&oh=d4d01beb290551af5a0aceb2f09ab247&oe=5F4BBE7E"/>
                                    <h1 className="serviceName">Web development</h1>
                                    <p className="serviceDes">You design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>

                                </Col>

                            </Row>
                        </div>


                    </Slider>

                </Container>


            </>
        );
    }
}

export default ClientReview;
