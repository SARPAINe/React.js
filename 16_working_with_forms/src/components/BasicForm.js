import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: isFirstNameValid,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        hasError: firstNameHasError,
        reset: resetFirstName,
    } = useInput((value) => {
        return value.trim() !== "" && value.length > 2;
    });

    const {
        value: enteredSecondName,
        isValid: isSecondNameValid,
        valueChangeHandler: secondNameChangeHandler,
        inputBlurHandler: secondNameBlurHandler,
        hasError: secondNameHasError,
        reset: resetSecondName,
    } = useInput((value) => value.trim() !== "" && value.length > 2);

    const {
        value: enteredEmail,
        isValid: isEmailValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        hasError: emailHasError,
        reset: resetEmail,
    } = useInput((value) => value.includes("@"));

    let formIsValid = false;

    if (isFirstNameValid && isSecondNameValid && isEmailValid) {
        formIsValid = true;
    }

    const firstNameClasses = firstNameHasError
        ? "form-control invalid"
        : "form-control";
    const secondNameClasses = secondNameHasError
        ? "form-control invalid"
        : "form-control";
    const emailClasses = emailHasError
        ? "form-control invalid"
        : "form-control";

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        console.log(enteredFirstName);
        console.log(enteredSecondName);
        console.log(enteredEmail);
        resetFirstName();
        resetSecondName();
        resetEmail();
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="control-group">
                <div className={firstNameClasses}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstName}
                    />
                    {firstNameHasError && (
                        <p className="error-text">
                            First name must have at least 3 characters
                        </p>
                    )}
                </div>
                <div className={secondNameClasses}>
                    <label htmlFor="secondname">Last Name</label>
                    <input
                        type="text"
                        id="secondname"
                        onChange={secondNameChangeHandler}
                        onBlur={secondNameBlurHandler}
                        value={enteredSecondName}
                    />
                    {secondNameHasError && (
                        <p className="error-text">
                            Second name must have at least 3 characters
                        </p>
                    )}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Input must be a valid email</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
