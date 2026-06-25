GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('magmatic_drill')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(1, 12, 1, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT);

    event
        .create('voidic_refinement')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(1, 15, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT);

    event
        .create('riftic_infusion_assembly')
        .category('komaru')
        .setEUIO('in')
        .setHasResearchSlot(true)
        .setMaxIOSize(16, 1, 6, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT);

    event
        .create('riftic_enhancement')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT);

    event
        .create('rimula_extraction')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // === Basic Modules ===
    event
        .create('magmatic_drilling_module', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('magmatic_drill')
        .appearanceBlock(() => Block.getBlock('kubejs:primordial_ware_casing'))
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
            GTRecipeModifiers.CONSUME_EU_TO_START,
        ])
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AFA', 'ADA', 'ADA', 'AAA')
                .aisle('ABA', 'CEC', 'CEC', 'CCC')
                .aisle('AAA', 'A@A', 'AAA', 'AAA')
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('primordial_ware_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    B: P.kjsBlock('superdense_assembly_control_casing'),
                    C: P.kjsBlock('primordial_assembly_grating'),
                    D: P.kjsBlock('draco_resilient_fusion_glass'),
                    E: P.coreBlock('advanced_fusion_coil'),
                    F: P.ability(PA.modAutoNode),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/riftic_multis/primordial_ware_casing',
            'gtceu:block/multiblock/hpca'
        );

    event
        .create('voidic_refinement_module', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('voidic_refinement')
        .appearanceBlock(() => Block.getBlock('kubejs:primordial_ware_casing'))
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
            GTRecipeModifiers.CONSUME_EU_TO_START,
        ])
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AFA', 'ADA', 'ADA', 'AAA')
                .aisle('ABA', 'CEC', 'CEC', 'CCC')
                .aisle('AAA', 'A@A', 'AAA', 'AAA')
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('primordial_ware_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    B: P.kjsBlock('superdense_assembly_control_casing'),
                    C: P.kjsBlock('primordial_assembly_grating'),
                    D: P.kjsBlock('draco_resilient_fusion_glass'),
                    E: P.coreBlock('advanced_fusion_coil'),
                    F: P.ability(PA.modAutoNode),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/riftic_multis/primordial_ware_casing',
            'gtceu:block/multiblock/hpca'
        );

    event
        .create('rimula_extraction_module', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rimula_extraction')
        .appearanceBlock(() => Block.getBlock('kubejs:primordial_ware_casing'))
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
            GTRecipeModifiers.CONSUME_EU_TO_START,
        ])
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AFA', 'ADA', 'ADA', 'AAA')
                .aisle('ABA', 'CEC', 'CEC', 'CCC')
                .aisle('AAA', 'A@A', 'AAA', 'AAA')
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('primordial_ware_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    B: P.kjsBlock('superdense_assembly_control_casing'),
                    C: P.kjsBlock('primordial_assembly_grating'),
                    D: P.kjsBlock('draco_resilient_fusion_glass'),
                    E: P.coreBlock('advanced_fusion_coil'),
                    F: P.ability(PA.modAutoNode),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/riftic_multis/primordial_ware_casing',
            'gtceu:block/multiblock/hpca'
        );

    $KomaruFrameMachine.addModule('gtceu:magmatic_drilling_module', 'basic');
    $KomaruFrameMachine.addModule('gtceu:voidic_refinement_module', 'basic');
    $KomaruFrameMachine.addModule('gtceu:rimula_extraction_module', 'basic');

    // === Advanced Modules ===
    event
        .create('riftic_infusion_assembly_module', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('riftic_infusion_assembly')
        .appearanceBlock(() => Block.getBlock('kubejs:primordial_ware_casing'))
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
            GTRecipeModifiers.CONSUME_EU_TO_START,
        ])
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('CCC', 'AAA', 'AAA', 'AAA', 'AAA')
                .aisle('CCC', 'DED', 'DED', 'DED', 'AFA')
                .aisle('CCC', 'CBC', 'CBC', 'CBC', 'ABA')
                .aisle('CCC', 'A@A', 'AAA', 'AAA', 'AAA')
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('primordial_ware_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.compIn, { exact: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    B: P.kjsBlock('superdense_assembly_control_casing'),
                    C: P.kjsBlock('primordial_assembly_grating'),
                    D: P.kjsBlock('draco_resilient_fusion_glass'),
                    E: P.coreBlock('advanced_fusion_coil'),
                    F: P.ability(PA.modAutoNode),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/riftic_multis/primordial_ware_casing',
            'gtceu:block/multiblock/hpca'
        );

    event
        .create('riftic_enhancement_module', 'multiblock')
        .machine((holder) => new $OpticalComputationMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('riftic_enhancement')
        .appearanceBlock(() => Block.getBlock('kubejs:primordial_ware_casing'))
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
            GTRecipeModifiers.CONSUME_EU_TO_START,
        ])
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('CCC', 'AAA', 'AAA', 'AAA', 'AAA')
                .aisle('CCC', 'DED', 'DED', 'DED', 'AFA')
                .aisle('CCC', 'CBC', 'CBC', 'CBC', 'ABA')
                .aisle('CCC', 'A@A', 'AAA', 'AAA', 'AAA')
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('primordial_ware_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.compIn, { exact: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    B: P.kjsBlock('superdense_assembly_control_casing'),
                    C: P.kjsBlock('primordial_assembly_grating'),
                    D: P.kjsBlock('draco_resilient_fusion_glass'),
                    E: P.coreBlock('advanced_fusion_coil'),
                    F: P.ability(PA.modAutoNode),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/riftic_multis/primordial_ware_casing',
            'gtceu:block/multiblock/hpca'
        );

    $KomaruFrameMachine.addModule('gtceu:riftic_infusion_assembly_module', 'advanced');
    $KomaruFrameMachine.addModule('gtceu:riftic_enhancement_module', 'advanced');
});
