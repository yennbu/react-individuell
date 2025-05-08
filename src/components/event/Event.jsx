import React from "react";
import "./event.css";
import { useNavigate } from "react-router-dom";
import useEventIdStore from "../../hooks/useEventStore";

const Event = ({event}) => {

    if (!event) return null;

    const { date } = event.when; //Definiera date
    const shortenedDate = date 
    .split(" ")   //Sära på datum och månad
    .map((part, index) => index === 1 ? part.slice(0, 3) : part) //Går igenom alla månader (datum = index 0 - månad = index 1) och tar bort alla bokstäver, förutom de tre första
    .join(" "); // Sätter ihop datum och månad igen

    const navigate = useNavigate();
    const setSelectedEventId = useEventIdStore((state) => state.setSelectedEventId);

    const handleClick = () => {
        setSelectedEventId(event.id); // sparar ID:t globalt
        navigate(`/events/${event.id}`); // navigerar till detaljsidan
      };

    return (
        <div className="event-container" onClick={handleClick}>
            <div className="event__date">{shortenedDate}</div>
            <article className="event__info">
                <h2>{event.name}</h2>
                <p className="event__place">{event.where}</p>
                <p className="event__time">{event.when.from} - {event.when.to}
                    <span className="event__price">{event.price} kr</span>
                </p>
            </article>
        </div>
    )
}

export default Event