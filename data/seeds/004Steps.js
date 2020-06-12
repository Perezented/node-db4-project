exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Steps")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Steps").insert([
                {
                    StepDescription: "Add water to pot.",
                    StepNumber: 1,
                    RecipeID: 1,
                },
                {
                    StepDescription: "Mix soup powder to the water in the pot.",
                    StepNumber: 2,
                    RecipeID: 1,
                },
                {
                    StepDescription:
                        "Put water soup mixture on heat for 10 min.",
                    StepNumber: 3,
                    RecipeID: 1,
                },
                {
                    StepDescription: "Put water in a cup.",
                    StepNumber: 1,
                    RecipeID: 2,
                },
                {
                    StepDescription: "Add ice to the water.",
                    StepNumber: 2,
                    RecipeID: 2,
                },
                {
                    StepDescription: "Add water to pot.",
                    StepNumber: 1,
                    RecipeID: 3,
                },
            ]);
        });
};
