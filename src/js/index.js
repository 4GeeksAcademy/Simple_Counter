//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter (props) {
    return(<div className="bigCounter">
       
        <div className="six"></div>
        <div className="calender">
        <i class="bi bi-clock-fill"></i></div>
        <div className="four"></div>
        <div className="three"></div>
        <div className="two"></div>
        <div className="one"></div>

    </div>)
}

//import your own components
import {home} from "./component/home.jsx";

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
