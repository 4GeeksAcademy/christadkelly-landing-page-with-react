import React from "react";

const MyFooter = (prop) => {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <div class="container-fluid text-center text-bg-dark p-3">
			Copyright @ My Website {year}
		</div>
    );
};

export default MyFooter;