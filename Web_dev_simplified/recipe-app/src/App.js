import RecipeList from "./RecipeList";

function App() {
    return (
        <div className="App">
            <RecipeList recipes={SampleRecipes}></RecipeList>
        </div>
    );
}

const SampleRecipes = [
    {
        id: 1,
        name: "Plain Chicken",
        servings: 3,
        cookTime: "1:45",
        instructions: "1. Put sal\n2.Put chicken in oven\n3.Eat chicken",
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
        instructions: "1. Put sal\n2.Put chicken in oven\n3.Eat chicken",
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
