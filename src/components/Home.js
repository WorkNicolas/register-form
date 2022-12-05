import Main from "./commons/Main"
import Footer from "./commons/Footer"

export const Home = () =>{
    return(
        <div>
            <Main mains="Homepage" isHome={true}/>
            <Footer />
        </div>
    )
}