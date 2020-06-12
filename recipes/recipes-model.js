const db = require("../data/db-connection");
module.exports = {
    getRecipes,
    getShoppingList,
};

function getRecipes() {
    return db("Recipes");
}
function getShoppingList(recipeID) {
    return db("Recipe").where("RecipeID", recipeID);
}
