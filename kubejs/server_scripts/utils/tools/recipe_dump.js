// priority: -10000
ServerEvents.recipes((event) => {
    // Add conditions here to filter the recipes you want to export
    const matcher = { mod: '' };

    let foundRecipes = false;

    // Exports all the matched recipes in the console is a json format for easier copy pasting
    event.forEachRecipe(matcher, (recipe) => {
        console.info(`Recipe: ${recipe.id} ->\n"${recipe.id}": ${recipe.json}`);
        foundRecipes = true;
    });

    if (!foundRecipes) {
        console.info(`No recipes found that matche ${matcher}`);
    }
});
