import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import {Link} from "react-router-dom";

class AllCourses extends Component {
    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseAll).then(result=>{

            this.setState({myData:result})
        })
    }

    render() {
        const myList=this.state.myData;
        const myView=myList.map(myList=>{
            return    <Col lg={6} md={12} sm={12} className="p-2">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img className="courseImg" src={myList.small_img}/>

                    </Col>

                    <Col lg={6} md={6} sm={12}>

                        <h5 className="projectCardTitle text-justify">{myList.short_title}</h5>
                        <p className="projectCardDes text-justify">{myList.short_des}</p>
                        <Link className="courseDetails text-justify" to="/courseDetails">Details</Link>


                    </Col>

                </Row>


            </Col>
        })

        return (
            <>

                <Container>
                    <h1 className="serviceMainTitle text-center">OUR COURSES</h1>
                    <Row  className="courseCol"  >
                        {myView}
                    </Row>




                </Container>

            </>
        );
    }
}

export default AllCourses;
