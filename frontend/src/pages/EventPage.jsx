import React, {useEffect, useState} from 'react';
import MainNavigation from "../components/MainNavigation.jsx";

const EventPage = () => {

    const [eventList, setEventList] = useState([]);

    // API CALL
    const fetchEvents = async () => {
        const response =
            await fetch('http://localhost:9000/api/events');
            const data = await response.json();
        console.log(data);
        setEventList(data);
    };

    useEffect(() => { // 최초 1번만 실행
    fetchEvents();
    },[]);

    return (
        <>
        <h1>Event Page</h1>
            <ul>
                {eventList.map((event) => <li key={event.eventId}>{event.title}</li>)}
            </ul>

        </>
    );
};

export default EventPage;