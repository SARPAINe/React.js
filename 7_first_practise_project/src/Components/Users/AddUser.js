import React, { useState, useRef } from "react";
import Wrapper from "../Helper/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (
            enteredName.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: "Invalide Input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (>0).",
            });
            return;
        }

        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
        // setEnteredAge("");
        // setEnteredUsername("");
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    };
    return (
        <React.Fragment>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                ></ErrorModal>
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    ></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    ></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default AddUser;
