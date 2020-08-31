import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import RestClient from "../RestApi/RestClient";
import AppUrl from "../RestApi/AppUrl";

class DetailsProject extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    constructor({match}) {
        super();
        this.state={
            projectPassedId:match.params.projectID,
            projectPassedName:match.params.projectName,


        }
    }


    render() {
        return (
            <>
                <TopNavigation title="Projects"/>
                <PageTop pageTitle={this.state.projectPassedName}/>
                <ProjectDetails id={this.state.projectPassedId}/>
                <Footer/>


            </>
        );
    }
}

export default DetailsProject;
