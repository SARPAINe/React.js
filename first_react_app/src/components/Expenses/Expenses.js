import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(2019);
    const filterChangeHandler = (chosenYear) => {
        setSelectedYear(chosenYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    selected={selectedYear}
                ></ExpensesFilter>
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    );
};
export default Expenses;
