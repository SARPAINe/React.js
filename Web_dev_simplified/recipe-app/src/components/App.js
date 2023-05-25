import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import { v4 as uuid } from "uuid";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
    const [selectedRecipeId, setSelectedRecipeId] = useState();
    const [recipes, setRecipes] = useState(SampleRecipes);
    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    );

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
        handleRecipeSelect,
        handleRecipeChange,
    };

    function handleRecipeSelect(id) {
        setSelectedRecipeId(id);
    }

    function handleRecipeAdd() {
        const newRecipe = {
            id: uuid(),
            name: "",
            servings: 1,
            cookTime: "",
            instructions: "",
            ingredients: [
                {
                    id: uuid(),
                    name: "",
                    amount: "",
                },
            ],
        };

        setSelectedRecipeId(newRecipe.id);
        setRecipes([...recipes, newRecipe]);
    }

    function handleRecipeChange(id, recipe) {
        const newRecipes = [...recipes];
        const index = newRecipes.findIndex((r) => r.id === id);
        newRecipes[index] = recipe;
        setRecipes(newRecipes);
    }

    function handleRecipeDelete(id) {
        if (selectedRecipe != null && selectedRecipeId === id) {
            selectedRecipeId(undefined);
        }
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
    }

    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList recipes={recipes}></RecipeList>
            {selectedRecipe && (
                <RecipeEdit recipe={selectedRecipe}></RecipeEdit>
            )}
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
