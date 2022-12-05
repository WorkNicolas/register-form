import React from "react"
import Input from "./Input"

class AddressComponent extends React.Component{
    
    render(){
        return(
            <div style={innerStyles}>
                <Input asset={{
                    id: "7",
                    ph: "     Home Address", 
                    icon: "/assets/address-icon.png", 
                    ty: "textarea",
                    hasImage: true
                }}/>
                <Input asset={{
                    id: "8",
                    ph: "     Office Address", 
                    icon: "/assets/address-icon.png", 
                    ty: "textarea",
                    hasImage: true
                }}/>
            </div>
        )
    }
}

const innerStyles={
    display: "flex",
    flexDirection: "row",
}

export default AddressComponent