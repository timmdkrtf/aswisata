import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import AboutPT from "../components/AboutPT"
import AboutUs from "../components/AboutUs"
import Brand from "../components/Brand"
import Client from "../components/Client"
import Footer from "../components/Footer"

// import ASWLogo from "../assets/image/logo/3.png"

function Landing(){
    return(
        <>
            <Navbar />
            <Cover />
            <AboutPT />
            <AboutUs />
            <Brand />
            <Client />
            <Footer />

            {/* <div className="landing">
                <div className="content">
                    <img src={ASWLogo} alt="" />
                    <h3>Under Maintenance</h3>
                </div>
            </div> */}
        </>
    )
}

export default Landing;