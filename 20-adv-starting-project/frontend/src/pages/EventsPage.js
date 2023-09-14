import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
    //react router handles promise here
    const data = useLoaderData();
    if (data.isError) {
        return <p>{data.message}</p>;
    }

    const events = data.events;
    // const [isLoading, setIsLoading] = useState(false);
    // const [fetchedEvents, setFetchedEvents] = useState();
    // const [error, setError] = useState();

    // useEffect(() => {
    //     async function fetchEvents() {
    //         setIsLoading(true);

    //         setIsLoading(false);
    //     }

    //     fetchEvents();
    // }, []);
    return (
        // <>
        //     <div style={{ textAlign: "center" }}>
        //         {isLoading && <p>Loading...</p>}
        //         {error && <p>{error}</p>}
        //     </div>
        //     {!isLoading && fetchedEvents && (
        //         <EventsList events={fetchedEvents} />
        //     )}
        // </>
        <EventsList events={events}></EventsList>
    );
}

export default EventsPage;

//this code thats defined on the loader executes on the browser
export const loader = async () => {
    const response = await fetch("http://localhost:8080/events");

    //when an error gets thrown in a loader react router will simply render the closest error element
    if (!response.ok) {
        // return { isError: true, message: "Could not fetch events" };
        // throw new Response(
        //     JSON.stringify({ message: "Could not fetch events." }),
        //     { status: 500 }
        // );
        throw json(
            {
                message: "Could not fetch events.",
            },
            { status: 500 }
        );
    } else {
        // const resData = await response.json();
        // //browser now supports this response constructor
        // const res = new Response("any data", {
        //     status: 201,
        // });
        return response;
    }
};
