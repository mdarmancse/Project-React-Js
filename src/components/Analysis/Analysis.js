import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";
class Analysis extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            techDes:'...',
            loading:true

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.chartData).then(result=>{
            this.setState({myData:result,loading:false})
        });

        RestClient.GetRequest(AppUrl.techDes).then(result=>{
            this.setState({techDes:result[0]['tech_des'],loading:false})
        })

    }

    render() {
       var blue= "rgba(0, 115, 230, 0.7)";
        if(this.state.loading==true){

            return <Loading/>

        }else {
            return (
                <>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle text-center">Technology Used</h1>
                        <Row>


                            <Col lg={6} sm={12} md={12}>
                                <p className="serviceDes text-justify">
                                    {ReactHtmlParser(this.state.techDes)}
                                </p>

                            </Col>
                            <Col lg={6} sm={12} md={12} style={{width:"100%",height:"300px"}}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.myData}>
                                        <XAxis dataKey="technology"/>
                                        <Tooltip/>
                                        <Bar dataKey="projects" fill={blue}>
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>


                            </Col>

                        </Row>

                    </Container>

                </>
            );
        }

    }
}

export default Analysis;
