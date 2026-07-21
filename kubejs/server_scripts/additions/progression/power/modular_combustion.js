ServerEvents.recipes((event) => {
    const id = global.id;
    const componentMaterials = global.componentMaterials;
    const getRecipeTier = global.getRecipeTier;
    const assline = event.recipes.gtceu.assembly_line;

    assline(id('modular_combustion_frame'))
        .itemInputs(
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            Item.of('gtceu:lapotronic_energy_orb_cluster'),
            '4x gtceu:luv_emitter',
            '4x gtceu:luv_sensor',
            '4x gtceu:luv_fluid_regulator',
            `8x gtceu:${componentMaterials.luv.materials.cable}_quadruple_cable`,
            `32x gtceu:fine_${componentMaterials.luv.materials.wireMechanical}_wire`
        )
        .inputFluids(
            `gtceu:${componentMaterials.luv.materials.lubricant} 4608`,
            `gtceu:${componentMaterials.luv.materials.plastic} 1152`
        )
        .itemOutputs('start_core:modular_combustion_frame')
        ['scannerResearch(java.util.function.UnaryOperator)']((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:iridium_frame')).duration(600).EUt(GTValues.VHA[LuV])
        )
        .duration(600)
        .EUtVHA(LuV);

    /** @type {const} */ ([
        { tier: 'luv', researchItem: 'gtceu:extreme_combustion_engine' },
        { tier: 'zpm', researchItem: 'start_core:luv_combustion_module', cwuT: 24 },
        { tier: 'uv', researchItem: 'start_core:zpm_combustion_module', cwuT: 64 },
        { tier: 'uev', researchItem: 'start_core:uv_combustion_module', cwuT: 160 },
    ]).forEach((machine) => {
        const machineType = machine.tier === 'luv' || machine.tier === 'zpm' ? 'combustion' : 'rocket';
        const circuitCount = machineType === 'rocket' ? 8 : 6;
        const plateCount = machineType === 'rocket' ? 4 : 2;
        const otherCounts = machineType === 'rocket' ? 6 : 4;
        const cableType = machineType === 'rocket' ? 'double' : 'single';
        const fluidMultiplier = machineType === 'rocket' ? 2 : 1;

        const { tierMaterial, primMaterial, supMaterial, wireMechanical, cable, lubricant, plastic } =
            componentMaterials[machine.tier].materials;

        const mainRecipe = assline(id(`${machine.tier}_combustion_module`));

        mainRecipe
            .itemInputs(
                `gtceu:${machine.tier}_machine_hull`,
                `${circuitCount}x #gtceu:circuits/${machine.tier}`,
                `${plateCount}x gtceu:dense_${tierMaterial}_plate`,
                `${otherCounts}x gtceu:${primMaterial}_gear`,
                `${otherCounts}x gtceu:small_${supMaterial}_gear`,
                `${otherCounts}x gtceu:${machine.tier}_electric_motor`,
                `${otherCounts}x gtceu:${machine.tier}_electric_piston`,
                `8x gtceu:${cable}_${cableType}_cable`
            )
            .inputFluids(`gtceu:${lubricant} ${4608 * fluidMultiplier}`, `gtceu:${plastic} ${1152 * fluidMultiplier}`)
            .itemOutputs(`start_core:${machine.tier}_combustion_module`)
            .duration(600)
            .EUt(GTValues.VHA[GTValues[getRecipeTier(machine.tier)]]);

        if (machine.tier === 'luv') {
            mainRecipe['scannerResearch(java.util.function.UnaryOperator)']((researchRecipeBuilder) =>
                researchRecipeBuilder.researchStack(Item.of(machine.researchItem)).duration(300).EUt(GTValues.VHA[LuV])
            );
        } else {
            mainRecipe.stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(machine.researchItem))
                    .CWUt(machine.cwuT)
                    .EUt(GTValues.VHA[GTValues[getRecipeTier(machine.tier)]])
            );
        }

        if (machineType === 'rocket') {
            mainRecipe.itemInputs(
                `${otherCounts}x gtceu:${machine.tier}_fluid_regulator`,
                `32x gtceu:fine_${wireMechanical}_wire`
            );
        }
    });
});
