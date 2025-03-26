import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer(){
    return(
        <footer id="kontak">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 col-12">
                        <h2 style={{marginTop: "-1px"}}>PT Abdi Solusi Wisata</h2>
                        <ul style={{listStyleType:"none", padding:"0"}}>
                            <li className="">
                                <a href="https://maps.app.goo.gl/R2GLxNgUimPzz5c47" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    Jl. Aria Surialaga No. 83, Kota Bogor 16119
                                </a>
                            </li>
                            <li className="">
                                <a href="tel:+622518632170" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsFillTelephoneFill className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                                    +62 251 8632 170
                                </a>
                            </li>
                            <li className="">
                                <a href="https://api.whatsapp.com/send?phone=6281213779357" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsWhatsapp className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                                    +62 812 1377 9357
                                </a>
                            </li>
                            <li className="">
                                <a href="mailto:contact@aswisata.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsFillEnvelopeFill className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                                    contact@aswisata.co.id
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <hr />
                    <p className="text-end mb-0">© 2025 PT Abdi Solusi Wisata &middot; All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}