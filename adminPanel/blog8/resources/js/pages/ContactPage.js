import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Menu from "../components/Menu";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Axios from "axios";
import {Col, Container, Row} from "react-bootstrap";

class ContactPage extends Component {
    constructor(props) {
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,
            rowDataId:'',
            deleteBtnText:"Delete"

        }
        this.deleteData=this.deleteData.bind(this);
    }

    componentDidMount() {
        Axios.get('/contactList').then((response)=>{
            if (response.status==200){
                this.setState({dataList:response.data,isLoading:false,isError:false})
            }else{

                this.setState({isLoading:false,isError:true});

            }



        }).catch((error)=>{
            this.setState({isLoading:false,isError:true});
        })


    }

    deleteData(){
        let confirmResult=confirm("Do you want to delete??");

        if (confirmResult==true){
            this.setState({deleteBtnText:"Deleteing..."})

            Axios.post('/contactDelete',{id:this.state.rowDataId}).then((response)=>{

                if(response.data=1 && response.status==200){

                    this.setState({deleteBtnText:"Delete Success"})
                    this.componentDidMount();
                    setTimeout(function () {
                        this.setState({deleteBtnText:"Delete "})
                    }.bind(this),2000)
                }else{

                    this.setState({deleteBtnText:"Delete Failed"})
                    setTimeout(function () {
                        this.setState({deleteBtnText:"Delete "})
                    }.bind(this),2000)

                }


            }).catch((error)=>{
                this.setState({deleteBtnText:"Delete Failed"})
                setTimeout(function () {
                    this.setState({deleteBtnText:"Delete "})
                }.bind(this),2000)

            })
        }


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

            const columns=[

                {dataField:'id',text:'ID'},
                {dataField:'name',text:'Name'},
                {dataField:'email',text:'Email'},
                {dataField:'message',text:'Message'},
            ];


            const selectRow={
                mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataId:row['id']})
                }
            }

            return (
                <>
                    <Menu title="Contact">
                        <Container>


                            <Row>
                                <Col lg={12} md={12} sm={6}>
                                    <button onClick={this.deleteData} className='normal-btn my-2 btn'>{this.state.deleteBtnText}</button>
                                    <BootstrapTable
                                        keyField='id'
                                        data={ data }
                                        columns={ columns }
                                        selectRow={selectRow}
                                        pagination={ paginationFactory() } />
                                </Col>
                            </Row>








                        </Container>


                    </Menu>

                </>
            );
        }






    }
}

export default ContactPage;
