import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {BigPlayButton, Player} from "video-react";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class CourseDetails extends Component {


    constructor(props) {
        super(props);
        this.state={
            myCourseID:props.id,
          long_title:"",
        long_des:"",
        total_lecture:"",
        total_student:"",
        skill_all:"",
        video_url:"",
        short_des:"",
        moreInfo:"",
            loading:true

    }

    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseDetails+this.state.myCourseID).then(result=>{
            if (result == null) {
                this.setState({error: true,loading:false})

            }else {
                this.setState({
                    long_title:result[0]['long_title'],
                    long_des:result[0]['long_des'],
                    total_lecture:result[0]['total_lecture'],
                    total_student:result[0]['total_student'],
                    skill_all:result[0]['skill_all'],
                    short_des:result[0]['short_des'],
                    video_url:result[0]['video_url'],
                    moreInfo:result[0]['courses_link'],
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

        } else if (this.state.loading == false && this.state.error == false)  {
            return (
                <>
                    <Container fluid={true} className="topFixedPage p-0">
                        <div className="topPageOverlay">
                            <Container className="topContentPage">
                                <Row>
                                    <Col lg={6}  md={6} sm={12}>
                                        <h1 className="courseDetailsName">{this.state.long_title}</h1>
                                        <p className="courseDetailsDes">Total Lecture: {this.state.total_lecture}</p>
                                        <p className="courseDetailsDes">Total Student: {this.state.total_student}</p>


                                    </Col>
                                    <Col lg={6}  md={6} sm={12}>
                                        <p className="courseDetailsDes">{ReactHtmlParser(this.state.long_des)}</p>
                                    </Col>


                                </Row>


                            </Container>

                        </div>

                    </Container>

                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName mb-3">Skill You Get</h1>
                                {/*<p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} />{ReactHtmlParser(skill_all)}</p>*/}
                                <p className="cardSubtitle text-justify">{ReactHtmlParser(this.state.skill_all)}</p>

                                <Button target='_blank' href={'//'+this.state.moreInfo} variant="outline-primary">More Info</Button>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Player>
                                    <source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' />
                                    <BigPlayButton position="center"/>
                                </Player>
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

export default CourseDetails;
