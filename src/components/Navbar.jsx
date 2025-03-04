import LogoMain from "../assets/image/logo/3.png"
import { useState, useEffect } from "react";

export default function Navbar(){

    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const coverHeight = document.getElementById("cover")?.offsetHeight || 0;
            if (window.scrollY > coverHeight) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
        <nav className={`navbar navbar-expand-lg fixed-top ${showNavbar ? "show" : "hide"}`}>
            <div className="container">
                <a className="navbar-brand" href="#"><img src={LogoMain} alt="" /></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#cover">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tentang Perusahaan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dewan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Brand</a>
                    </li>
                </ul>
                </div> */}
            </div>
        </nav>
        </>
    );
}