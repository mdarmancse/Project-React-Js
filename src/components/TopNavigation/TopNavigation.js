import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import blackLogo from "../../asset/images/black.png";
import blueLogo from "../../asset/images/blue.png";
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navLogo:[blackLogo],
            navBG:"navBackground",
            navVarient:"dark",
            navBarItem:"navItem",
            title:props.title
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
                <title>{this.state.title}</title>
                <Navbar className={this.state.navBG} fixed="top" collapseOnSelect expand="lg"  variant={this.state.navVarient}>
                    <Navbar.Brand ><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navLogo}/> aRman</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link> <NavLink exact activeStyle={{color: "#0073e6"}} className={this.state.navBarItem} to="/">HOME </NavLink>  </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: "#0073e6"}} className={this.state.navBarItem} to="/services">SERVICES</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: "#0073e6"}} className={this.state.navBarItem} to="/courses">COURSES</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: "#0073e6"}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO </NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: "#0073e6"}} className={this.state.navBarItem} to="/contact">CONTACT </NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: "#0073e6"}} className={this.state.navBarItem} to="/about">ABOUT </NavLink>  </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </>
        );
    }
}

export default TopNavigation;
