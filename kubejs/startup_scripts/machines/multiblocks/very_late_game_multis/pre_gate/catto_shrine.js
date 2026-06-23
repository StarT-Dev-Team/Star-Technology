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
    event
        .create('catto_shrine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .recipeType('catto_shrine')
        .recipeModifier(GTRecipeModifiers.OC_PERFECT)
        .appearanceBlock(() => Block.getBlock('gtceu:palladium_substation'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'AAAAAAAAAAAAA|             |             |             |             |             |             |             |             |             |             |             |             ',
                'ABAABAAABAABA|   C     C   |   C     C   |   C     C   |   C     C   |             |             |             |             |             |             |             |             ',
                'AADDAAAAADDAA|  DD     DD  |  DDD   DDD  |  DDDD DDDD  |   C DDD C   |             |             |             |             |             |             |             |             ',
                'AADAAAAAAADAA| CD       DC | CD       DC | CD       DC | CC       CC |   CAAAAAC   |             |             |             |             |      E      |             |             ',
                'ABAAFFAFFAABA|    FFFFF    |  D  FFF  D  |  D  GGG  D  |     FFF     |   AFFFFFA   |             |             |      E      |      E      |      E      |             |             ',
                'AAAAFFAFFAAAA|    FFFFF    |    FH HF    |  D GH HG D  |  D FH HF D  |   AFFFFFA   |     I I     |     J J     |     KEK     |             |             |             |             ',
                'AAAAAAAAAAAAA|    FFFFF    |    F H F    |    G H G    |  D F H F D  |   AFFFFFA   |             |             |     KIK     |     KEK     |     KLK     |     KEK     |             ',
                'AAAAFFAFFAAAA|    FFFFF    |    FH HF    |  D GH HG D  |  D FH HF D  |   AFFFFFA   |     I I     |     J J     |     KIK     |     JJJ     |     KMK     |     KLK     |     J J     ',
                'ABAAFFAFFAABA|    FFFFF    |  D  F@F  D  |  D  GGG  D  |     FFF     |   AFFFFFA   |             |             |             |     INI     |     OJO     |     KKK     |             ',
                'AADAAAAAAADAA| CD       DC | CD       DC | CD       DC | CC       CC |   CAAAAAC   |             |             |             |             |             |             |             ',
                'AADDAAAAADDAA|  DD     DD  |  DDD   DDD  |  DDDD DDDD  |   C DDD C   |             |             |             |             |             |             |             |             ',
                'ABAABAAABAABA|   C     C   |   C     C   |   C     C   |   C     C   |             |             |             |             |             |             |             |             ',
                'AAAAAAAAAAAAA|             |             |             |             |             |             |             |             |             |             |             |             ',
            ])
                .whereDict({
                    A: P.gtBlock('assembly_line_grating'),
                    ' ': P.any(),
                    B: P.gtBlock('extreme_engine_intake_casing'),
                    C: P.gtBlock('europium_frame'),
                    D: P.gtBlock('large_scale_assembler_casing'),
                    E: P.block('minecraft:black_wool'),
                    F: P.anyOf([
                        P.gtBlock('palladium_substation'),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 2, prev: 1 }),
                        P.ability(PA.itemOut, { max: 1, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                    ]),
                    G: P.gtBlock('fusion_glass'),
                    H: P.gtBlock('superconducting_coil'),
                    I: P.block('minecraft:white_wool'),
                    J: P.block('minecraft:light_gray_wool'),
                    K: P.block('minecraft:gray_wool'),
                    L: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    M: P.gtBlock('advanced_computer_casing'),
                    '@': P.controller(definition),
                    N: P.block('minecraft:pink_wool'),
                    O: P.heatingCoil(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/machines/scanner'
        );
});
