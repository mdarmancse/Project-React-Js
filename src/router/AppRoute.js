import React, {Component} from 'react';
import { Router, Route, Switch } from "react-router";
import HomePages from "../pages/HomePages";
import ServicesPage from "../pages/ServicesPage";
import CoursesPage from "../pages/CoursesPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import About from "../pages/About";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import DetailsProject from "../pages/DetailsProject";
import DetailsCourse from "../pages/DetailsCourse";

class AppRoute extends Component {
    render() {
        return (
            <>
                <Switch>

                    <Route exact path='/' component={HomePages}/>
                    <Route exact path='/services' component={ServicesPage}/>
                    <Route exact path='/courses' component={CoursesPage}/>
                    <Route exact path='/portfolio' component={ProjectsPage}/>
                    <Route exact path='/contact' component={ContactPage}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/refund' component={RefundPage}/>
                    <Route exact path='/terms' component={TermsPage}/>
                    <Route exact path='/privacy' component={PrivacyPage}/>
                    <Route exact path='/projects' component={DetailsProject}/>
                    <Route exact path='/courseDetails' component={DetailsCourse}/>

                </Switch>

            </>
        );
    }
}

export default AppRoute;
