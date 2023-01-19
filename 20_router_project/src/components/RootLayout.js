import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
    return (
        <>
            <MainNavigation></MainNavigation>
            {/*outlet is the place where child routes will be rendered*/}
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};
export default RootLayout;
