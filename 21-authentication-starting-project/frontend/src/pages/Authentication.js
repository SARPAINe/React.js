import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
    return <Auth Form />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
    //built in URL constructor provided by browser
    const searchPrams = new URL(request.url).searchParams;
    const mode = searchPrams.get("mode") || "login";
    if (mode !== "login" && mode != "signup") {
        throw json({ message: "Unsupported mode." }, { status: 422 });
    }
    //never forget to use await here lol
    const data = await request.formData();
    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };
    const response = await fetch("http://localhost:8080/" + mode, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }
    if (!response.ok) {
        throw json(
            { message: "Couldn't authenticate user" },
            {
                status: 500,
            }
        );
    }

    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem("token", token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    return redirect("/");
};
