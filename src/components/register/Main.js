import React from "react"
import Input from "./Spanning/Input"
import SpanningInputs from "./SpanningInputs"

function Main() {
    
    return(
        <div style={styles}>
            <SpanningInputs />
            
        </div>
    )
}

const styles={
    display: "flex",
    backgroundColor: "yellow",
    height: "80vh",
    justifyContent: "center"
}

export default Main