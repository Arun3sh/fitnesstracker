import { Button } from "@mui/material";
import "./Home.css";
import img from "./../../../assets/images/meditation.png";

function Home() {
  return (
    <div className="home-container container-sm">
      <div className="home-wrapper">
        <div className="join-subscription">
          <div className="join-content">
            <div className="join-main-content">
              <h2>Home header</h2>
              <p>Here comes the content of the web application</p>
              <p>Here comes the content of the web application</p>
              <Button variant="outlined">Join Now</Button>
            </div>
            <div className="join-img-content">
              <img aria-label="exercise" alt="exercise image" src={img} />
            </div>
          </div>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 500"
            className="svg-first"
          >
            <path
              d="M 0,500 C 0,500 0,250 0,250 C 117.25,268.8571428571429 234.5,287.7142857142857 350,284 C 465.5,280.2857142857143 579.2499999999999,254 710,263 C 840.7500000000001,272 988.5,316.2857142857143 1113,320 C 1237.5,323.7142857142857 1338.75,286.8571428571429 1440,250 C 1440,250 1440,500 1440,500 Z"
              stroke="none"
              strokeWidth="0"
              fill="#fff"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
