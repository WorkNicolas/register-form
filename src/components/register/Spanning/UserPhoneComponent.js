import React from "react"
import Input from "./Input"

class UserPhoneComponent extends React.Component{
    render(){
        return(
            <div style={innerStyles}>
                <Input asset={{
                    id: "3",
                    ph: "   Username",
                    icon: "/assets/name-icon.png",
                    ty: "text",
                    hasImage: true
                }}/>
                <Input asset={{
                    id: "4",
                    ph: "   Phone Number",
                    icon: "/assets/phone-icon.png",
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

export default UserPhoneComponent