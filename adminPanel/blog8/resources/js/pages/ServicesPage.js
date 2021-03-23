import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Menu from "../components/Menu";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Axios from "axios";
import {Col, Container, Form, img, Row} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {toast} from "react-toastify";

class ServicesPage extends Component {
    constructor(props) {
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,
            rowDataId:'',
            deleteBtnText:"Delete",
            newBtnText:"Add New",
            AddNewModal:false,
            addTitle:'',
            addDes:'',
            addFile:'',

        }
        this.deleteData=this.deleteData.bind(this);
        this.imageFormat=this.imageFormat.bind(this);
        this.addNewModalOpen=this.addNewModalOpen.bind(this);
        this.addNewModalClose=this.addNewModalClose.bind(this);
        this.fileOnChange=this.fileOnChange.bind(this);
        this.titleOnChange=this.titleOnChange.bind(this);
        this.desOnChange=this.desOnChange.bind(this);
        this.addFormSubmit=this.addFormSubmit.bind(this);
    }

    //Form dATA pULL
    titleOnChange(event){

        let title=event.target.value;
        this.setState({addTitle:title});


    }

    desOnChange(event){

        let des=event.target.value;
        this.setState({addDes:des});

    }
    fileOnChange(event){
        let photo=event.target.files[0];
        this.setState({addFile:photo});

    }

    componentDidMount() {
        Axios.get('/serviceList').then((response)=>{
            if (response.status==200){
                this.setState({dataList:response.data,isLoading:false,isError:false})
            }else{

                this.setState({isLoading:false,isError:true});

            }



        }).catch((error)=>{
            this.setState({isLoading:false,isError:true});
        })


    }
    addFormSubmit(event){
        event.preventDefault();

        let title=this.state.addTitle;
        let des=this.state.addDes;
        let photo=this.state.addFile;

        let url="/serviceAdd";

        let formData=new FormData();
        formData.append('service_name',title);
        formData.append('service_des',des);
        formData.append('service_logo',photo);

        let config={
            headers:{'content-type':'multipart/form-data'}

        }

        Axios.post(url,formData,config).then((response)=> {

            if(response.data==1){
                toast.success('Service added successfully!!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                this.addNewModalClose();
                this.componentDidMount();

            }

        }).catch(function (error) {
            toast.error('Something went wrong!!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          //  alert(error);

        });





    }

    deleteData(){
        let confirmResult=confirm("Do you want to delete??");

        if (confirmResult==true){
            this.setState({deleteBtnText:"Deleteing..."})

            Axios.post('/serviceDelete',{id:this.state.rowDataId}).then((response)=>{

                if(response.data=1 && response.status==200){
                    toast.success('Delete Success!!', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                   // this.setState({deleteBtnText:"Delete Success"})
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


    imageFormat(cell,row) {

        return (
            <img className="w-75" src={cell}/>
        )
    }
    addNewModalOpen(){

        this.setState({AddNewModal:true});


    }

    addNewModalClose(){
        this.setState({AddNewModal:false});

    }





    render() {

        if (this.state.isLoading==true){
            return(
                <Menu title="Services">
                    <Container>
                        <Loading/>
                    </Container>
                </Menu>

            )


        }else if (this.state.isError==true){
            return(


                <Menu title="Services">
                    <Container>
                        <Error/>
                    </Container>
                </Menu>

            )


        }else{
            const data=this.state.dataList;

            const columns=[

                {dataField:'id',text:'ID'},
                {dataField:'service_name',text:'Service Name'},
                {dataField:'service_des',text:'Description'},
                {dataField:'service_logo',text:'Logo',formatter:this.imageFormat},
            ];


            const selectRow={
                mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataId:row['id']})
                }
            }

            return (
                <>
                    <Menu title="Services">
                        <Container>


                            <Row>
                                <Col lg={12} md={12} sm={6}>
                                    <button onClick={this.deleteData} className='normal-btn my-2 btn'>{this.state.deleteBtnText}</button>
                                    <button onClick={this.addNewModalOpen} className='normal-btn my-2 btn m-lg-2'>{this.state.newBtnText}</button>
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

                    <Modal show={this.state.AddNewModal} onHide={this.addNewModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title><h6>Add Service</h6></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.addFormSubmit}>
                                <Form.Group >
                                    <Form.Label>Service Title</Form.Label>
                                    <Form.Control onChange={this.titleOnChange} type="text" placeholder="Service Title" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Service Description</Form.Label>
                                    <Form.Control onChange={this.desOnChange} type="text" placeholder="Description" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Logo</Form.Label>
                                    <Form.Control onChange={this.fileOnChange} type="file" placeholder="Logo" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.addNewModalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </>
            );
        }






    }
}

export default ServicesPage;
