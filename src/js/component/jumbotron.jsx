import React from "react";
import PropType from "prop-types";


const MyJumbotron = (prop) => {
    return (
        <div className="jumbotron bg-light pb-5 px-5">
            <h1 className="display-4">{prop.title}</h1>
            <p className="lead">{prop.description}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
                {prop.buttonLabel}
            </a>
        </div>
    );
};

MyJumbotron.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string,
};

export default MyJumbotron;