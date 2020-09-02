import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class AllCourses extends Component {
    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseAll).then(result => {
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
        if (this.state.loading == true && this.state.error == false) {

            return <Loading/>

        } else if (this.state.loading == false && this.state.error == false) {
            const myList = this.state.myData;
            const myView = myList.map(myList => {
                return <Col lg={6} md={12} sm={12} className="p-2">
                    <Row className="p-3">
                        <Col lg={6} md={6} sm={12} className="p-2">
                            <img className="courseImg" src={myList.small_img}/>

                        </Col>

                        <Col lg={6} md={6} sm={12} className="p-2">

                            <h5 className="projectCardTitle text-justify">{myList.short_title}</h5>
                            <p className="projectCardDes text-justify">{myList.short_des}</p>
                            <Link className="courseDetails text-justify"
                                  to={"/courseDetails/" + myList.id}>Details</Link>


                        </Col>

                    </Row>


                </Col>
            });
            return (
                <>

                    <Container>
                        <h1 className="serviceMainTitle text-center">OUR COURSES</h1>
                        <Row className="courseCol">
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

export default AllCourses;
