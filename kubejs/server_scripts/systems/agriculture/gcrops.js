ServerEvents.recipes((event) => {
    const id = global.id;

    // Climate hatches
    [
        { hatch: 'frosty', catalyst: 'minecraft:ice' },
        { hatch: 'scorching', catalyst: 'minecraft:magma_block' },
        { hatch: 'tropical', catalyst: 'minecraft:jungle_leaves' },
        { hatch: 'desertic', catalyst: 'minecraft:sand' },
        { hatch: 'damp', catalyst: 'minecraft:mud' },
    ].forEach((climate) => {
        const { hatch, catalyst } = climate;
        const itemId = `${hatch}_climate_hatch`;

        event.recipes.gtceu
            .assembly_line(id(itemId))
            .itemInputs(
                'gtceu:iv_machine_hull',
                'gtceu:iv_field_generator',
                '8x gtceu:niobium_titanium_single_cable',
                '6x gtceu:uranium_triplatinum_plate',
                `8x ${catalyst}`
            )
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs(`start_core:${itemId}`)
            ['scannerResearch(java.util.function.UnaryOperator)']((researchRecipeBuilder) =>
                researchRecipeBuilder.researchStack(Item.of(catalyst)).duration(1800).EUt(GTValues.VHA[GTValues.LuV])
            )
            .duration(400)
            .EUtVHA(LuV)
            .addMaterialInfo(true, true);
    });

    event.recipes.gtceu
        .assembler(id('empty_genome_holder_temp'))
        .itemInputs('start_core:neutronium_fluid_cell', 'gtceu:uhv_field_generator', '4x gtceu:tantalum_carbide_plate')
        .itemOutputs('start_core:empty_genome_holder')
        .duration(200)
        .EUtVA(UEV);
});
