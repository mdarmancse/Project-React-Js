import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import graphics from "../../asset/images/graphics.svg";
import mobile from "../../asset/images/mobile.svg";
import web from "../../asset/images/web.svg";
import Services from "../Services/Services";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";

class AllServices extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.services).then(result=>{

            this.setState({myData:result});

        })
    }


    render() {

            const myList=this.state.myData;
            const myView=myList.map(myList=>{
                return <Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                        <img src={myList.service_logo}/>
                        <h2 className="serviceName">{myList.service_name}</h2>
                        <p className="serviceDes">{myList.service_des}</p>

                    </div>
                </Col>
            });

            return (
                <>
                    <Container className="mt-5">

                        <Row>

                            {myView}

                        </Row>

                    </Container>

                </>
            );

        }


}


export default AllServices;
