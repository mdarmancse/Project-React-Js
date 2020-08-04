import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";
import RefundDes from "../components/RefundDes/RefundDes";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNavigation title="Refund Policy"/>
                <PageTop pageTitle="Refund Policy"/>
                <RefundDes/>
                <Footer/>

            </>
        );
    }
}

export default RefundPage;
