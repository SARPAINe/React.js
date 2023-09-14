import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../Input/Input";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
    console.log("password reducer being called");
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    // useEffect(() => {
    //     console.log("EFFECT RUNNING");

    //     return () => {
    //         console.log("EFFECT CLEANUP");
    //     };
    // }, []);

    //variation of object de structuring
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });

        // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    id="email"
                    type="email"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    isValid={emailIsValid}
                    label="E-mail"
                ></Input>
                <Input
                    id="password"
                    type="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    isValid={passwordIsValid}
                    label="Password"
                ></Input>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
