import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <div>
            <nav style={navStyles}>
                <div style={styles}>
                    <Link to='home'><span style={styles}><b>Home</b></span></Link>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <Link to='about'><span style={styles}><b>About Us</b></span></Link>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <Link to='services'><span style={styles}><b>Services</b></span></Link>
                </div>
            </nav>
        </div>
    )
}

const navStyles={
    padding: "12px 32px",
}

const styles={
    color: "White",
    decoration: "none",
    fontSize: "24px",
    textDecoration: 'none'
}