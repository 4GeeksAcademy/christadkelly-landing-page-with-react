import React from "react";
import PropType from "prop-types";

const MyButton = (prop) => {
    return(
    <div>
        <button type="button" className="btn btn-primary">{prop.label}</button>
    </div>
    );
};

MyButton.propType = {
    label: PropType.string
}

export default MyButton