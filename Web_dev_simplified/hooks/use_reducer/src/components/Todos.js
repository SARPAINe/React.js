import React, { useState, Fragment, useReducer } from "react";
import Todo from "./Todo";

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
};

//returns new updated state
const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.todoName)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id);
    }
};

const newTodo = (todoName) => {
    return { id: Date.now(), todoName: todoName, complete: false };
};

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [todoName, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { todoName: todoName } });
        setName("");
    };
    console.log(todos);

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todoName}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </form>
            {todos.map((todo) => {
                return (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
                );
            })}
        </Fragment>
    );
};

export default Todos;
