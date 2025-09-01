import React, {useState} from 'react';
import MainNavigation from "../components/MainNavigation.jsx";

const EventPage = () => {

    const [eventList, setEventList] = useState([]);

    // API CALL
    const fetchEvents = async () => {
        const response =
            await fetch('http://localhost:9000/api/events');
            const data = await response.json();
        console.log(data);
    };
    fetchEvents();

    return (
        <>
        <h1>Event Page</h1>
            <ul>
                {eventList.map((event) => <li>{event}</li>)}
            </ul>

        </>
    );
};

export default EventPage;