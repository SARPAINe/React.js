import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
    const data = useRouteLoaderData("event-detail");
    return (
        <>
            <EventItem event={data.event}></EventItem>
        </>
    );
};
export default EventDetailPage;

export const loader = async ({ request, params }) => {
    const response = await fetch("http://localhost:8080/events/" + params.id);
    if (!response.ok) {
        throw json(
            { message: "Could not fetch details for selected event." },
            { status: 500 }
        );
    } else {
        return response;
    }
};

export const action = async ({ params, request }) => {
    const response = await fetch("http://localhost:8080/events/" + params.id, {
        method: request.method,
    });
    if (!response.ok) {
        throw json({ message: "Could not delete event." }, { status: 500 });
    }
    return redirect("/events");
};
