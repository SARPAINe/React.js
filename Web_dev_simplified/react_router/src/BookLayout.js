import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
const BookLayout = (props) => {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
    const number = searchParams.get("n");
    return (
        <React.Fragment>
            <Link to="/books/1">Book 1</Link>
            <br></br>
            <Link to="/books/2">Book 2</Link>
            <br></br>
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br></br>
            <Link to="/books/new">New Book</Link>
            <Outlet context={{ value: "hello world" }}></Outlet>
            <input
                type="number"
                value={number}
                onChange={(e) => {
                    setSearchParams({ n: e.target.value });
                }}
            ></input>
        </React.Fragment>
    );
};
export default BookLayout;
