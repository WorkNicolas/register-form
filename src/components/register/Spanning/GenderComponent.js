import React from "react"
import Input from "./Input"

class GenderComponent extends React.Component {
    
    render(){
        return(
            <div style={genderStyles}>
                <div style={innerStyles}>
                    <select style={{width: "165px"}}>
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to disclose">Prefer not to disclose</option>
                    </select>
                </div>
                <div style={{paddingLeft: "23px", paddingTop: "5px"}}>
                    <Input asset={{
                        id: "6",
                        ph: "   Date of Birth : DD/MM/YY", 
                        icon: "/assets/birthday-icon.png", 
                        ty: "date",
                        hasImage: true
                    }}/>
                </div>
            </div>
        )
    }
}


const genderStyles={
    display: "flex",
    flexDirection: "row"
}

const innerStyles={
    display: "flex",
    flexDirection: "row",
    paddingLeft: "10px",
    paddingTop: "5px",
}

export default GenderComponent