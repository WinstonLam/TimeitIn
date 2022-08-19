import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RevolvingDot } from 'react-loader-spinner'
import { ReactComponent as ThinkSVG } from "./images/thinking.svg";
import { ReactComponent as QuestionSVG } from "./images/question.svg";

import "./Styles/UserRedirect.css";

const UserRedirect = () => {
    let navigate = useNavigate();
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0) navigate("/");
    }, [counter]);

    return <div className="redirect-container">
        <div className="redirect-inner">
            <div className="redirect-icon-container">
                <ThinkSVG className='redirect-icon' />
                <QuestionSVG className='redirect-icon question' />
            </div>
            <div className="redirect-message">Oh no page not found <br />redirecting to<a><u>home page</u></a></div>
            <div className="redirect-counter-container">
                <div className='redirect-counter-404'>{counter}</div>
                <RevolvingDot color="#1976d2" />
            </div>
        </div>
    </div>
}

export default UserRedirect;