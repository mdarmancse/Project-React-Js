import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Menu from "../components/Menu";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Axios from "axios";
import {Col, Container, img, Row,Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {toast} from "react-toastify";

class ClientReviewPage extends Component {
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

    componentDidMount() {
        Axios.get('/reviewList').then((response)=>{
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

            Axios.post('/reviewDelete',{id:this.state.rowDataId}).then((response)=>{

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

    imageFormat(cell,row){

        return(
            <img className="w-25" src={cell}/>
        )

    }

    addNewModalOpen(){

        this.setState({AddNewModal:true});


    }

    addNewModalClose(){
        this.setState({AddNewModal:false});

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

    addFormSubmit(event){
        event.preventDefault();

        let title=this.state.addTitle;
        let des=this.state.addDes;
        let photo=this.state.addFile;


// alert(photo.name)
        let url="/reviewAdd";

        let formData=new FormData();
        formData.append('title',title);
        formData.append('des',des);
        formData.append('photo',photo);

        let config={
            headers:{'content-type':'multipart/form-data'}

        }

        Axios.post(url,formData,config).then((response)=> {

          if(response.data==1){
              toast.success('Review added Successfully!!', {
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






    render() {

        if (this.state.isLoading==true){
            return(
                <Menu>
                    <Container>
                        <Loading/>
                    </Container>
                </Menu>

            )


        }else if (this.state.isError==true){
            return(


                <Menu>
                    <Container>
                        <Error/>
                    </Container>
                </Menu>

            )


        }else{
            const data=this.state.dataList;

            const columns=[

                {dataField:'id',text:'ID'},
                {dataField:'client_img',text:'Image',formatter:this.imageFormat},
                {dataField:'client_title',text:'Name'},
                {dataField:'cliet_des',text:'Review'},
            ];


            const selectRow={
                mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataId:row['id']})
                }
            }

            return (
                <>

                    <Menu title="Review">
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
                            <Modal.Title><h6>Add Review</h6></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.addFormSubmit}>
                                <Form.Group >
                                    <Form.Label>Review Title</Form.Label>
                                    <Form.Control onChange={this.titleOnChange} type="text" placeholder="Review Title" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Review Description</Form.Label>
                                    <Form.Control onChange={this.desOnChange} type="text" placeholder="Description" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Client Photo</Form.Label>
                                    <Form.Control onChange={this.fileOnChange} type="file" placeholder="Client Photo" />
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

export default ClientReviewPage;
