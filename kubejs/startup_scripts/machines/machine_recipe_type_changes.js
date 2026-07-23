GTCEuStartupEvents.registry('gtceu:machine', () => {
    GCYMMachines.LARGE_MACERATION_TOWER.setRecipeTypes([
        GTRecipeTypes.MACERATOR_RECIPES,
        GTRecipeTypes.get('pulverizer'),
    ]);
});
