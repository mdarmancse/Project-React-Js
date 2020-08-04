import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import ContactSection from "../components/ContactSection/ContactSection";
import AllServices from "../components/AllServices/AllServices";

class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="Services"/>
                <PageTop pageTitle="Get my services"/>
               <AllServices/>
               <ContactSection/>
                <Footer/>

            </>
        );
    }
}

export default ServicesPage;
