import React from "react";

import HardwareVideo from "../assets/videos/hardware.mp4";
import HackUMassLogo from "../assets/images/logo-cornflower.png";

const Header = () => {
    return (
        <header
            className="header header-inverse h-fullscreen p-0 bg-primary overflow-hidden"
            style={{ backgroundImage: "linear-gradient(-45deg, rgba(60, 60, 60, 1) 0%, rgba(60, 60, 60, 1) 100%)" }}
        >
            <div className="bg">
                <video className="bg-video" loop muted autoplay id="primary-video">
                    <source src={HardwareVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container text-center">
                <div className="row h-full align-items-center">
                    <div className="col-12 col-md-8 offset-md-2">
                        <center>
                            <img src={HackUMassLogo} alt="" style={{ height: "100%", width: "100%" }} />
                        </center>
                        <br />
                        <p className="lead text-white fs-20">November 5 &ndash; 7, 2021 | 36 Hours | Amherst, MA</p>
                        <a
                            className="btn btn-xl btn-round btn-default"
                            style={{ color: "black" }}
                            href="https://fuseumass.github.io/HackUMass-VIII-Projects/public%3Fwinners=1.html"
                        >
                            View HackUMass VIII Projects
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
