import React from "react"

function CheckboxComponent(props){
    return(
        <div style={{paddingLeft: "10px", fontSize: "12px"}}>
            <input type="checkbox"/><span>&nbsp;{props.name}</span>
        </div>
    )
}

export default CheckboxComponent