GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('large_rotor_machine')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRUDER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.METAL_PIPE)
        .setLayered();

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('large_rotor_machine', 'multiblock')
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType('large_rotor_machine')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('       ', 'B     B', '       ')
            .aisle('C B B C', 'BDB BDB', '       ')
            .aisle('BDBBBDB', 'BEFBFEB', 'C BBB C')
            .aisle('BBBBBBB', 'BGHIHGB', 'BBJBKBB')
            .aisle('BBBBBBB', 'LFGIGFL', 'BELMLEB')
            .aisle('BBBBBBB', 'NGHIHGN', 'BBKBJBB')
            .aisle('BBBBBBB', 'FFGIGFF', 'BELMLEB')
            .aisle('BBBBBBB', 'NGHIHGN', 'BBJBKBB')
            .aisle('BBBBBBB', 'LFGIGFL', 'BELMLEB')
            .aisle('BBBBBBB', 'BGHIHGB', 'BBKBJBB')
            .aisle('BDBBBDB', 'BEF@FEB', 'C BBB C')
            .aisle('C B B C', 'BDB BDB', '       ')
            .aisle('       ', 'B     B', '       ')
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('kubejs:enriched_naquadah_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('C', Predicates.blocks('gtceu:trinaquadalloy_frame'))
            .where('D', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('E', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
            .where('F', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where('G', Predicates.blocks('kubejs:enriched_naquadah_gearbox'))
            .where('H', Predicates.blocks('gtceu:assembly_line_unit'))
            .where('I', Predicates.blocks('gtceu:assembly_line_casing'))
            .where('J', Predicates.blocks('kubejs:lumium_casing'))
            .where('K', Predicates.blocks('kubejs:twinite_casing'))
            .where('L', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
            .where('M', Predicates.blocks('kubejs:shellite_casing'))
            .where('N', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/naquadah/casing',
            'gtceu:block/machines/lathe');

});