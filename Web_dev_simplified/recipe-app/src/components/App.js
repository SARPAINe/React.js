import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import { v4 as uuid } from "uuid";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
    const [recipes, setRecipes] = useState(SampleRecipes);
    //hooks are called in order
    useEffect(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        console.log(recipeJSON);
        if (recipeJSON != null) {
            setRecipes(JSON.parse(recipeJSON));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
    }, [recipes]);

    const recipeContextValue = {
        handleRecipeAdd,
        handleRecipeDelete,
    };

    function handleRecipeAdd() {
        const newRecipe = {
            id: uuid(),
            name: "New",
            servings: 1,
            cookTime: "1:00",
            instructions: "Instr.",
            ingredients: [
                {
                    id: uuid(),
                    name: "Name",
                    amount: "1 Tbs",
                },
            ],
        };

        setRecipes([...recipes, newRecipe]);
    }

    function handleRecipeDelete(id) {
        console.log("delete clicked" + id);
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
    }

    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList recipes={recipes}></RecipeList>
        </RecipeContext.Provider>
    );
}

const SampleRecipes = [
    {
        id: 1,
        name: "Plain Chicken",
        servings: 3,
        cookTime: "1:45",
        instructions: "1. Put salt\n2. Put chicken in oven\n3. Eat chicken",
        ingredients: [
            {
                id: 1,
                name: "Chicken",
                amount: "2 pounds",
            },
            {
                id: 2,
                name: "Salt",
                amount: "2 Tbs",
            },
        ],
    },
    {
        id: 2,
        name: "Plain Pork",
        servings: 4,
        cookTime: "0:45",
        instructions: "1. Put salt\n2. Put chicken in oven\n3. Eat chicken",
        ingredients: [
            {
                id: 1,
                name: "Pork",
                amount: "3 pounds",
            },
            {
                id: 2,
                name: "Paprika",
                amount: "2 Tbs",
            },
        ],
    },
];

export default App;
