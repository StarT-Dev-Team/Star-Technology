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
                .where('A', P.gtBlock('assembly_line_grating'))
                .where(' ', P.any())
                .where('B', P.gtBlock('extreme_engine_intake_casing'))
                .where('C', P.gtBlock('europium_frame'))
                .where('D', P.gtBlock('large_scale_assembler_casing'))
                .where('E', P.block('minecraft:black_wool'))
                .where(
                    'F',
                    P.gtBlock('palladium_substation')
                        .or(P.ability(PA.itemIn).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(P.ability(PA.fluidIn).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(P.ability(PA.itemOut).setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(P.ability(PA.maintenance, {exact:1}))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2).setPreviewCount(0))
                )
                .where('G', P.gtBlock('fusion_glass'))
                .where('H', P.gtBlock('superconducting_coil'))
                .where('I', P.block('minecraft:white_wool'))
                .where('J', P.block('minecraft:light_gray_wool'))
                .where('K', P.block('minecraft:gray_wool'))
                .where('L', P.kjsBlock('enriched_naquadah_engine_intake_casing'))
                .where('M', P.gtBlock('advanced_computer_casing'))
                .where('@', P.controller(definition))
                .where('N', P.block('minecraft:pink_wool'))
                .where('O', P.heatingCoil())
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/machines/scanner'
        );
});
