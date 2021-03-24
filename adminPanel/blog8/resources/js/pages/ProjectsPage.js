import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Menu from "../components/Menu";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Axios from "axios";
import {Col, Container, Row, img, Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactQuill from "react-quill";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ProjectsPage extends Component {
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
            projectTitle:'',
            projectDes:'',
            projectImageOne:'',
            projectImageTwo:'',
            projectFeature:'',
            projectLink:'',

        }
        this.deleteData=this.deleteData.bind(this);
        this.imageFormat=this.imageFormat.bind(this);
        this.addNewModalOpen=this.addNewModalOpen.bind(this);
        this.addNewModalClose=this.addNewModalClose.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
        this.onDesChange=this.onDesChange.bind(this);
        this.onFeatureChange=this.onFeatureChange.bind(this);
        this.onLinkChange=this.onLinkChange.bind(this);
        this.onImageOneChange=this.onImageOneChange.bind(this);
        this.onImageTwoChange=this.onImageTwoChange.bind(this);
        this.addFormSubmit=this.addFormSubmit.bind(this);
    }

    onNameChange(event){
        let title=event.target.value;
        this.setState({projectTitle:event.target.value});

    }
    onDesChange(event){
        let des=event.target.value;
        this.setState({projectDes:des});

    }
    onFeatureChange(content, delta, source, editor){
      //  let feature=event.target.value;

      let htmlContent=  editor.getHTML();
        this.setState({projectFeature:htmlContent});

    }
    onLinkChange(event){
        let link=event.target.value;
        this.setState({projectLink:link});

    }
    onImageOneChange(event){
        let imageOne=event.target.files[0];
        this.setState({projectImageOne:imageOne});

    }
    onImageTwoChange(event){
        let imageTwo=event.target.files[0];
        this.setState({projectImageTwo:imageTwo});
    }





    componentDidMount() {

        Axios.get('/projectList').then((response)=>{
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

        let title=this.state.projectTitle;
        let des=this.state.projectDes;
        let feature=this.state.projectFeature;
        let link=this.state.projectLink;
        let imageOne=this.state.projectImageOne;
        let imageTwo=this.state.projectImageTwo;


// alert(photo.name)
        let url="/projectAdd";

        let formData=new FormData();
        formData.append('project_name',title);
        formData.append('short_des',des);
        formData.append('project_feature',feature);
        formData.append('live_preview',link);
        formData.append('img_one',imageOne);
        formData.append('img_two',imageTwo);

        let config={
            headers:{'content-type':'multipart/form-data'}

        }

        Axios.post(url,formData,config).then((response)=> {

            if(response.data==1){
                toast.success('Project added successfully!!', {
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
           // alert(error);

        });





    }

    deleteData(){
        let confirmResult=confirm("Do you want to delete??");

        if (confirmResult==true){
            this.setState({deleteBtnText:"Deleteing..."})

            Axios.post('/projectDelete',{id:this.state.rowDataId}).then((response)=>{

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
                    //this.setState({deleteBtnText:"Delete Success"})
                    this.componentDidMount();
                    setTimeout(function () {
                        this.setState({deleteBtnText:"Delete "})
                    }.bind(this),2000)
                }else{
                    toast.error('Delete Fail!', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                  //  this.setState({deleteBtnText:"Delete Failed"})
                    setTimeout(function () {
                        this.setState({deleteBtnText:"Delete "})
                    }.bind(this),2000)

                }


            }).catch((error)=>{
                toast.error('Something went wrong!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
              //  this.setState({deleteBtnText:"Delete Failed"})
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
                {dataField:'project_name',text:'Project Name'},
                {dataField:'short_des',text:'Description'},
               // {dataField:'project_feature',text:'Features'},
                {dataField:'img_one',text:'Project Image',formatter:this.imageFormat},
                {dataField:'img_two',text:'Feature Image',formatter:this.imageFormat},
            ];


            const selectRow={
                mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataId:row['id']})
                }
            }

            return (
                <>
                    <Menu>
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

                    <Modal size="lg"  scrollable={true} show={this.state.AddNewModal} onHide={this.addNewModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title><h6>Add Project</h6></Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Form onSubmit={this.addFormSubmit}>
                                <Form.Group >
                                    <Form.Label>Project Title</Form.Label>
                                    <Form.Control onChange={this.onNameChange} type="text" placeholder="Project Title" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Short Description</Form.Label>
                                    <Form.Control onChange={this.onDesChange} type="text" placeholder="Description" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Project Features</Form.Label>
                                    <ReactQuill onChange={this.onFeatureChange} className="h-100" theme="snow" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Project Link</Form.Label>
                                    <Form.Control onChange={this.onLinkChange} type="text" placeholder="Project Link" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Project Card Image</Form.Label>
                                    <Form.Control onChange={this.onImageOneChange} type="file" placeholder="Client Photo" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Project Feature Image</Form.Label>
                                    <Form.Control onChange={this.onImageTwoChange} type="file" placeholder="Client Photo" />
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

export default ProjectsPage;
