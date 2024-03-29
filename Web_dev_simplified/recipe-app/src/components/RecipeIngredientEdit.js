import React from "react";

export default function RecipeIngredientEdit({
    ingredient,
    handleIngredientChange,
    handleIngredientDelete,
}) {
    function handleChange(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
    }
    return (
        <>
            <input
                className="recipe-edit__input"
                type="text"
                onInput={(e) => handleChange({ name: e.target.value })}
                value={ingredient.name}
            ></input>
            <input
                className="recipe-edit__input"
                type="text"
                onInput={(e) => handleChange({ amount: e.target.value })}
                value={ingredient.amount}
            ></input>
            <button
                onClick={() => handleIngredientDelete(ingredient.id)}
                className="btn btn--danger"
            >
                &times;
            </button>
        </>
    );
}
