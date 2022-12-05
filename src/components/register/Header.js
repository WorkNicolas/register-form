import React from "react"

function Header() {
    return(
        <div style={styles}>
            <p><b>Registration Form</b></p>
        </div>
    )
}

const styles={
    display: "flex",
    backgroundColor: "DodgerBlue",
    color: "white",
    height: "8vh",
    padding: "5px",
    justifyContent: "center"

}

export default Header