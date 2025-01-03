GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('void_miner')
        .category('void_miner')
        .setMaxIOSize(0, 6, 1, 2)
        .setSound(GTSoundEntries.MINER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('void_miner', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('void_miner')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SSS', '#F#', '#F#', '###', '###', '###')
            .aisle('SSS', 'FGF', 'FGF', '#F#', '#F#', '#F#')
            .aisle('SCS', '#F#', '#F#', '###', '###', '###')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1)))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('G', Predicates.blocks('gtceu:steel_gearbox'))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/large_miner", false);
});