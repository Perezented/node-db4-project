exports.up = function (knex) {
    return knex.schema
        .createTable("Recipes", (tbl) => {
            tbl.increments("RecipeID");
            tbl.string("Recipe").notNullable().index();
        })
        .createTable("Ingredients", (tbl) => {
            tbl.increments();
            tbl.string("Ingredient").notNullable().index();
        })
        .createTable("Recipe", (tbl) => {
            tbl.increments();
            tbl.float("Quantity").notNullable();
            tbl.integer("RecipeID")
                .unsigned()
                .references("Recipes.RecipeID")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.integer("IngredientsID")
                .unsigned()
                .references("Ingredients.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })
        .createTable("Steps", (tbl) => {
            tbl.increments();
            tbl.string("StepDescription", 255).notNullable();
            tbl.integer("RecipeID")
                .unsigned()
                .references("Recipes.RecipeID")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("Steps")
        .dropTableIfExists("Recipe")
        .dropTableIfExists("Ingredients")
        .dropTableIfExists("Recipes");
};
