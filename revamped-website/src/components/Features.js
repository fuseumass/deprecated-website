import React from "react";

import HardwareImage from "../assets/images/hardware.jpg";
import Hackers from "../assets/images/hackers.jpg";
import Venue from "../assets/images/venue.jpg";
import Food from "../assets/images/food.jpg";
import Sponsors from "../assets/images/sponsors.jpg";

const Features = () => {
    return (
        <section className="section bg-gray">
            <div className="container">
                <header className="section-header">
                    <small style={{ fontSize: "20px" }}>Why HackUMass?</small>
                    <h2 className="primary-color">What Makes Us Unique</h2>
                    <hr />
                </header>
                <div className="row gap-y align-items-center">
                    <div className="col-12 col-md-5">
                        <img className="rounded shadow-2" src={HardwareImage} alt="..." />
                    </div>
                    <div className="col-12 col-md-7">
                        <h4 className="primary-color" style={{ fontWeight: "normal" }}>
                            <b>Hardware</b> from A to Z
                        </h4>
                        <p>
                            At HackUMass we not only focus on creating a collaborative environment for developers/engineers to create awesome software projects, but also give all
                            the tools that you will need to create awesome hardware hacks! With Arduinos, Raspberry Pis, circuit components, quadcopters, Oculus Rifts, and more, we
                            have the hardware, you have the ideas, so come bring them to life at HackUMass.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row gap-y align-items-center">
                    <div className="col-12 col-md-7">
                        <h4 className="primary-color" style={{ fontWeight: "normal" }}>
                            Creative <b>Hackers</b>
                        </h4>
                        <p>
                            Our hackers come from all around the country and from many diverse backgrounds. Veteran hackers, first-timers, developers, engineers, entrepreneurs, and
                            even non-tech majors -- this is who we are. Our goal is to bring together and inspire hackers from every background and provide opportunities like
                            Ladies Storm Hackathons to continue growing in diversity. Come with friends, make new friends, join 800 other participants in one of the biggest and
                            best hackathons in New England.
                        </p>
                    </div>
                    <div className="col-12 col-md-5">
                        <img className="rounded shadow-2" src={Hackers} alt="..." />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row gap-y align-items-center">
                    <div className="col-12 col-md-5">
                        <img className="rounded shadow-2" src={Venue} alt="..." />
                    </div>
                    <div className="col-12 col-md-7">
                        <h4 className="primary-color" style={{ fontWeight: "normal" }}>
                            Incredible <b>Venue</b>
                        </h4>
                        <p>
                            Tired of hacking in some old gym? Say no more! HackUMass is hosted in the Integrative Learning Center (ILC), one of the newest state-of-the-art academic
                            buildings at UMass Amherst. Within the walls of the four-story 173,000 sq. ft. structure, the ILC provides 2,000 seats and plenty of spaces for hacking,
                            sleeping, yoga, Super Smash Bros, and much more! As one of the largest research universities in New England, we take our hacking spaces seriously, and
                            we hope you like it.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row gap-y align-items-center">
                    <div className="col-12 col-md-7">
                        <h4 className="primary-color" style={{ fontWeight: "normal" }}>
                            #1 <b>Dining</b>
                        </h4>
                        <p>
                            Soylent not cutting it for you? Don’t worry. We have the
                            <a href="http://www.food-management.com/news-trends/umass-tops-2016-princeton-review-best-campus-food-listing">#1 dining service in the nation!</a> And
                            as a participant of HackUMass you will get access to all of our top-rated dining halls and other dining facilities. Have any special dietary
                            restrictions? Not to worry! We accommodate all dietary restrictions.
                        </p>
                    </div>
                    <div className="col-12 col-md-5">
                        <img className="rounded shadow-2" src={Food} alt="..." />
                    </div>
                </div>
                <hr />
                <div className="row gap-y align-items-center">
                    <div className="col-12 col-md-5">
                        <img className="rounded shadow-2" src={Sponsors} alt="..." />
                    </div>
                    <div className="col-12 col-md-7">
                        <h4 className="primary-color" style={{ fontWeight: "normal" }}>
                            Generous <b>Sponsors</b>
                        </h4>
                        <p>
                            HackUMass wouldn't happen without the support of our awesome sponsors. From startups to big-name brands, we work with the innovators and the makers.
                            Workshops, tech talks, sweet prizes, swag, mini-competitions, hardware/APIs -- we partner with the best in the industry to make this event come to life.
                            Check out some of this year's sponsors below (and make sure to say thanks if you see them!). Note: If you are a company interested in sponsoring our
                            event send us an e-mail at sponsors@hackumass.com and we can get you connected with one of our sponsorship team members.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
