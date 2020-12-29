import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Menu from "../components/Menu";
import Axios from "axios";
import {Col, Container, Row} from "react-bootstrap";

class ContactPage extends Component {
    constructor(props) {
        super();
        this.state={
            dataList:[]

        }
    }

    componentDidMount() {
        Axios.get('/contactList').then((response)=>{
            this.setState({dataList:response})
            console.log(response);

        }).catch((error)=>{

        })

    }


    render() {
        const data=this.state.dataList;



        const columns=[

            {dataField:'id',text:'ID'},
            {dataField:'name',text:'Name'},
            {dataField:'email',text:'Email'},
            {dataField:'message',text:'Message'},
        ];

        return (
            <>
                <Menu>
                    <Container>


                                <Row>
                                    <Col lg={12} md={12} sm={6}>
                                    <BootstrapTable keyField='id' data={ data } columns={ columns } pagination={ paginationFactory() } />
                                    </Col>
                                </Row>








                    </Container>


                </Menu>

            </>
        );
    }
}

export default ContactPage;
