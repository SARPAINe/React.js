import { Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import BookEdit from "./pages/BookEdit";
import NewBook from "./pages/NewBook";
import React from "react";
import BookLayout from "./BookLayout";
const BookRoutes = () => {
    return (
        <React.Fragment>
            {/* <BookLayout></BookLayout> */}
            <Routes>
                <Route element={<BookLayout></BookLayout>}>
                    <Route index element={<BookList></BookList>}></Route>
                    <Route
                        path="edit/:id"
                        element={<BookEdit></BookEdit>}
                    ></Route>
                    <Route path=":id" element={<Book />}></Route>
                    <Route path="new" element={<NewBook />}></Route>
                </Route>
            </Routes>
        </React.Fragment>
    );
};
export default BookRoutes;
