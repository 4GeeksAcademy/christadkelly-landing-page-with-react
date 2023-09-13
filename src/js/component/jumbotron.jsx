import React from "react";
import PropType from "prop-types";
import MyButton from "./button.jsx";


const MyJumbotron = (prop) => {
    return (
        <div className="jumbotron bg-light pb-5 px-5">
            <h1 className="display-4">{prop.title}</h1>
            <p className="lead">{prop.description}</p>
            <div>
                <MyButton 
                label={prop.buttonLabel}
                url={prop.buttonUrl}
                classes={prop.buttonClasses}/>
            </div>
        </div>
    );
};

MyJumbotron.propTypes = {
	title: PropType.string,
	description: PropType.string,
    buttonLabel: PropType.string,
    buttonUrl: PropType.string,
    buttonClasses: PropType.string,
};

export default MyJumbotron;