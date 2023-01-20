import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    let title, message;
    if (error.status === 500) {
        title = "An error occured!";
        // message = JSON.parse(error.data).message;
        message = error.data.message;
    }
    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find resource or page";
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
