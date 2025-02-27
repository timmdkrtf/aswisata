import RealtourLogo from "../assets/image/logo/realtour.png"
import HabatourLogo from "../assets/image/logo/habatour.png"

export default function Brand(){
    return(
        <div className="brand" id="brand">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h2>Brand Kami</h2>
                    </div>
                    <div className="content">
                        <a href="https://realtour.co.id" target="_blank">
                            <img src={RealtourLogo} alt="" />
                        </a>
                        <a href="https://habatour.co.id" target="_blank">
                            <img src={HabatourLogo} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}