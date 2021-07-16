import React from "react";

const About = () => {
    return (
        <section className="section" style={{ paddingBottom: "0" }}>
            <div className="container">
                <header className="section-header mb-0" style={{ paddingBottom: "30px" }}>
                    <small style={{ fontSize: "20px" }}>Who are we?</small>
                    <h2>
                        We are <b className="primary-color">HackUMass</b>, a <b className="primary-color">36-hour event</b>
                        <br /> where students bring their <b className="primary-color">craziest ideas</b> to life.
                    </h2>
                </header>
                <div className="row gap-y">
                    <div className="col-12 offset-md-2 col-md-8 mb-30">
                        <div className="humv-video embed-responsive embed-responsive-16by9">
                            <iframe
                                title="HackUMass VII - Highlights"
                                width="760"
                                height="415"
                                src="https://www.youtube.com/embed/HldI-jUAufo"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <center>
                    <h4 style={{ paddingTop: "0" }}>
                        Watch a recap of <b className="primary-color">HackUMass VII</b>, where <b className="primary-color">1,000 students</b>
                        <br />
                        came together to{" "}
                        <a href="http://hackumass-vi-projects.hackumass.com">
                            <b className="primary-color">learn</b> and <b className="primary-color">build</b> some incredible projects
                        </a>
                    </h4>
                </center>
            </div>
        </section>
    );
};

export default About;
