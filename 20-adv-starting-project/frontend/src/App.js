import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, {
    loader as eventDetailLoader,
    action as deleteEventAction,
} from "./pages/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "../src/components/RootLayout";
import EventsRoot from "./components/EventsRoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { index: true, element: <HomePage></HomePage> },
            {
                path: "events",
                element: <EventsRoot></EventsRoot>,
                children: [
                    {
                        index: true,
                        element: <EventsPage></EventsPage>,
                        loader: eventsLoader,
                    },
                    {
                        path: ":id",
                        id: "event-detail",
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage></EventDetailPage>,
                                action: deleteEventAction,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage></EditEventPage>,
                            },
                        ],
                    },
                    {
                        path: "new",
                        element: <NewEventPage></NewEventPage>,
                        action: newEventAction,
                    },
                ],
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
