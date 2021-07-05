exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Ingredients")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Ingredients").insert([
                { Ingredient: "Water" },
                { Ingredient: "Soup Powder" },
                { Ingredient: "Heat" },
                { Ingredient: "Ice" },
            ]);
        });
};
