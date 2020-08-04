import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentsProjects from "../components/RecentsProjects/RecentsProjects";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";

class HomePages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="Home"/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentsProjects/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <Footer/>
            </>
        );
    }
}

export default HomePages;
