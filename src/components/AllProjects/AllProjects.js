import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class AllProjects extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error: false
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.projectAll).then(result=>{

            if (result == null) {
                this.setState({error: true,loading:false})

            } else {
                this.setState({myData: result, loading: false})
            }


        }).catch(error=>{
            this.setState({error:true,loading:false})
        })


    }

    render() {
        if(this.state.loading==true && this.state.error == false){

            return <Loading/>

        }else if (this.state.loading == false && this.state.error == false)  {
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
        } else if (this.state.error == true) {
            return <Error/>
        }



    }
}

export default AllProjects;
