import React from "react";
import { Link } from "react-router-dom";
const BookList = (props) => {
    const PRODUCTS = [
        { id: "p1", title: "Book 1" },
        { id: "p2", title: "Book 2" },
        { id: "p3", title: "Book 3" },
    ];
    return (
        <>
            <h1>BookList</h1>
            <ul>
                {PRODUCTS.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
                {/* <li>
                    <Link>Book 1</Link>
                </li>
                <li>
                    <Link>Book 2</Link>
                </li>
                <li>
                    <Link>Book 3</Link>
                </li> */}
            </ul>
        </>
    );
};
export default BookList;
