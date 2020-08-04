import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllServices from "../components/AllServices/AllServices";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import TermsDes from "../components/Terms & Condition/TermsDes";

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="Terms & Condition"/>
                <PageTop pageTitle="Terms & Condition"/>
                <TermsDes/>
                <Footer/>
            </>
        );
    }
}

export default TermsPage;
