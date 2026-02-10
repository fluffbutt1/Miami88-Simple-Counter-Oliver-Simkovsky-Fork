import React, { useState } from "react";
import Digits from "./Digits";
import Header from "./Header";
import Banana from "./Banana";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1);
    console.log(counter);
    clearTimeout();
  }, 1000);

  return (
    <div>
      <div className="text-center"><Header /></div>

      <div className="d-flex flex-column align-items-center">
        <div className="bg-primary w-75 text-center">
          <div className="row border">
            <div className="col-3 bg-danger border rounded">
              <Digits value={Math.floor((counter % 10000) / 1000)} />
            </div>
            <div className="col-3 bg-danger border rounded">
              <Digits value={Math.floor((counter % 1000) / 100)} />
            </div>
            <div className="col-3 bg-danger border rounded">
              <Digits value={Math.floor((counter % 100) / 10)} />
            </div>
            <div className="col-3 bg-danger border rounded">
              <Digits value={counter % 10} />
            </div>
          </div>
        </div>
      </div>
	  <div className="d-flex justify-content-center">
		<Banana />
	  </div>
    </div>
  );
};

export default Home;
