import React from "react"
import Input from "./Input"

class FullNameComponent extends React.Component{
    render(){
        return(
            <div style={innerStyles}>
                <Input asset={{
                    ph: "   First Name",
                    icon: "/assets/name-icon.png", 
                    ty: "text",
                    hasImage: true,
                }}/>
                <Input asset={{
                    ph: "   Last Name", 
                    icon: "/assets/name-icon.png", 
                    ty: "text",
                    hasImage: true
                }}/>
            </div>
        )
    }
}

const innerStyles={
    display: "flex",
    flexDirection: "row"
}

export default FullNameComponent