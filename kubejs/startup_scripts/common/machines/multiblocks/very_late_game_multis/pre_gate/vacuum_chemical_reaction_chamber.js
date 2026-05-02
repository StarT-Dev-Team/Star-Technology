// made by Scarlet and n1
GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('vacuum_chemical_reaction_chamber', 'multiblock')
        .machine((holder) => new $VacuumChemicalReactorMachine(holder))
        .rotationState(RotationState.ALL)
        .tooltips([
            Text.translate("block.start_core.breaker_line")
        ])
        .paginatedTooltips([[
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.0"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.1"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.2"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.3"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.4"),
            Text.translate("block.start_core.breaker_line"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.5")
        ]])
        .recipeType('vacuum_chemical_reaction_chamber')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, $StarTRecipeModifiers.VACUUM_CHEMICAL_REACTION_CHAMBER, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('gtceu:palladium_substation'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAABB     ', 'C   C     ', 'C   C     ', 'C   C     ', 'AAABB     ')
            .aisle('ABBBB     ', ' DDD      ', ' DDD      ', ' DDD      ', 'ABBBB     ')
            .aisle('ABBBBBBBCC', ' DDD   BBC', ' E D    BB', ' DDD   BBC', 'ABBBBBBBCC')
            .aisle('ABBBBBBBBC', ' DDDDFDD  ', ' E DDFDD  ', ' DDDDFDD  ', 'ABBBBBBBBC')
            .aisle('ABBBBBBBBB', ' DDDDDDD  ', ' EGGGGGH  ', ' DGDDDGD  ', 'ABIIIIIBBB')
            .aisle('ABBBBBBBBC', ' DDDDFDD  ', ' E DDFDD  ', ' DDDDFDD  ', 'ABBBBBBBBC')
            .aisle('ABBBBBBBCC', ' DDD   BBC', ' E D    BB', ' DDD   BBC', 'ABBBBBBBCC')
            .aisle('ABBBB     ', ' DDD      ', ' DDD      ', ' DDD      ', 'ABBBB     ')
            .aisle('AAABB     ', 'CBBBC     ', 'CB@BC     ', 'CBBBC     ', 'AAABB     ')
            .where('A', Predicates.blocks('kubejs:pallaridium_firebox_casing'))
            .where('B', Predicates.blocks('gtceu:palladium_substation')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(8).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setMinGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities($StarTPartAbility.REDSTONE_INTERFACE).setMaxGlobalLimited(4).setPreviewCount(0)))
            .where(' ', Predicates.any())
            .where('C', Predicates.blocks('gtceu:tungsten_carbide_frame'))
            .where('D', Predicates.blocks('kubejs:polycarbonate_casing'))
            .where('E', Predicates.blocks('gtceu:fusion_glass'))
            .where('F', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('G', Predicates.blocks('kubejs:pallaridium_pipe_casing'))
            .where('H', Predicates.blocks('start_core:zpm_vacuum_pump'))
            .where('I', Predicates.blocks('kubejs:pallaridium_engine_intake_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/machines/chemical_reactor');
});