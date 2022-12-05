import React from "react"
import Input from "./Input"

class EmailInput extends React.Component {
    render(){
        return(
            <div style={innerStyles}>
                <Input asset={{
                    ph: "   Your E-mail Address",
                    icon: "/assets/email-icon.png",
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

export default EmailInput