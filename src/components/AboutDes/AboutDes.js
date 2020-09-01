import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import {Link} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";

class AboutDes extends Component {

    constructor() {
        super();
        this.state={
            data:'...',
            loading:true

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.information).then(result=>{
            this.setState({data:result[0]['about'],loading:false})
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
                            <Col lg={12} md={12} sm={12} className="serviceDes">
                                {ReactHtmlParser(this.state.data)}

                            </Col>

                        </Row>


                    </Container>

                </>
            );
        }



    }
}

export default AboutDes;
