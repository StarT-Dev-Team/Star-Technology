ServerEvents.recipes((event) => {
    const id = global.id;

    // Controller Recipes

    // Filtrator

    // Sifter

    // Geodes

    // LV
    event.recipes.gtceu
        .rock_filtrator(id('hm_lv_geodes'))
        .itemInputs('64x minecraft:gravel')
        .chancedInput('exnihilosequentia:string_mesh', 10, 0)
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('4x kubejs:quartzite_geode', 3000, 0)
        .chancedOutput('3x kubejs:realgar_geode', 5000, 0)
        .chancedOutput('3x kubejs:sapphire_geode', 3500, 0)
        .chancedOutput('2x kubejs:emerald_geode', 2500, 0)
        .duration(1500)
        .EUt(GTValues.VHA[GTValues.LV]);

    // MV
    event.recipes.gtceu
        .rock_filtrator(id('hm_mv_geodes'))
        .itemInputs('64x minecraft:gravel')
        .chancedInput('exnihilosequentia:flint_mesh', 10, 0)
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('3x kubejs:green_sapphire_geode', 3000, 0)
        .chancedOutput('3x kubejs:spessartine_geode', 3000, 0)
        .chancedOutput('2x kubejs:ruby_geode', 3500, 0)
        .chancedOutput('2x kubejs:diamond_geode', 1500, 0)
        .duration(900)
        .EUt(GTValues.VHA[GTValues.MV]);

    // HV
    event.recipes.gtceu
        .rock_filtrator(id('hm_hv_geodes'))
        .itemInputs('64x minecraft:gravel')
        .chancedInput('exnihilosequentia:iron_mesh', 10, 0)
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('3x kubejs:apatite_geode', 4500, 0)
        .chancedOutput('3x kubejs:monazite_geode', 4000, 0)
        .chancedOutput('3x kubejs:topaz_geode', 3500, 0)
        .chancedOutput('3x kubejs:blue_topaz_geode', 3500, 0)
        .duration(600)
        .EUt(GTValues.VHA[GTValues.HV]);

    // Certus Quartz Geode

    event.recipes.gtceu
        .mixer(id('quartz_mixture'))
        .itemInputs('2x gtceu:nether_quartz_dust', '1x gtceu:quartzite_dust', '2x minecraft:glowstone_dust')
        .inputFluids('gtceu:distilled_water 1000')
        .outputFluids('gtceu:quartz_mixture 1000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .autoclave(id('hm_certus_quartz_geode'))
        .itemInputs('1x kubejs:quartzite_geode')
        .inputFluids('gtceu:quartz_mixture 250')
        .itemOutputs('1x kubejs:certus_quartz_geode')
        .duration(300)
        .EUt(GTValues.VHA[GTValues.EV]);

    // Geode Processing

    const geode_type = (geode, voltage, duration_modifier) => {
        const fluid_type = (fluid_id, fluid, duration_multiplier, output_scaler) => {
            // Raw
            event.recipes.gtceu
                .cutter(id(`hm_${geode}_geode_decomp_${fluid}`))
                .itemInputs(`kubejs:${geode}_geode`)
                .inputFluids(`${fluid_id}:${fluid}`)
                .chancedOutput(`gtceu:raw_${geode}`, 10000 * output_scaler, 0)
                .itemOutputs('2x gtceu:stone_dust')
                .duration(duration_modifier * duration_multiplier * 300)
                .EUt(voltage);
        };
        fluid_type('minecraft', 'water', 2, 0.65);
        fluid_type('gtceu', 'distilled_water', 1.5, 0.75);
        fluid_type('gtceu', 'lubricant', 1, 0.7);

        event.recipes.gtceu
            .macerator(id(`hm_${geode}_geode_decomp`))
            .itemInputs(`kubejs:${geode}_geode`)
            .itemOutputs(`gtceu:impure_${geode}_dust`)
            .duration(duration_modifier * 400)
            .EUt(voltage);
    };

    geode_type('quartzite', GTValues.VHA[GTValues.LV], 0.8);
    geode_type('realgar', GTValues.VA[GTValues.LV], 0.9);
    geode_type('emerald', GTValues.VA[GTValues.LV], 1.2);
    geode_type('sapphire', GTValues.VA[GTValues.LV], 1);

    geode_type('green_sapphire', GTValues.VHA[GTValues.MV], 0.6);
    geode_type('diamond', GTValues.VA[GTValues.MV], 1.6);
    geode_type('spessartine', GTValues.VA[GTValues.MV], 1.2);
    geode_type('ruby', GTValues.VHA[GTValues.MV], 1);

    geode_type('topaz', GTValues.VA[GTValues.HV], 0.7);
    geode_type('monazite', GTValues.VA[GTValues.HV], 0.9);
    geode_type('apatite', GTValues.VHA[GTValues.HV], 0.8);
    geode_type('blue_topaz', GTValues.VA[GTValues.HV], 0.7);

    geode_type('certus_quartz', GTValues.VHA[GTValues.EV], 0.4);
});
