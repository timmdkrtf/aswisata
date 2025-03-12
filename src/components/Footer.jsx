import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export default function Footer(){
    return(
        <footer id="kontak">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 col-12">
                        <h2>PT Abdi Solusi Wisata</h2>
                        <ul style={{listStyleType:"none", padding:"0"}}>
                            <li className="pb-2">
                                <a href="https://maps.app.goo.gl/8yRLm8ACmjuVgoQy8" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    Jl. Aria Surialaga No.83, Kota Bogor 16119
                                </a>
                            </li>
                            <li className="pb-2">
                                <a href="tel:+622518632170" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <MdLocalPhone className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    +62 251 8632 170
                                </a>
                            </li>
                            <li className="pb-2">
                                <a href="https://api.whatsapp.com/send?phone=6281213779357" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsWhatsapp className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    +62 812 1377 9357
                                </a>
                            </li>
                            <li className="pb-2">
                                <a href="mailto:contact@aswisata.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <MdEmail className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    contact@aswisata.co.id
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <hr />
                    <p className="text-end mb-0 pb-3 Poppins" style={{fontSize:"12px"}}>© 2025 PT Abdi Solusi Wisata &middot; All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}