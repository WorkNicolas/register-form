import Main from "./commons/Main"
import Footer from "./commons/Footer"

export const About = () =>{
    return(
        <div>
            <Main mains="About Us" isAbout={true}/>
            <Footer />
        </div>
    )
}