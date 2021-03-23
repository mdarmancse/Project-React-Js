import React, {Component} from 'react';
import {Navbar,NavLink,title} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBookOpen, faCode, faFolder, faHome, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {faComment, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Menu extends Component {

    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sideNavClose",
            mainDivOverlay:"main_overlay_close",
            navText:"d-none",
            adminTitle:"text-title",


        }
        this.showHideSideNav=this.showHideSideNav.bind(this);
    }
    showHideSideNav(){

            if(this.state.sideNav===false){

                this.setState({sideNav:true,navText:'',sideNavClass:"sideNavOpen",mainDivOverlay:"main_overlay_open"})


            }else{

                this.setState({sideNav:false,navText:'d-none',sideNavClass:"sideNavClose",mainDivOverlay:"main_overlay_close"})
            }

    }
    render() {
        return (
            <>
                <title>{this.props.title}</title>
                <Navbar expand='lg' className="fixed-top" varient='light' bg='light'>
                    <Navbar.Brand onClick={this.showHideSideNav}><FontAwesomeIcon icon={faBars}/><span className={this.state.adminTitle}>Admin Dashboard</span></Navbar.Brand>
                </Navbar>

                    <div className={this.state.sideNavClass}>
                        <NavLink><Link className="my-0 p-2 text-white" to="/"><FontAwesomeIcon icon={faHome}/><span className={this.state.navText}>Home</span> </Link></NavLink>
                        <NavLink><Link className="my-0 p-2 text-white" to="/service"><FontAwesomeIcon icon={faEnvelope}/><span className={this.state.navText}>Services</span> </Link></NavLink>
                         <NavLink><Link className="my-0 p-2 text-white" to="/course"><FontAwesomeIcon icon={faBookOpen}/><span className={this.state.navText}>Courses</span> </Link></NavLink>
                         <NavLink><Link className="my-0 p-2 text-white" to="/project"><FontAwesomeIcon icon={faCode}/><span className={this.state.navText}>Projects</span> </Link></NavLink>
                        <NavLink><Link className="my-0 p-2 text-white" to="/review"><FontAwesomeIcon icon={faFolder}/><span className={this.state.navText}>Client Review </span></Link></NavLink>
                        <NavLink> <Link className="my-0 p-2 text-white" to="/contact"><FontAwesomeIcon icon={faComment}/><span className={this.state.navText}>Contact</span> </Link></NavLink>
                        <NavLink> <a className="my-0 p-2 text-white" href="/logout"><FontAwesomeIcon icon={faPowerOff}/><span className={this.state.navText}>Logout</span> </a></NavLink>


                    </div>

                    <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>


                    </div>
                    <div className="mainDiv mt-5">

                        {this.props.children}
                        <ToastContainer
                            position="bottom-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />

                    </div>


            </>
        );
    }
}

export default Menu;
