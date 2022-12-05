import React from "react"
import { Link } from "react-router-dom"

function SubmitComponent(props){
    return(
        <div style={btnStyles}>
            <Link to='home'><input style={buttonStyles} type="submit" value="Register"
                
            /></Link>
        </div>
    )
}

const btnStyles={
    paddingTop: "10px",
}

const buttonStyles={
    backgroundColor: "DodgerBlue",
    color: "White",
    height: "35px",
    width: "200px"
}

export default SubmitComponent