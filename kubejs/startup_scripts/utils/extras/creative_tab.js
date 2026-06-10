StartupEvents.modifyCreativeTab('gtceu:machine', (event) => {
    Ingredient.of(/gtceu:.*_fusion_reactor/).stacks.forEach((item) => {
        event.remove(item);
    });
});
