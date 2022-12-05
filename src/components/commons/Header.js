import React from "react"
import { Navbar } from "./Navbar"

function Header(props) {
    return(
        <div style={styles}>
            <Navbar />
        </div>
    )
}

const styles={
    display: "flex",
    backgroundColor: "DodgerBlue",
    color: "white",
    height: "8vh",
    padding: "5px",
}

export default Header