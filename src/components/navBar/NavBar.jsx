import React, { useState, useEffect } from "react";
import "./navBar.css";
import { useNavigate, useLocation, useMatch } from "react-router-dom";
import useEventIdStore from "../../hooks/useEventStore";

const NavBar = () => {

    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const match = useMatch('/events/:id');
    let navigate = useNavigate();
    const selectedEventId = useEventIdStore((state) => state.selectedEventId);

    useEffect(() => {
        navigate(activePath);
    }, [activePath]);

    const routeChange = (path) => {
        if (path === "/events/:id") {
            if (selectedEventId) {
                const realPath = `/events/${selectedEventId}`;
                setActivePath(realPath);
                console.log("Navigating to:", realPath);
            } else {
                console.warn("No selectedEventId found");
            }
        } else {
            setActivePath(path);
            console.log("Active path:", path);
        }
    }

    return (
        <div className="nav-bar">
            <div
                className={activePath === '/' ? 'active' : 'nav-bar__dot'}
                onClick={() => routeChange("/")}>
            </div>
            <div
                className={activePath === '/events' ? 'active' : 'nav-bar__dot'}
                onClick={() => routeChange("/events")}>
            </div>
            <div
                className={match ? 'active' : 'nav-bar__dot'}
                onClick={() => routeChange("/events/:id")}>
            </div>
            <div
                className={activePath === '/order' ? 'active' : 'nav-bar__dot'}
                onClick={() => routeChange("/order")}>
            </div>
        </div>
    )
}

export default NavBar;