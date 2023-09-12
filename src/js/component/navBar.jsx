import React from "react";
import PropType from "prop-types";

const MyNavBar = (prop) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
			<div className="container-fluid d-flex">
				<a className="navbar-brand" href="#">{prop.title}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#">{prop.linkName1}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">{prop.linkName2}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">{prop.linkName3}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">{prop.linkName4}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

MyNavBar.propTypes = {
	title: PropType.string,
	linkName1: PropType.string,
	linkName2: PropType.string,
	linkName3: PropType.string,
	linkName4: PropType.string,
};

export default MyNavBar;
