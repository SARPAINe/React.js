import { Form } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

function NewsletterSignup() {
    const fetcher = useFetcher();
    const { data, state } = fetcher;

    useEffect(() => {
        // if (state === "idle" && data.message) {
        //     window.alert(data.message);
        // }
        if (state === "idle" && data) window.alert(data.message);
    }, [state, data]);

    //if we use fetche.Form it doesn't redirect to the page it submits to

    // this useFetcher hook, is basically the tool you should use

    // if you wanna interact

    // with some action or a loader without transitioning.

    // So if you wanna send your requests behind the scenes,

    // so to say, without triggering any route changes
    return (
        <fetcher.Form
            method="post"
            action="/newsletter"
            className={classes.newsletter}
        >
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
                name="email"
            />
            <button
                onClick={() => {
                    console.log(data.message);
                }}
            >
                Sign up
            </button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;
