const db = require("../data/db-connection");
module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};

function getRecipes() {
    return db("Recipes");
}
function getShoppingList(recipeID) {
    return db("Recipe")
        .where("RecipeID", recipeID)
        .join("Ingredients", "Recipe.IngredientsID", "Ingredients.id")
        .select("Ingredient", "Quantity");
}
//getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
function getInstructions(recipeID) {
    return db("Steps")
        .where("RecipeID", recipeID)
        .orderBy("Steps.StepNumber")
        .select("StepDescription", "StepNumber");
}
