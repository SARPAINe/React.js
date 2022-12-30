import React, { Fragment } from "react";
import AvailabeMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
const Meals = () => {
    return (
        <Fragment>
            <MealsSummary></MealsSummary>
            <AvailabeMeals></AvailabeMeals>
        </Fragment>
    );
};
export default Meals;
