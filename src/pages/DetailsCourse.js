import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import PriacyDes from "../components/PrivacyDes/PriacyDes";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";

class DetailsCourse extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="Course Details"/>
                <CourseDetails/>
                <Footer/>

            </>
        );
    }
}

export default DetailsCourse;
