import React from "react";

const Features = (props) => {
    return (
        <section className="section bg-gray">
            <div className="container">
                <header className="section-header">
                    <small style={{ fontSize: "20px" }}>Why HackUMass?</small>
                    <h2 className="primary-color">What Makes Us Unique</h2>
                    <hr />
                </header>
                {props.features.map((feature, index) => {
                    return index % 2 === 0 ? (
                        <React.Fragment>
                            <div className="row gap-y align-items-center">
                                <div className="col-12 col-md-5">
                                    <img className="rounded shadow-2" src={feature.image} alt="..." />
                                </div>
                                <div className="col-12 col-md-7">
                                    <h4 className="primary-color" style={{ fontWeight: "normal" }}>
                                        {feature.title}
                                    </h4>
                                    {feature.description}
                                </div>
                            </div>
                            {index !== props.features.length - 1 ? <hr /> : <React.Fragment />}
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className="row gap-y align-items-center">
                                <div className="col-12 col-md-7">
                                    <h4 className="primary-color" style={{ fontWeight: "normal" }}>
                                        {feature.title}
                                    </h4>
                                    {feature.description}
                                </div>
                                <div className="col-12 col-md-5">
                                    <img className="rounded shadow-2" src={feature.image} alt="..." />
                                </div>
                            </div>
                            {index !== props.features.length - 1 ? <hr /> : <React.Fragment />}
                        </React.Fragment>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
