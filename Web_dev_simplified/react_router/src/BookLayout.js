import React from "react";
import { Link, Outlet } from "react-router-dom";
const BookLayout = (props) => {
    return (
        <React.Fragment>
            <Link to="/books/1">Book 1</Link>
            <Link to="/books/2">Book 2</Link>
            <br></br>
            <Link to="/books/new">New Book</Link>
            <Outlet context={{ value: "hello world" }}></Outlet>
        </React.Fragment>
    );
};
export default BookLayout;
