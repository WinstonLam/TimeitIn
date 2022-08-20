import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import wrench from "./images/wrench.gif";
import error from "./images/error.gif";

import "./Styles/Unfinished.css";

const Unfinished = () => {
    let navigate = useNavigate();
    const [counter, setCounter] = useState(8);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0) navigate("/");
    }, [counter]);
    return <div className="container-unfinished">
        <div className="images">
            <img src={wrench} alt="wrench" className="wrench" />
            <img src={error} alt="error" className="error" />
        </div>

        <div className="inner">
            It broke again? <br />
            <p>Well.. guess this page is currently under maintanence ¯\_(ツ)_/¯</p>
            <p> Redirecting to home in.. {counter}</p>

        </div>
    </div >
}

export default Unfinished;