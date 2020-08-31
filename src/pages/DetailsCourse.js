import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import PriacyDes from "../components/PrivacyDes/PriacyDes";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import RestClient from "../RestApi/RestClient";
import AppUrl from "../RestApi/AppUrl";

class DetailsCourse extends Component {
    constructor({match}) {
        super();
        this.state={
            MyCourseId:match.params.courseID,
            MyCourseName:match.params.courseName,
        }
    }
    componentDidMount() {
        window.scroll(0,0);




    }

    render() {

        return (
            <>
                <TopNavigation title="Course Details"/>
                <CourseDetails id={this.state.MyCourseId}/>
                <Footer/>

            </>
        );
    }
}

export default DetailsCourse;
