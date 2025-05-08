import React from "react";
import "./homeIcon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const HomeIcon = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }

    return(
        <div>
            <FontAwesomeIcon icon={faHouse} className="home-icon" alt="house icon" onClick={routeChange} />
        </div>
        
    )
}

export default HomeIcon;