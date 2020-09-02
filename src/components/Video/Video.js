import React, {Component} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            video_des:'',
            video_url:'',
            loading:true,
            error: false
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.video).then(result=>{
            if (result == null) {
                this.setState({error: true,loading:false})

            }else{
                this.setState({
                    video_des:result[0]['video_des'],
                    video_url:result[0]['video_url'],
                    loading:false

                })
            }

        }).catch(error=>{
            this.setState({error:true,loading:false})
        })

    }

    modalClose=()=>this.setState({show:false});
    modalOpen=()=>this.setState({show:true});

    render() {
        if(this.state.loading==true  && this.state.error == false){

            return <Loading/>

        }else if (this.state.loading == false && this.state.error == false)  {
            return (
                <>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>

                                <div className="videoCard">

                                    <h5 className="videoTitle text-center">How I do</h5>
                                    <p className="videoDes text-justify">{this.state.video_des}</p>
                                    <p className="text-center"><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>

                                </div>
                            </Col>


                        </Row>


                    </Container>


                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                        <Modal.Body>
                            <Player>
                                <source src={this.state.video_url} />
                                <BigPlayButton position="center"/>
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-danger" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </>
            );
        }else if (this.state.error == true) {
            return <Error/>
        }


    }
}

export default Video;
