import React, { useRef, useState } from "react";
const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const nameInputRef = useRef();
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    let formIsValid = false;

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const [enteredEmail, setEnteredEmail] = useState("");
    const enteredEmailIsValid = enteredEmail.includes("@");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);

        //here we are using event.target.value as state change is scheudled by react and we don't have the latest state here yet
        // if (event.target.value.trim() !== "") {
        //     setEnteredNameIsValid(true);
        // }
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    };

    const emailInputHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };
    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);
        console.log(nameInputRef.current.value);
        // nameInputRef.current.value = "";
        //it works but not ideal since direct manipulation of DOM, react should be the one do it but not us, we can use usestate and two way binding
        setEnteredName("");
        setEnteredNameTouched(false);
        setEnteredEmail("");
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";
    const emailInputClasses = emailInputIsInvalid
        ? "form-control invalid"
        : "form-control";
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your email</label>
                <input
                    type="text"
                    id="email"
                    onChange={emailInputHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && (
                    <p className="error-text">Email is not valid</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
