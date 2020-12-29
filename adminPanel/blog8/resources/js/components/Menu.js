import React, {Component} from 'react';
import {Navbar,NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Menu extends Component {

    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sideNavClose",
            mainDivOverlay:"main_overlay_close"


        }
        this.showHideSideNav=this.showHideSideNav.bind(this);
    }
    showHideSideNav(){

            if(this.state.sideNav===false){

                this.setState({sideNav:true,sideNavClass:"sideNavOpen",mainDivOverlay:"main_overlay_open"})


            }else{

                this.setState({sideNav:false,sideNavClass:"sideNavClose",mainDivOverlay:"main_overlay_close"})
            }

    }
    render() {
        return (
            <>
                <Navbar expand='lg' className="fixed-top" varient='light' bg='light'>
                    <Navbar.Brand onClick={this.showHideSideNav}><FontAwesomeIcon icon={faBars}/></Navbar.Brand>
                </Navbar>

                    <div className={this.state.sideNavClass}>
                        <NavLink><Link className="my-0 p-2 text-white" to="/"><FontAwesomeIcon icon={faHome}/>Home </Link></NavLink>
                        <NavLink><Link className="my-0 p-2 text-white" to="/service"><FontAwesomeIcon icon={faHome}/>Services </Link></NavLink>
                         <NavLink><Link className="my-0 p-2 text-white" to="/course"><FontAwesomeIcon icon={faHome}/>Courses </Link></NavLink>
                         <NavLink><Link className="my-0 p-2 text-white" to="/project"><FontAwesomeIcon icon={faHome}/>Projects </Link></NavLink>
                         <NavLink><Link className="my-0 p-2 text-white" to="/review"><FontAwesomeIcon icon={faHome}/>Client Review </Link></NavLink>
                        <NavLink> <Link className="my-0 p-2 text-white" to="/contact"><FontAwesomeIcon icon={faHome}/>Contact </Link></NavLink>


                    </div>

                    <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>


                    </div>
                    <div className="mt-5">

                        {this.props.children}

                    </div>


            </>
        );
    }
}

export default Menu;
