import React from "react";
import "./ticketCounter.css";

function TicketCounter({ tickets, handleIncrease, handleDecrease }) {

    return (
        <div className="ticket-counter__container">
            <button className="decrease-btn" onClick={handleDecrease}>-</button>
            <p className="ticket-sum">{tickets}</p>
            <button className="increase-btn" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default TicketCounter;