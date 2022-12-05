import React from "react"

function Footer() {
    return(
        <div style={styles}>
            <p>Email: qcnvmendoza@tip.edu.ph</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p>User ID: qcnvmendoza</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p>Student Number: 2116456</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p>Phone Number: 09186069463</p> 
        </div>
    )
}

const styles={
    display: "flex",
    backgroundColor: "Black",
    height: "11vh",
    paddingLeft: "20px",
    color: "LightGray"
}

export default Footer