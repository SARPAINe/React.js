import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    let title, message;
    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find resource or page";
    }
    if (error.status === 500 || error.status) {
        title = "An error occured!";
        // message = JSON.parse(error.data).message;
        console.log(error.data);
        error.data.message
            ? (message = error.data.message)
            : (message = "Something went wrong!");
        // message = error.data.message;
    }
    // console.log(JSON.parse(error.data).message);
    return (
        <>
            <MainNavigation></MainNavigation>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
};

export default ErrorPage;
