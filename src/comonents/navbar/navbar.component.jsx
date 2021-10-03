import React from "react";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";

import './navbar.styles.css'

const Navbar = ({history}) => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll" , ()=>{})
        }
    }, [])

    return (
        <div className={`nav ${show ? "nav_black" : null}`}>
            <img 
                className="nav_logo"
                src="https://th.bing.com/th/id/R.3483cbba02fe083b87330a99857f59ed?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0"
                alt="Netflix logo"
                onClick = {() => history.push('/')}
            />
            <img 
                className="nav_avator"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Avator logo"
                onClick = {() => history.push('/')}
            />
        </div>
    )
}

export default withRouter(Navbar)