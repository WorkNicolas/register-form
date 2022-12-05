import React from "react"
import Input from "./Input"

class Password extends React.Component{
    
    render(){
        return(
            <div style={innerStyles}>
                <Input asset={{
                    ph: "   Password", 
                    icon: "/assets/password-icon.png", 
                    ty: "password",
                    hasImage: true
                }}/>
                <Input asset={{
                    ph: "   Confirm Password", 
                    icon: "/assets/password-icon.png", 
                    ty: "password",
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

export default Password