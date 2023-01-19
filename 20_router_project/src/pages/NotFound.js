import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NotFound = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }, []);
    return <h1>NotFound</h1>;
};
export default NotFound;
