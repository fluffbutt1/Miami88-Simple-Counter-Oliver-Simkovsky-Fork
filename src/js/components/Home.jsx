import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column align-items-center">
            <div className="bg-primary w-75 text-center">
				<div className="row border">
					<div className="col-3 bg-danger border rounded">hi</div>
					<div className="col-3 bg-danger border rounded">hi</div>
					<div className="col-3 bg-danger border rounded">hi</div>
					<div className="col-3 bg-danger border rounded">hi</div>
				</div>
			</div>
		</div>
	);
};

export default Home;