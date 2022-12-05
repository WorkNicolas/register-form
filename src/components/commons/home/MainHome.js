import React from "react"

function MainHome(){
    return(
        <div>
            <img src="/assets/carl.jpg"  height={"200px"} width={"200px"} />
            <span style={spanStyles}>This website was created by Carl Nicolas V. Mendoza. It is a website created for the purpose of practicing ReactJS. It is created using JSX syntax. This website features blue and yellow color scheme which was based on the original register forms. Due to limited time, the code generated was not optimized for efficiency and performance. Taking a glimpse at the code will show how terrible it is, it does not make use of array methods or leverage props for input creation. This is because I have been trying to find out about how to pass functions to another JS file but failed. If someone can remake this, please let me see the remake so that I can learn from my mistakes.</span>
            <br /><br /><br />
            <span style={spanStyles2}>I have a lot of assignments for the upcoming weeks. I still don't know how to use extensively use React-Native and only my BlueStacks emulator with Expo app works with the React-Native website. I have only created simple changes that amount to the centered text. These texts are extra filler to make the website look a little bit nicer. The image to the left is the image of myself. This is one of my favorite color palettes. The image to the left has been edited, I originally wore a red polo and I remember my classmate passing the edited photo for the Final Project in Advanced Object-Oriented Programming course.</span>
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

export default MainHome