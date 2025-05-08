import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetchEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/events.json')
            .then(response => { 
                //console.log(response.data.events) 
                setEvents(response.data.events);
                setLoading(false);
                })
            .catch(error => { 
                console.log(error) 
                setError(err);
                setLoading(false);
                })
    
        }, []);

        return {events, loading, error}

}

export default useFetchEvents;


//GET https://santosnr6.github.io/Data/events.json