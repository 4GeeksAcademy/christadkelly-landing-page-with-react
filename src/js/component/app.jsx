import React from "react";
import PropType from "prop-types";
import MyNavBar from "./navBar.jsx";
import MyJumbotron from "./jumbotron.jsx";
import MyCard from "./card.jsx";
import MyFooter from "./footer.jsx";

//create your first component
const App = () => {
	return (
		<div>
			<MyNavBar
				title="Start Bootstrap"
				linkName1="Home"
				linkName2="About"
				linkName3="Services"
				linkName4="Contact"
			/>
			<div className="container">
				<MyJumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ispa, ispam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaeart name nobis illo aspernatur vitea fugiat numquam repellat."
					buttonLabel="Call to action!"
					buttonUrl="#"
					buttonClasses='btn btn-primary btn-lg'
				/>
				<div className="row mt-4">
					<MyCard
						title="My Card"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
						buttonLabel="Find Out More!"
						imageUrl="https://via.placeholder.com/500x325"
						buttonUrl="#"
						buttonClasses='btn btn-primary'
					/>
					<MyCard
						title="My Card"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
						buttonLabel="Find Out More!"
						imageUrl="https://via.placeholder.com/500x325"
						buttonUrl="#"
						buttonClasses='btn btn-primary'
					/>
					<MyCard
						title="My Card"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
						buttonLabel="Find Out More!"
						imageUrl="https://via.placeholder.com/500x325"
						buttonUrl="#"
						buttonClasses='btn btn-primary'
					/>
					<MyCard
						title="My Card"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
						buttonLabel="Find Out More!"
						imageUrl="https://via.placeholder.com/500x325"
						buttonUrl="#"
						buttonClasses='btn btn-primary'
					/>
				</div>
			</div>
			<MyFooter />
		</div>
	);
};

export default App;

