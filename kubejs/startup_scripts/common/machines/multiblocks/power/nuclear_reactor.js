GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('nuclear_fission')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(1,1,1,1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('nuclear_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('nuclear_fission')
        .generator(true)
        .regressWhenWaiting(false)
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH)
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HHHXHHH',' VHGHV ',' VHGHV ',' VHGHV ','HHHHHHH')
            .aisle(' VHHHV ','  E E  ','  H H  ','  E E  ',' VHHHV ')
            .aisle(' VHHHV ','  HPH  ','  G G  ','  HPH  ',' VHHHV ')
            .aisle(' VHHHV ','  EPE  ','  HPH  ','  EPE  ',' VHHHV ')
            .aisle('HHHHHHH',' VHPHV ',' VHPHV ',' VHPHV ','HHHHHHH')
            .aisle(' VHHHV ','  EPE  ','  HPH  ','  EPE  ',' VHHHV ')
            .aisle(' VHHHV ','  HPH  ','  G G  ','  HPH  ',' VHHHV ')
            .aisle(' VHHHV ','  E E  ','  H H  ','  E E  ',' VHHHV ')
            .aisle('HHH@HHH',' VHGHV ',' VHGHV ',' VHGHV ','HHHHHHH')            
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('V', Predicates.blocks('gtceu:heat_vent'))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('E', Predicates.blocks('kubejs:pallaridium_engine_intake_casing'))
            .where('X', Predicates.abilities(PartAbility.OUTPUT_ENERGY)
                .or(Predicates.abilities(PartAbility.OUTPUT_LASER)))
            .where(' ', Predicates.air())
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor');
        
});