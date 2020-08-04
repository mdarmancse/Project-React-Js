import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AboutDes from "../components/AboutDes/AboutDes";
import Footer from "../components/Footer/Footer";

class About extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="About"/>
                <PageTop pageTitle="About Me"/>
                <AboutDes/>
                <Footer/>

            </>
        );
    }
}

export default About;
