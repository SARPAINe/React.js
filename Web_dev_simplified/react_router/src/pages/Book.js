import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
const Book = (props) => {
    const { id } = useParams();
    const obj = useOutletContext();
    // console.log(obj);
    return (
        <React.Fragment>
            <h1>
                Book {id} {obj.value}
                {/* Book {id} */}
            </h1>
            <Link to={`/books/edit/${id}`}>Edit Book</Link>
        </React.Fragment>
    );
};
export default Book;
