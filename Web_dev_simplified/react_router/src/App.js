import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import BookLayout from "./BookLayout";
import BookRoutes from "./BookRoutes";

function App() {
    return (
        <React.Fragment>
            {/* <Routes location="/books">
                <Route path="/books" element={<h1>extra content</h1>}></Route>
            </Routes> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>

                {/* <Route path="/books" element={<BookLayout />}>
                    <Route index element={<BookList></BookList>}></Route>
                    <Route
                        path="edit/:id"
                        element={<BookEdit></BookEdit>}
                    ></Route>
                    <Route path=":id" element={<Book />}></Route>
                    <Route path="new" element={<NewBook />}></Route>
                </Route> */}
                <Route path="/books/*" element={<BookRoutes />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;
