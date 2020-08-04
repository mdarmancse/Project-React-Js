import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";

import Footer from "../components/Footer/Footer";

import PriacyDes from "../components/PrivacyDes/PriacyDes";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="Privacy"/>
                <PageTop pageTitle="Privacy"/>
                <PriacyDes/>
                <Footer/>
            </>
        );
    }
}

export default PrivacyPage;
