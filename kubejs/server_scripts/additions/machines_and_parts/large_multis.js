ServerEvents.recipes((event) => {
    const id = global.id;

    // === Mega EBF/Vac ===
    event.remove({ output: 'gtceu:mega_vacuum_freezer' });
    event.remove({ output: 'gtceu:mega_blast_furnace' });

    event.recipes.gtceu
        .assembly_line(id('mega_vacuum_freezer'))
        .itemInputs(
            'gtceu:aluminium_frame',
            '2x #gtceu:circuits/uv',
            '4x gtceu:dense_rhodium_plated_palladium_plate',
            '2x gtceu:luv_field_generator',
            '4x gtceu:niobium_titanium_normal_fluid_pipe',
            '32x gtceu:fine_indium_tin_barium_titanium_cuprate_wire',
            '6x gtceu:hsse_screw'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:mega_vacuum_freezer')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:super_vacuum_freezer'))
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(24)
        )
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .assembly_line(id('mega_blast_furnace'))
        .itemInputs(
            'gtceu:tungsten_carbide_frame',
            '2x #gtceu:circuits/uhv',
            '4x gtceu:dense_naquadah_alloy_plate',
            '2x gtceu:zpm_field_generator',
            '4x gtceu:naquadah_spring',
            '32x gtceu:fine_uranium_rhodium_dinaquadide_wire',
            '6x gtceu:hsss_screw'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:mega_blast_furnace')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:super_ebf')).EUt(GTValues.VHA[GTValues.UV]).CWUt(64)
        )
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UHV]);

    // === AE ===
    event.recipes.gtceu
        .assembler(id('large_me_assembler'))
        .itemInputs(
            'kubejs:fluix_steel_casing',
            '2x gtceu:iv_robot_arm',
            'gtceu:iv_emitter',
            '2x #gtceu:circuits/iv',
            '16x gtceu:fine_vanadium_gallium_wire',
            '8x gtceu:uranium_triplatinum_single_wire'
        )
        .itemOutputs('gtceu:large_me_assembler')
        .duration(600)
        .EUt(8192);

    // === MA ===
    event
        .shaped(Item.of('gtceu:essence_replicator'), ['PSP', 'EHE', 'CSC'], {
            P: 'gtceu:double_invar_plate',
            S: '#gtceu:circuits/hv',
            E: 'gtceu:mv_emitter',
            H: 'gtceu:heatproof_machine_casing',
            C: 'gtceu:gold_single_cable',
        })
        .id('start:shaped/essence_replicator');

    event
        .shaped(Item.of('gtceu:essence_enchancer'), ['SAP', 'EHE', 'CAC'], {
            P: 'gtceu:double_stainless_steel_plate',
            A: '#gtceu:circuits/ev',
            S: 'gtceu:hv_sensor',
            E: 'gtceu:hv_emitter',
            H: 'gtceu:clean_machine_casing',
            C: 'gtceu:aluminium_single_cable',
        })
        .id('start:shaped/essence_enhancer');
});
