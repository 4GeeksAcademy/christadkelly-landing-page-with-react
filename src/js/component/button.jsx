import React from "react";
import PropType from "prop-types";

const MyButton = (prop) => {
    return(
    <div>
        <a type="button" className={prop.size} href={prop.url}>{prop.label}</a>
    </div>
    );
};

MyButton.propType = {
    label: PropType.string,
    url: PropType.string,
    size: PropType.string
}

export default MyButton