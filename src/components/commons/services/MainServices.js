import React from "react"

function MainServices(){
    return(
        <div>
            <img src="/assets/service.jpg"  height={"200px"} width={"200px"} />
            <span style={spanStyles}>• Gaming<br /><br />• Prayer<br /><br />• Mobile Computing<br /><br />• Programming</span>
            <br /><br /><br />
            <span style={spanStyles2}>• Testing<br /><br />• Bible Study<br /><br />• Web Development</span>
        </div>
    )
}

const spanStyles={
    paddingLeft: "40px",
    paddingRight: "20px",
    position: "absolute",
    fontSize: "24px",
}

const spanStyles2={
    paddingLeft: "5px",
    paddingRight: "20px",
    position: "absolute",
    fontSize: "24px",
}

export default MainServices