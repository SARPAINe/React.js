import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
    // const users = [
    //     { name: "refat", age: 24 },
    //     { name: "shammy", age: 30 },
    // ];
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <React.Fragment>
            <AddUser onAddUser={addUserHandler}></AddUser>;
            {usersList.length > 0 && <UsersList users={usersList}></UsersList>}
        </React.Fragment>
    );
}

export default App;
