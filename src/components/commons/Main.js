import React from "react"
import MainHome from "./home/MainHome"
import MainAbout from "./about/MainAbout.js"
import MainServices from "./services/MainServices"

function Main(props) {
    
    return(
        <div style={styles}>
            <div style={fontStyles}>
                <h1>{props.mains}</h1>
                {props.isHome ? <MainHome /> : null}
                {props.isAbout ? <MainAbout /> : null}
                {props.isServices ? <MainServices /> : null}
            </div>
        </div>
    )
}

const styles={
    display: "flex",
    backgroundColor: "yellow",
    height: "80vh",
    justifyContent: "start",
}

const fontStyles={
    paddingLeft: "30px"
}

export default Main