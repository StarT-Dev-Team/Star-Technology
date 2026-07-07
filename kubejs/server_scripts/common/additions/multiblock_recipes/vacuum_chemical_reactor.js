ServerEvents.recipes((event) => {
    const id = global.id;

    const pumpBlockTiers = (tier, rotor, casing) => {
        let pumpRecipe = event
            .shaped(`start_core:${tier}_vacuum_pump`, ['ABA', 'CDC', 'ABA'], {
                A: `gtceu:double_${casing}_plate`,
                B: `gtceu:${rotor}_rotor`,
                C: `gtceu:${tier}_electric_pump`,
                D: `gtceu:${tier}_rotor_holder`,
            })
            .id(`gtceu:${tier}_vacuum_pump_block`);
    };

    pumpBlockTiers('zpm', 'dragonsteel', 'enriched_naquadah');
    pumpBlockTiers('uv', 'prismalium', 'darmstadtium');
    pumpBlockTiers('uhv', 'stellarium', 'neutronium');
    pumpBlockTiers('uev', 'ancient_runicalium', 'mythrolic_alloy');
    pumpBlockTiers('uiv', 'draco_abyssal', 'chaotixic_alloy');

    event.recipes.gtceu
        .assembly_line(id('vacuum_chemical_reaction_chamber_controller'))
        .itemInputs(
            '8x gtceu:enriched_naquadah_frame',
            'gtceu:extreme_chemical_reactor',
            '4x #gtceu:circuits/zpm',
            '4x gtceu:zpm_electric_pump',
            '4x gtceu:enriched_naquadah_quadruple_fluid_pipe',
            '4x gtceu:polycarbonate_huge_fluid_pipe',
            '4x gtceu:polycarbonate_large_fluid_pipe'
        )
        .inputFluids('gtceu:polycarbonate 1152', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 2304')
        .itemOutputs('gtceu:vacuum_chemical_reaction_chamber')
        .duration(2000)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:zpm_gas_collector'))
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(24)
        )
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .assembly_line(id('dual_chambered_vacuum_complex_controller'))
        .itemInputs(
            '16x gtceu:red_steel_frame',
            '4x gtceu:vacuum_chemical_reaction_chamber',
            '4x #gtceu:circuits/uev',
            '8x gtceu:uhv_electric_pump',
            '2x gtceu:uhv_fluid_regulator',
            '16x gtceu:zapolgium_quadruple_fluid_pipe',
            '4x gtceu:zapolgium_huge_fluid_pipe'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 4608', 'gtceu:polycarbonate 3456')
        .itemOutputs('gtceu:dual_chambered_vacuum_complex')
        .duration(4000)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:vacuum_chemical_reaction_chamber'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(96)
        )
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .assembly_line(id('auroric_vacuum_isolation_reactor_controller'))
        .itemInputs(
            '8x gtceu:draco_abyssal_frame',
            '4x gtceu:dual_chambered_vacuum_complex',
            '4x #gtceu:circuits/uiv',
            '16x gtceu:uiv_electric_pump',
            '4x gtceu:uiv_fluid_regulator',
            '16x gtceu:nyanium_quadruple_fluid_pipe',
            '4x gtceu:nyanium_huge_fluid_pipe'
        )
        .inputFluids(
            'gtceu:naquadated_soldering_alloy 9216',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 4320',
            'gtceu:perfluoroelastomer_rubber 3168'
        )
        .itemOutputs('gtceu:auroric_vacuum_isolation_reactor')
        .duration(8000)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:dual_chambered_vacuum_complex'))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(200)
        )
        .EUt(GTValues.VHA[GTValues.UIV]);
});
