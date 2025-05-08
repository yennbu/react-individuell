// pages/EventDetails.jsx
import { useParams } from "react-router-dom";
import useFetchEvents from "../hooks/FetchEvents";

function EventDetails() {
    const { id } = useParams(); // fångar id:t från URL
    const { events, loading, error } = useFetchEvents();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const event = events.find(e => e.id === id);

    if (!event) return <p>Event not found</p>;

    return (
        <div>
            <h1>{event.name}</h1>
            <p>Plats: {event.where}</p>
            <p>Datum: {event.when.date}</p>
            <p>Tid: {event.when.from} - {event.when.to}</p>
            <p>Pris: {event.price} kr</p>
        </div>
    );
}

export default EventDetails;
