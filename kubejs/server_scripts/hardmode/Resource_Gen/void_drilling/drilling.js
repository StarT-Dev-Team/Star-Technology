ServerEvents.recipes((event) => {
    const id = global.id;

    // Controller Recipes

    // Drilling Formulas

    const drilling_formula = (type, voltage, dura, inputsItems, inputsFluids) => {
        event.recipes.gtceu
            .mixer(id(`${type}_drilling_formula`))
            .itemInputs(inputsItems)
            .inputFluids(inputsFluids)
            .outputFluids(`gtceu:${type}_drilling_formula 1000`)
            .duration(dura)
            .EUt(voltage);
    };

    drilling_formula('concentrate', GTValues.VA[GTValues.LV], 240, 'gtceu:quartz_sand_dust', [
        'gtceu:drilling_fluid 1000',
    ]);
    drilling_formula('residue', GTValues.VA[GTValues.MV], 320, 'gtceu:calcite_dust', ['gtceu:drilling_fluid 1000']);
    drilling_formula('slurry', GTValues.VHA[GTValues.HV], 320, 'gtceu:stone_dust', [
        'gtceu:drilling_fluid 1000',
        'gtceu:sulfuric_acid 200',
    ]);
    drilling_formula('poor_mixture', GTValues.VA[GTValues.HV], 480, 'gtceu:metal_mixture_dust', [
        'gtceu:drilling_fluid 1000',
        'minecraft:lava 500',
    ]);
    drilling_formula('rich_mixture', GTValues.VA[GTValues.EV], 360, 'gtceu:metal_mixture_dust', [
        'gtceu:poor_mixture_drilling_formula 1000',
        'minecraft:lava 500',
    ]);

    event.recipes.gtceu
        .distillation_tower(id('diluted_drilling_formula'))
        .inputFluids('gtceu:diluted_drilling_formula 1000')
        .outputFluids('gtceu:drilling_fluid 400', 'minecraft:water 600')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.MV]);

    // Drilling

    const void_drilling = (formula, in_quantity, output, out_ratio, dust, voltage, dura) => {
        event.recipes.gtceu
            .void_excavation(id(`${formula}_void_drilling`))
            .inputFluids(`gtceu:${formula}_drilling_formula ${in_quantity * 1000}`)
            .outputFluids(
                `${output} ${in_quantity * out_ratio * 900}`,
                `gtceu:diluted_drilling_formula ${in_quantity * (1 - out_ratio) * 900}`
            )
            .chancedOutput(dust, 2000, 0)
            .chancedOutput(dust, 2000, 0)
            .chancedOutput(dust, 2000, 0)
            .chancedOutput(dust, 2000, 0)
            .chancedOutput(dust, 2000, 0)
            .chancedOutput(dust, 2000, 0)
            .duration(dura)
            .EUt(voltage);
    };

    void_drilling(
        'concentrate',
        8,
        'gtceu:raw_ore_concentrate',
        0.6,
        'gtceu:quartz_sand_dust',
        GTValues.VA[GTValues.LV],
        800
    );
    void_drilling('residue', 8, 'gtceu:rare_ore_residue', 0.75, 'gtceu:calcite_dust', GTValues.VA[GTValues.MV], 720);
    void_drilling('slurry', 12, 'gtceu:raw_ore_slurry', 0.75, 'gtceu:stone_dust', GTValues.VHA[GTValues.HV], 960);
    void_drilling(
        'poor_mixture',
        20,
        'gtceu:impure_molten_ore_mixture',
        0.3,
        'gtceu:metal_mixture_dust',
        GTValues.VA[GTValues.HV],
        1600
    );
    void_drilling(
        'rich_mixture',
        24,
        'gtceu:pure_molten_ore_mixture',
        0.75,
        'gtceu:metal_mixture_dust',
        GTValues.VA[GTValues.UEV],
        1200
    ); //UEV as to lock progression
});
