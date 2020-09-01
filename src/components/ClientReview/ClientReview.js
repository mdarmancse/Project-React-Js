import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";

class ClientReview extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.clientReview).then(result=>{

            this.setState({myData:result,loading:false});

        })
    }


    render() {

        if(this.state.loading==true){

            return <Loading/>

        }else {
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

            const myList=this.state.myData;
            const myView=myList.map(myList=>{
                return   <div>
                    <Row className="text-center justify-content-center">
                        <Col lg={6} sm={6} md={6}>
                            <img className="circleImg" src={myList.client_img}/>
                            <h1 className="serviceName">{myList.client_title}</h1>
                            <p className="serviceDes">{myList.cliet_des}</p>

                        </Col>

                    </Row>
                </div>

            });

            return (
                <>
                    <Container>
                        <h1 className="serviceMainTitle text-center">CLIENT REVIEW</h1>
                        <Slider {...settings}>
                            {myView}

                        </Slider>

                    </Container>


                </>
            );
        }



    }
}

export default ClientReview;
