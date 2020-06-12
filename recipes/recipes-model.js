const db = require("../data/db-connection");
module.exports = {
    getRecipes,
};

function getRecipes() {
    return db("Recipes");
}
