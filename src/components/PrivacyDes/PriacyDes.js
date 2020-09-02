import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class PriacyDes extends Component {
    constructor() {
        super();
        this.state={
            data:'...',
            loading:true,
            error: false

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.information).then(result=>{
            if (result == null) {
                this.setState({error: true,loading:false})

            } else {
                this.setState({data:result[0]['privacy'],loading:false})
            }



        }).catch(error=>{
            this.setState({error:true,loading:false})
        })


    }
    render() {
        if(this.state.loading==true && this.state.error == false){

            return <Loading/>

        }else if (this.state.loading == false && this.state.error == false) {
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
        }else if (this.state.error == true) {
            return <Error/>
        }



    }
}

export default PriacyDes;
