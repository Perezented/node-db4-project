const db = require("../data/db-connection");
module.exports = {
    getRecipes,
    getShoppingList,
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
