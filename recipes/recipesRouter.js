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
router.get("/:id", (req, res) => {
    return recipes
        .getShoppingList(req.params.id)
        .then((recipe) => {
            console.log(recipe);
        })
        .catch((err) => {
            console.log(err);
        });
});
module.exports = router;
