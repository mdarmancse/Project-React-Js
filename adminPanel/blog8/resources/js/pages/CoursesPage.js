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
import {toast} from "react-toastify";

class CoursesPage extends Component {
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
            courseTitle:'',
            courseShortDes:'',
            courseImage:'',
            courseLongTitle:'',
            courseLongDes:'',
            courseSkill:'',
            courseVideo:'',
            courseLecture:'',
            courseStudent:'',
            courseLink:'',

        }

        this.deleteData=this.deleteData.bind(this);
        this.imageFormat=this.imageFormat.bind(this);
        this.addNewModalOpen=this.addNewModalOpen.bind(this);
        this.addNewModalClose=this.addNewModalClose.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
        this.onDesChange=this.onDesChange.bind(this);
        this.onLongTitleChange=this.onLongTitleChange.bind(this);
        this.onLongDesChange=this.onLongDesChange.bind(this);
        this.onSkillChange=this.onSkillChange.bind(this);
        this.onLinkChange=this.onLinkChange.bind(this);
        this.onLectureChange=this.onLectureChange.bind(this);
        this.onStudentChange=this.onStudentChange.bind(this);
        this.onVideoChange=this.onVideoChange.bind(this);
        this.onImageChange=this.onImageChange.bind(this);
        this.addFormSubmit=this.addFormSubmit.bind(this);
    }

    onNameChange(event){
      //  let title=event.target.value;
        this.setState({courseTitle:event.target.value});

    }

    onDesChange(event){
        let des=event.target.value;
        this.setState({courseShortDes:des});

    }
    onLongTitleChange(event){
        let des=event.target.value;
        this.setState({courseLongTitle:des});

    }
    onLongDesChange(content, delta, source, editor){
        //  let feature=event.target.value;

        let htmlContent=  editor.getHTML();
        this.setState({courseLongDes:htmlContent});

    }
    onSkillChange(content, delta, source, editor){
        //  let feature=event.target.value;

        let htmlContentSkill=  editor.getHTML();
        this.setState({courseSkill:htmlContentSkill});

    }
    onLectureChange(event){
        //let title=event.target.value;
        this.setState({courseLecture:event.target.value});

    }
    onStudentChange(event){
       // let student=event.target.value;
        this.setState({courseStudent:event.target.value});

    }
    onVideoChange(event){
        let video=event.target.value;
        this.setState({courseVideo:video});

    }
    onLinkChange(event){
        let link=event.target.value;
        this.setState({courseLink:link});

    }
    onImageChange(event){
        let image=event.target.files[0];
        this.setState({courseImage:image});

    }


    componentDidMount() {
        Axios.get('/courseList').then((response)=>{
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

        let courseTitle=this.state.courseTitle;
        let courseShortDes=this.state.courseShortDes;
        let courseImage=this.state.courseImage;
        let courseLongTitle=this.state.courseLongTitle;
        let courseLongDes=this.state.courseLongDes;
        let courseSkill=this.state.courseSkill;
        let courseVideo=this.state.courseVideo;
        let courseLecture=this.state.courseLecture;
        let courseStudent=this.state.courseStudent;
        let courseLink=this.state.courseLink;


// alert(photo.name)
        let url="/courseAdd";

        let formData=new FormData();
        formData.append('short_title',courseTitle);
        formData.append('short_des',courseShortDes);
        formData.append('small_img',courseImage);
        formData.append('long_title',courseLongTitle);
        formData.append('long_des',courseLongDes);
        formData.append('skill_all',courseSkill);
        formData.append('video_url',courseVideo);
        formData.append('total_lecture',courseLecture);
        formData.append('total_student',courseStudent);
        formData.append('courses_link',courseLink);

        let config={
            headers:{'content-type':'multipart/form-data'}

        }

        Axios.post(url,formData,config).then((response)=> {

            if(response.data==1){
                toast.success(' Course added successfully!!', {
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
         //   alert(error);

        });





    }


    deleteData(){
        let confirmResult=confirm("Do you want to delete??");

        if (confirmResult==true){
            this.setState({deleteBtnText:"Deleteing..."})

            Axios.post('/courseDelete',{id:this.state.rowDataId}).then((response)=>{

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

                    //this.setState({deleteBtnText:"Delete Failed"})
                    setTimeout(function () {
                        this.setState({deleteBtnText:"Delete "})
                    }.bind(this),2000)

                }


            }).catch((error)=>{
                toast.error('Delete Fail!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                //this.setState({deleteBtnText:"Delete Failed"})
                setTimeout(function () {
                    this.setState({deleteBtnText:"Delete "})
                }.bind(this),2000)

            })
        }


    }

    imageFormat(cell,row){

        return(
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
                <Menu title="Courses">
                    <Container>
                        <Loading/>
                    </Container>
                </Menu>

            )


        }else if (this.state.isError==true){
            return(


                <Menu title="Courses">
                    <Container>
                        <Error/>
                    </Container>
                </Menu>

            )


        }else{
            const data=this.state.dataList;

            const columns=[

                {dataField:'id',text:'ID'},
                {dataField:'short_title',text:'Name'},
                {dataField:'short_des',text:'Description'},
                {dataField:'total_lecture',text:'Total Lecture'},
                {dataField:'total_student',text:'Total Student'},
                {dataField:'courses_link',text:'Link'},
                {dataField:'small_img',text:'Image',formatter:this.imageFormat},
            ];


            const selectRow={
                mode:'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataId:row['id']})
                }
            }

            return (
                <>
                    <Menu title="Courses">
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
                            <Modal.Title><h6>Add Course</h6></Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Form onSubmit={this.addFormSubmit}>
                                <Form.Group >
                                    <Form.Label>Course Title</Form.Label>
                                    <Form.Control onChange={this.onNameChange} type="text" placeholder="Project Title" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Short Description</Form.Label>
                                    <Form.Control onChange={this.onDesChange} type="text" placeholder="Description" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Long Title</Form.Label>
                                    <Form.Control onChange={this.onLongTitleChange} type="text" placeholder="Long Title" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Long Description</Form.Label>
                                    <ReactQuill onChange={this.onLongDesChange} className="h-100" theme="snow" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Total Lecture</Form.Label>
                                    <Form.Control onChange={this.onLectureChange} type="text" placeholder="Total Lecture" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Total Student</Form.Label>
                                    <Form.Control onChange={this.onStudentChange} type="text" placeholder="Total Student" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Skill</Form.Label>
                                    <ReactQuill onChange={this.onSkillChange} className="h-100" theme="snow" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Video Url</Form.Label>
                                    <Form.Control onChange={this.onVideoChange} type="text" placeholder="Video URL" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Course Link</Form.Label>
                                    <Form.Control onChange={this.onLinkChange} type="text" placeholder="Course Link" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control onChange={this.onImageChange} type="file" placeholder="" />
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

export default CoursesPage;
