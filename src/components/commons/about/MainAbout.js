import React from "react"

function MainAbout(){
    return(
        <div>
            <img src="/assets/carlOriginal.jpg"  height={"200px"} width={"200px"} />
            <span style={spanStyles}>Carl's Services are the penultimate provider of services. With years of experience, we are experts in providing all services that a customer will require during a life cycle of providing, providing equipment, and other types of provisions, making us a one-stop shop for all our customers' equipment needs.</span>
            <br /><br /><br />
        </div>
    )
}

const spanStyles={
    paddingLeft: "40px",
    paddingRight: "20px",
    position: "absolute",
    fontSize: "24px",
}

export default MainAbout