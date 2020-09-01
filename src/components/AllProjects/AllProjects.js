import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";

class AllProjects extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.projectAll).then(result=>{

            this.setState({myData:result,loading:false});

        })
    }

    render() {
        if(this.state.loading==true){

            return <Loading/>

        }else {
            const myList=this.state.myData;
            const myView=myList.map(myList=> {
                return <Col lg={4} md={8} sm={12} className="p-2">
                    <Card className="projectCard">
                        <Card.Img variant="top" src={myList.img_one} />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                            <Card.Text className="projectCardDes">
                                {myList.short_des}
                            </Card.Text>
                            <Button variant="outline-primary"><Link className="link-style" to={'/projects/'+myList.id+'/'+myList.project_name}>Details</Link></Button>
                        </Card.Body>
                    </Card>

                </Col>

            });

            return (
                <>
                    <Container classname="text-center">
                        <h1 className="serviceMainTitle text-center">RECENT PROJECTS</h1>
                        <Row>
                            {myView}

                        </Row>

                    </Container>
                </>
            );
        }



    }
}

export default AllProjects;
