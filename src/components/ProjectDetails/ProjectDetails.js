import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class ProjectDetails extends Component {
    constructor(props) {
        super();
        this.state={
            myProjectID:props.id,
            img_two:'',
            project_name:'',
            short_des:'',
            project_feature:'',
            live_preview:'',
            loading:true,
            error: false

        }
    }
    componentDidMount(){

        RestClient.GetRequest(AppUrl.projectDetails+this.state.myProjectID).then(result=>{

            if (result == null) {
                this.setState({error: true,loading:false})

            }else{
                this.setState({
                    img_two:result[0]['img_two'],
                    project_name:result[0]['project_name'],
                    short_des:result[0]['short_des'],
                    project_feature:result[0]['project_feature'],
                    live_preview:result[0]['live_preview'],
                    loading:false
                })
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
                            <Col lg={6} md={6} sm={12}>
                                <img className="image" src={this.state.img_two}/>

                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">{this.state.project_name}</h1>
                                <p className="serviceDes">{this.state.short_des}
                                    {ReactHtmlParser(this.state.project_feature)}</p>

                                <Button target='-_blank' href={'//'+this.state.live_preview} variant="outline-primary">More Info</Button>


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

export default ProjectDetails;
