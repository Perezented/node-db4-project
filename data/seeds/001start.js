exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Recipes")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Recipes").insert([
                {
                    Recipe: "Soup",
                },
                {
                    Recipe: "Ice Cold Water",
                },
                {
                    Recipe: "Warm Water",
                },
            ]);
        });
};
