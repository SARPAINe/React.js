import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function RootLayout() {
    const navigation = useNavigation();

    return (
        <>
            <MainNavigation></MainNavigation>
            <main>
                {navigation.state === "loading" ? (
                    <p style={{ textAlign: "center" }}>Loading..</p>
                ) : (
                    <Outlet></Outlet>
                )}
                {/* <Outlet></Outlet> */}
            </main>
        </>
    );
}

export default RootLayout;
