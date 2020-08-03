import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import blackLogo from "../../asset/images/black.png";
import blueLogo from "../../asset/images/blue.png";

class TopNavigation extends Component {

    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            navLogo:[blackLogo],
            navBG:"navBackground",
            navVarient:"dark",
            navBarItem:"navItem"
        }
    }

    onScroll=()=>{
      if(window.scrollY>100){
            this.setState({ navVarient:"light",navBarTitle:"navTitleScroll",navLogo:[blueLogo],navBG:"navBackgroundScroll",navBarItem:"navItemScroll"})
      }
      else if(window.scrollX<100){
          this.setState({navVarient:"dark",navBarTitle:"navTitle",navLogo:[blackLogo],navBG:"navBackground",navBarItem:"navItem"})

      }
    };

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <>
                <Navbar className={this.state.navBG} fixed="top" collapseOnSelect expand="lg"  variant={this.state.navVarient}>
                    <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navLogo}/> aRman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">
                            <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </>
        );
    }
}

export default TopNavigation;
