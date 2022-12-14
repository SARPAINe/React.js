import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    console.log(`ExpenseItem evaluated by react! ${title}`);

    const clickHandler = () => {
        setTitle("updated!!");
        console.log(title);
    };
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
};

export default ExpenseItem;
