import React from "react";
import './style.css'
import ToggleBtn from "./ToggleBtn";

const Navbar = () =>{
    return(
        <div className="navbar-flex">
            <h1>Text Refiner Tool</h1>
            <div className="mode-flex">
                {/* <p className="dark-mode">DarkMode</p> */}
                <ToggleBtn/>
            </div>
        </div>
    )
}

export default Navbar