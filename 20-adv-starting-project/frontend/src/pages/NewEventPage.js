import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
    return (
        <>
            <EventForm method="post"></EventForm>
        </>
    );
};
export default NewEventPage;
