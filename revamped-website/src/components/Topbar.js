import React from "react";

import PinnacleBadge from "../assets/images/partners/pinnacle_badge.png";
const Topbar = () => {
    return (
        <nav className="topbar topbar-inverse topbar-expand-sm">
            <div className="container">
                <div className="topbar-left">
                    <a
                        id="mlh-trust-badge"
                        style={{ display: "block", maxWidth: "100px", minWidth: "60px", position: "fixed", left: "50px", top: "0", width: "10%", zIndex: "10000" }}
                        href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=blue"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-blue.svg"
                            alt="Major League Hacking 2021 Hackathon Season"
                            style={{ width: "100%" }}
                        />
                    </a>
                    <a
                        id="pinnacle-badge"
                        style={{ display: "block", maxWidth: "100px", minWidth: "60px", position: "fixed", left: "200px", top: "0", width: "10%", zIndex: "10000" }}
                        href="https://pinnacle.us.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={PinnacleBadge} alt="Pinnacle" style={{ width: "100%" }} />
                    </a>
                </div>
                <div className="topbar-right">
                    <a className="btn btn-sm btn-outline btn-white hidden-sm-down" href="https://about.hackumass.com/opensource.html">
                        Open Source
                    </a>
                    &nbsp;
                    <a className="btn btn-sm btn-outline btn-white" href="https://dashboard.hackumass.com/login">
                        Login
                    </a>
                    &nbsp;
                    <a className="btn btn-sm btn-outline btn-white hidden-sm-down" href="https://dashboard.hackumass.com/signup">
                        Register
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
