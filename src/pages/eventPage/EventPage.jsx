import React from "react";
import "./eventPage.css";
import NavBar from "../../components/navBar/NavBar";
import HomeIcon from "../../components/homeIcon/HomeIcon";
import Heading from "../../components/heading/Heading";
import EventList from "../../components/evenList/EventList";


const EventPage = () => {
    return (
        <div className="events-container">
            <HomeIcon />
            <Heading text ="Event"/>
            <EventList />
            <NavBar />
        </div>
    )
}

export default EventPage;