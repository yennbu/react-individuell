import React from "react";
import useFetchEvents from "../../hooks/FetchEvents";
import Event from "../event/Event";

function EventList() {
    const { events, loading, error } = useFetchEvents();

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
        {Array.isArray(events) && events.map((event, index) => (
        event ?  <Event key={index} event={event} /> : null
        ))}
      </div>
    );
}

export default EventList;