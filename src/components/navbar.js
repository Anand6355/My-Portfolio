import React from "react";
import logo from "../logo.png"

// Font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar=()=>{
    return(
        
          <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">

                    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a className="nav-link " href="#">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">About Me</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">Project</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">Blog</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">Contacts</a>
                            </li>
                        
                        </ul>
            
                    </div>
                </div>
            </nav>
        
    )
}
export default Navbar;