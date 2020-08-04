import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";

import Footer from "../components/Footer/Footer";
import AllProjects from "../components/AllProjects/AllProjects";

class ProjectsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="Portfolio"/>
                <PageTop pageTitle="Portfolio"/>
                <AllProjects/>
                <Footer/>

            </>
        );
    }
}

export default ProjectsPage;
