const express = require("express");
const router = express();

const recipes = require("./recipes-model");

router.get("/", (req, res) => {
    return recipes
        .getRecipes()
        .then((recipes) => {
            console.log(recipes);
            res.status(200).json(recipes);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                err: "Error trying to get the recipes",
                err,
            });
        });
});
router.get("/shoppingList/:id", (req, res) => {
    return recipes
        .getShoppingList(req.params.id)
        .then((recipe) => {
            console.log(recipe);
            res.status(200).json(recipe);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "Could not retrieve the recipe",
                err,
            });
        });
});
router.get("/instructions/:id", (req, res) => {
    return recipes
        .getInstructions(req.params.id)
        .then((recipeInstruction) => {
            console.log(recipeInstruction);
            res.status(200).json(recipeInstruction);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "Could not retrieve the recipe",
                err,
            });
        });
});
module.exports = router;
