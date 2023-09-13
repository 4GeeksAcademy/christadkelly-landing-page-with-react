import React from "react";
import PropType from "prop-types";
import MyButton from "./button";

const MyCard = (prop) => {
    return(
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch mb-4">
            <div className="card text-center">
			    <img className="card-img-top" src={prop.imageUrl} alt="Card image cap" />
			    <div className="card-body">
				    <h5 className="card-title">{prop.title}</h5>
				    <p className="card-text">{prop.description}</p>
			    </div>
                <div className="card-footer text-body-secondary">
                    <MyButton label={prop.buttonLabel}/>
			    </div>
		    </div>
        </div>
    );
};

MyCard.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string,
};

export default MyCard;