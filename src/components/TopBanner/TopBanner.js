import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../asset/css/custom.css';
import axios from 'axios';
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class TopBanner extends Component {


    constructor() {
        super();

        this.state={
            title:'',
            subtitle:'',
                loaderClass:'text-center',
                mainDiv:'d-none',
                error:'text-center'

        }
    }

    componentDidMount() {

      RestClient.GetRequest(AppUrl.homeTop).then(result=>{
          if(result==null){
              this.setState({ error:'text-center',loaderClass:'d-none'})
          }else {
              this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle'],loaderClass:'d-none',mainDiv:'text-center',  error:'d-none'});
          }



      }).catch(error=>{
          this.setState({ error:'text-center',loaderClass:'d-none'})
      })
    }

    render() {
        return (
            <>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className={this.state.error}>
                                    <Error/>
                                </Col>
                                <Col className={this.state.loaderClass}>
                                    <Loading/>
                                </Col>

                                <Col className={this.state.mainDiv}>
                                    <h1 className='topTitle'>{this.state.title}</h1>
                                    <h4 className="topSubtitle">{this.state.subtitle}</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>

                        </Container>

                    </div>

                </Container>

            </>
        );
    }
}

export default TopBanner;
