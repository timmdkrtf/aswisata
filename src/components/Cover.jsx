import { useState, useEffect } from "react";
import LogoMain from "../assets/image/logo/3.png"
import BgRealtour from "../assets/image/photo/1.png"
import BgRealtour2 from "../assets/image/photo/2.png"
import BgHabatour2 from "../assets/image/photo/3.png"

const images = [BgRealtour, BgHabatour2, BgRealtour2];

export default function Cover(){

    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); 
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFade(false);
            }, 300); 
        }, 6000); 

        return () => clearInterval(interval);
    }, []);

    return(
        <div id="cover" className={`cover ${fade ? "fade-out" : "fade-in"}`} style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <div className="container">
                <div className="row">
                    <div className="content">
                        <img src={LogoMain} />
                        <p>PT Abdi Solusi Wisata</p>
                    </div>
                </div>
            </div>
        </div>
    );
}