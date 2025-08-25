GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('pressure_heat_chamber')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 3, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('super_pressure_heat_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('pressure_heat_chamber')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HHH SSS HHH', '     S     ', '    SSS    ', '    SSS    ', '   S S S   ', ' SS SSS SS ', 'SSSSSSSSSSS', ' SS SSS SS ', '   S S S   ', '    SSS    ', '    SSS    ', '     S     ', 'HHH SSS HHH')
            .aisle('HSH HSH HSH', ' T       T ', ' T       T ', ' T       T ', ' T   G   T ', 'ST  GGG  TS', 'STS GGG STS', 'ST  GGG  TS', ' T   G   T ', ' T       T ', ' T       T ', ' T       T ', 'HSH HSH HSH')
            .aisle('HHSHSSSHSHH', '           ', '           ', '   GGGGG   ', '   GG GG   ', 'S  G   G  S', 'SSSG T GSSS', 'S  G   G  S', '   GG GG   ', '   GGGGG   ', '           ', '           ', 'HHSHSSSHSHH')
            .aisle('  HSHSHSH  ', '   FFFFF   ', '   GGGGG   ', '  GT   TG  ', 'S G     G S', '  G     G  ', 'S GT T TG S', '  G     G  ', 'S G     G S', '  GT   TG  ', '   GGGGG   ', '   FFFFF   ', '  HSHEHSH  ')
            .aisle('SHSHHSHHSHS', '   FFFFF   ', 'S  GGGGG  S', 'S G T T G S', '  G     G  ', 'SG       GS', 'SG  TTT  GS', 'SG       GS', '  G     G  ', 'S G T T G S', 'S  GGGGG  S', '   FFFFF   ', 'SHSHHEHHSHS')
            .aisle('SSSSSSSSSSS', 'S  FFFFF  S', 'S  GGGGG  S', 'S G  T  G S', 'SG   T   GS', 'SG   T   GS', 'SGTTTTTTTGS', 'SG   T   GS', 'SG   T   GS', 'S G  T  G S', 'S  GGGGG  S', 'S  FFFFF  S', 'SSSEEEEESSS')
            .aisle('SHSHHSHHSHS', '   FFFFF   ', 'S  GGGGG  S', 'S G T T G S', '  G     G  ', 'SG       GS', 'SG  TTT  GS', 'SG       GS', '  G     G  ', 'S G T T G S', 'S  GGGGG  S', '   FFFFF   ', 'SHSHHEHHSHS')
            .aisle('  HSHSHSH  ', '   FFFFF   ', '   GGGGG   ', '  GT   TG  ', 'S G     G S', '  G     G  ', 'S GT T TG S', '  G     G  ', 'S G     G S', '  GT   TG  ', '   GGGGG   ', '   FFFFF   ', '  HSHEHSH  ')
            .aisle('HHSHSSSHSHH', '           ', '           ', '   GGGGG   ', '   GG GG   ', 'S  G   G  S', 'SSSG T GSSS', 'S  G   G  S', '   GG GG   ', '   GGGGG   ', '           ', '           ', 'HHSHSSSHSHH')
            .aisle('HSH HSH HSH', ' T       T ', ' T       T ', ' T       T ', ' T   G   T ', 'ST  GGG  TS', 'STS GGG STS', 'ST  GGG  TS', ' T   G   T ', ' T       T ', ' T       T ', ' T       T ', 'HSH HSH HSH')
            .aisle('HHH SSS HHH', '     S     ', '    SSS    ', '    SSS    ', '   S S S   ', ' SS SSS SS ', 'SSSSSCSSSSS', ' SS SSS SS ', '   S S S   ', '    SSS    ', '    SSS    ', '     S     ', 'HHH SSS HHH')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GCYMBlocks.CASING_STRESS_PROOF.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('T', Predicates.blocks('gtceu:stellarium_frame'))
            .where('G', Predicates.blocks('kubejs:signalum_casing'))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_TUNGSTENSTEEL.get()))
            .where('E', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
            .where('H', Predicates.blocks(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get()))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/implosion_compressor', false);
            
});