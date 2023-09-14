import { useState, useCallback } from "react";
import Todos from "./Todos";

const App = () => {
    console.log("main component rerenders");
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            {/* <Todos todos={todos} addTodo={addTodo} /> */}
            <Todos todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default App;
