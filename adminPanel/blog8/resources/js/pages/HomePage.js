import React, {Component} from 'react';
import Menu from "../components/Menu";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

class HomePage extends Component {

    constructor(props) {
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,

        }

    }

    componentDidMount() {
        Axios.get('/countSummary').then((response)=>{
            if (response.status==200){
                this.setState({dataList:response.data,isLoading:false,isError:false})
            }else{

                this.setState({isLoading:false,isError:true});

            }



        }).catch((error)=>{
            this.setState({isLoading:false,isError:true});
        })


    }
    render() {


        if (this.state.isLoading==true){
            return(
                <Menu title="Contact">
                    <Container>
                        <Loading/>
                    </Container>
                </Menu>

            )


        }else if (this.state.isError==true){
            return(


                <Menu title="Contact">
                    <Container>
                        <Error/>
                    </Container>
                </Menu>

            )


        }else{

            const data=this.state.dataList;
            return (
                <>
                    <Menu title="Home">

                        <Container>
                            <Row>
                                <Col className="p-2" md={3} lg={3} sm={1}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data.project}</h5>
                                            <h5 className="des-text">Total Projects</h5>

                                        </Card.Body>


                                    </Card>


                                </Col>
                                <Col md={3} lg={3} sm={1}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data.course}</h5>
                                            <h5 className="des-text">Total Courses</h5>

                                        </Card.Body>


                                    </Card>


                                </Col>
                                <Col md={3} lg={3} sm={1}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data.service}</h5>
                                            <h5 className="des-text">Total Services</h5>

                                        </Card.Body>


                                    </Card>


                                </Col>
                                <Col md={3} lg={3} sm={1}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data.review}</h5>
                                            <h5 className="des-text">Total Reviews</h5>

                                        </Card.Body>


                                    </Card>


                                </Col>
                                <Col md={3} lg={3} sm={1}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data.contact}</h5>
                                            <h5 className="des-text">Total Contacts</h5>

                                        </Card.Body>


                                    </Card>


                                </Col>


                            </Row>




                        </Container>


                    </Menu>

                </>
            );

        }


    }
}

export default HomePage;
