import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import RootLayout from "./components/RootLayout";
import Book from "./pages/Book";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <Error></Error>,
        children: [
            { path: "/", element: <Home /> },
            //alternate option
            //{index: true, element:<HomePage/>}
            {
                path: "books",
                element: <BookList></BookList>,
            },
            {
                path: "books/:bookId",
                element: <Book></Book>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
