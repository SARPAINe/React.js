import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
const EditEventPage = () => {
    const data = useRouteLoaderData("event-detail");
    console.log(data.event);
    return <EventForm event={data.event} method="patch"></EventForm>;
};
export default EditEventPage;
