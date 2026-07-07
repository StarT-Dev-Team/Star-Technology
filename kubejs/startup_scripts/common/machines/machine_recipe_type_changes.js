GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    GCYMMachines.LARGE_MACERATION_TOWER.setRecipeTypes([
        GTRecipeTypes.MACERATOR_RECIPES,
        GTRecipeTypes.get('pulverizer'),
    ]);
});
