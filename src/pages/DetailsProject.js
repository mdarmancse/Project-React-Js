import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

class DetailsProject extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="Projects"/>
                <PageTop pageTitle="Projects"/>
                <ProjectDetails/>
                <Footer/>


            </>
        );
    }
}

export default DetailsProject;
