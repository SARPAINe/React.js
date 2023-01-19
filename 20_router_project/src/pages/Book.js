import React from "react";
import { Link, useParams } from "react-router-dom";
const Book = (props) => {
    const params = useParams();
    return (
        <React.Fragment>
            <h1>Book Details</h1>
            <p>{params.bookId}</p>
            <button>
                <Link to=".." relative="path">
                    back
                </Link>
            </button>
        </React.Fragment>
    );
};
export default Book;
