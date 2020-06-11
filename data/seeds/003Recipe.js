exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Recipe")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Recipe").insert([
                { RecipeID: 1, IngredientsID: "1", Quantity: "5oz" },
                { RecipeID: 1, IngredientsID: "2", Quantity: "1 pinch" },
                { RecipeID: 1, IngredientsID: "3", Quantity: "10 minutes" },
                { RecipeID: 2, IngredientsID: "1", Quantity: "6oz" },
                { RecipeID: 2, IngredientsID: "4", Quantity: "4-5 Cubes" },
                { RecipeID: 3, IngredientsID: "1", Quantity: "8oz" },
                { RecipeID: 3, IngredientsID: "3", Quantity: "2 minutes" },
            ]);
        });
};
