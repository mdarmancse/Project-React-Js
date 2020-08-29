import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";

class RefundDes extends Component {
    constructor() {
        super();
        this.state={
            data:'...'

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.information).then(result=>{
            this.setState({data:result[0]['refund']})
        })

    }
    render() {

        return (
            <>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            {ReactHtmlParser(this.state.data)}

                        </Col>

                    </Row>


                </Container>

            </>
        );
    }
}

export default RefundDes;
