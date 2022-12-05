import React from "react"

function handleImage(hasImage){
    return !hasImage
}

function Input(props) {
    if (props.asset.ph=="   Your E-mail Address"){
        if(props.asset.hasImage){
            return(
                <div style={inputStyles}>
                    <img src={props.asset.icon} style={imageStyles}/>
                    <input type={props.asset.ty} placeholder={props.asset.ph} style={{width: "345px"}}/>
                </div>
            )
        } else {
            <div style={inputStyles}>
                <input type={props.asset.ty} placeholder={props.asset.ph} style={{width: "345px"}}/>
            </div>
        }
    } else if (props.asset.ty=="date"){
        if(props.asset.hasImage){
            return(
                <div>
                    <img src={props.asset.icon} style={dateImageStyles} />
                    <input type={props.asset.ty} placeholder={props.asset.ph} style={{width: "157px"}}/>
                </div>
            )
        } else {
            return(
                <div>
                    <input type={props.asset.ty} placeholder={props.asset.ph} style={{width: "157px"}}/>
                </div>
            )
        }
    } else if(props.asset.ty=="textarea"){
        if(props.asset.hasImage){
            return(
                <div >
                    <img src={props.asset.icon} style={addressImageStyles}/>
                    <div style={{padding: "10px"}}>
                    <textarea style={{fontSize: "12px"}} placeholder={props.asset.ph} rows={"4"} cols={"18"} />
                    </div>
                </div>
            )
        } else{
            <div >
                <div style={{padding: "10px"}}>
                    <textarea style={{fontSize: "12px"}} placeholder={props.asset.ph} rows={"4"} cols={"18"} />
                </div>
            </div>
        }
    } else {
        if (props.asset.hasImage){
            return(
                <div style={inputStyles}>
                    <img src={props.asset.icon} style={imageStyles}/>
                    <input type={props.asset.ty} placeholder={props.asset.ph}/>
                </div>
            )
        } else{
            return(
                <div style={inputStyles}>
                    <input type={props.asset.ty} placeholder={props.asset.ph} />
                </div>
            )
        }
    }
}

const imageStyles={
    height: "17px",
    width: "17px",
    position: "absolute",
    paddingLeft: "1px",
    paddingTop: "2px"
}

const dateImageStyles={
    height: "17px",
    width: "17px",
    position: "absolute",
    paddingLeft: "125px",
    paddingTop: "2px"
}

const inputStyles={
    display: "flex",
    padding: "10px"
}

const addressImageStyles={
    height: "17px",
    width: "17px",
    position: "absolute",
    paddingLeft: "12px",
    paddingTop: "14px"
}

export default Input