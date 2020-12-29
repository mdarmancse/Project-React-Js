import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ProjectsPage from "../pages/ProjectsPage";
import CoursesPage from "../pages/CoursesPage";
import ClientReviewPage from "../pages/ClientReviewPage";
import ContactPage from "../pages/ContactPage";

class AppRoute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/service' component={ServicesPage}/>
                    <Route exact path='/project' component={ProjectsPage}/>
                    <Route exact path='/course' component={CoursesPage}/>
                    <Route exact path='/review' component={ClientReviewPage}/>
                    <Route exact path='/contact' component={ContactPage}/>

                </Switch>

            </>
    )
        ;
    }
}

export default AppRoute;
