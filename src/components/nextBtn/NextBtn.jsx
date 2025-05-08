import React from "react";
import "./nextBtn.css";
import { useNavigate } from "react-router-dom";


const NextBtn = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/events`;
        navigate(path);
    }

    return (
        <button className="start-Btn"
            onClick={routeChange}
        > Nästa
        </button>
    )
}

export default NextBtn