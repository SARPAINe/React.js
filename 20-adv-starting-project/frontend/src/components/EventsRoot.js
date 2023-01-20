import { Outlet } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";

const EventsRoot = () => {
    return (
        <>
            <EventsNavigation></EventsNavigation>
            <Outlet></Outlet>
        </>
    );
};
export default EventsRoot;
