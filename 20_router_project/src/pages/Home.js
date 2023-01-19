import { Link, useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>Home Page</div>
            <Link to="/books"> See the booklist</Link>
            <p>
                <button
                    onClick={() => {
                        navigate("/books");
                    }}
                >
                    List of books
                </button>
            </p>
        </>
    );
};
export default Home;
