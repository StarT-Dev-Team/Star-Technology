GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('catto_shrine')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SUS_RECORD)
        .setLayered();
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('catto_shrine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .recipeType('catto_shrine')
        .recipeModifier(GTRecipeModifiers.OC_PERFECT)
        .appearanceBlock(() => Block.getBlock('gtceu:palladium_substation'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAAAAAAAAAAAA', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
            .aisle('ABAABAAABAABA', '   C     C   ', '   C     C   ', '   C     C   ', '   C     C   ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
            .aisle('AADDAAAAADDAA', '  DD     DD  ', '  DDD   DDD  ', '  DDDD DDDD  ', '   C DDD C   ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
            .aisle('AADAAAAAAADAA', ' CD       DC ', ' CD       DC ', ' CD       DC ', ' CC       CC ', '   CAAAAAC   ', '             ', '             ', '             ', '             ', '      E      ', '             ', '             ') 
            .aisle('ABAAFFAFFAABA', '    FFFFF    ', '  D  FFF  D  ', '  D  GGG  D  ', '     FFF     ', '   AFFFFFA   ', '             ', '             ', '      E      ', '      E      ', '      E      ', '             ', '             ') 
            .aisle('AAAAFFAFFAAAA', '    FFFFF    ', '    FH HF    ', '  D GH HG D  ', '  D FH HF D  ', '   AFFFFFA   ', '     I I     ', '     J J     ', '     KEK     ', '             ', '             ', '             ', '             ') 
            .aisle('AAAAAAAAAAAAA', '    FFFFF    ', '    F H F    ', '    G H G    ', '  D F H F D  ', '   AFFFFFA   ', '             ', '             ', '     KIK     ', '     KEK     ', '     KLK     ', '     KEK     ', '             ') 
            .aisle('AAAAFFAFFAAAA', '    FFFFF    ', '    FH HF    ', '  D GH HG D  ', '  D FH HF D  ', '   AFFFFFA   ', '     I I     ', '     J J     ', '     KIK     ', '     JJJ     ', '     KMK     ', '     KLK     ', '     J J     ') 
            .aisle('ABAAFFAFFAABA', '    FFFFF    ', '  D  F@F  D  ', '  D  GGG  D  ', '     FFF     ', '   AFFFFFA   ', '             ', '             ', '             ', '     INI     ', '     OJO     ', '     KKK     ', '             ') 
            .aisle('AADAAAAAAADAA', ' CD       DC ', ' CD       DC ', ' CD       DC ', ' CC       CC ', '   CAAAAAC   ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
            .aisle('AADDAAAAADDAA', '  DD     DD  ', '  DDD   DDD  ', '  DDDD DDDD  ', '   C DDD C   ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
            .aisle('ABAABAAABAABA', '   C     C   ', '   C     C   ', '   C     C   ', '   C     C   ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
            .aisle('AAAAAAAAAAAAA', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
                .where('A', Predicates.blocks('gtceu:assembly_line_grating'))
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
                .where('C', Predicates.blocks('gtceu:europium_frame'))
                .where('D', Predicates.blocks('gtceu:large_scale_assembler_casing'))
                .where('E', Predicates.blocks('minecraft:black_wool'))
                .where(
                    'F',
                    Predicates.blocks('gtceu:palladium_substation')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                )
                .where('G', Predicates.blocks('gtceu:fusion_glass'))
                .where('H', Predicates.blocks('gtceu:superconducting_coil'))
                .where('I', Predicates.blocks('minecraft:white_wool'))
                .where('J', Predicates.blocks('minecraft:light_gray_wool'))
                .where('K', Predicates.blocks('minecraft:gray_wool'))
                .where('L', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
                .where('M', Predicates.blocks('gtceu:advanced_computer_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('N', Predicates.blocks('minecraft:pink_wool'))
                .where('O', Predicates.heatingCoils())
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/machines/scanner'
        );
});
