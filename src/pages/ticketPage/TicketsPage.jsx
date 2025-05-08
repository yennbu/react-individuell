import React from "react";
import Ticket from "../../components/ticket/Ticket.jsx";
import "./ticketsPage.css";
import HomeIcon from "../../components/homeIcon/HomeIcon.jsx";

const TicketPage = () => {
    return (
        <div className="tickets-page">
            <HomeIcon />
            
            <section className="ticket-list__container">
                <h1>Tack för ditt köp!</h1>
                <Ticket />
            </section>
            
        </div>
    )
}

export default TicketPage;