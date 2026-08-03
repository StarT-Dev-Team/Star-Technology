ServerEvents.recipes((event) => {
    const id = global.id;

    // === Rimula ===
    event.recipes.gtceu
        .rimula_extraction(id('riftion'))
        .chancedInput('kubejs:runic_wave_generator', 10, -1)
        .inputFluids('gtceu:kaleidoscope_agitation_serum 1250')
        .outputFluids('gtceu:riftion_extract 128000')
        .outputFluids('gtceu:highly_unstable_rift_source 27500')
        .duration(1800)
        .genericStartEU(25000000000) //consumes 25GEU to start the recipe
        .EUtVHA(UIV);

    // === Magmatic ===
    $(
        event.recipes.gtceu
            .magmatic_drill(id('abydos'))
            .notConsumable('minecraft:sand')
            .inputFluids('gtceu:kaleidoscope_agitation_serum 25')
            .outputFluidsRanged('gtceu:gritty_akreyrium', 0, 4096000)
            .duration(240)
            .genericStartEU(250000000) //consumes 250MEU to start the recipe
            .EUtVA(UV)
    ).rangedItemOutputs([
        { id: 'gtceu:zapolite_dust', range: [0, 8192] },
        { id: 'gtceu:celestine_dust', range: [0, 3072] },
        { id: 'gtceu:scheelite_dust', range: [0, 3072] },
        { id: 'gtceu:crookesite_dust', range: [0, 6144] },
        { id: 'gtceu:kitkaite_dust', range: [0, 5120] },
        { id: 'gtceu:naquadite_dust', range: [0, 8192] },
        { id: 'gtceu:monazite_dust', range: [0, 5120] },
        { id: 'gtceu:lautarite_dust', range: [0, 3072] },
        { id: 'gtceu:chromite_dust', range: [0, 5120] },
        { id: 'gtceu:xenotime_dust', range: [0, 6144] },
        { id: 'gtceu:strontianite_dust', range: [0, 6144] },
        { id: 'gtceu:titanite_dust', range: [0, 8192] },
    ]);

    $(
        event.recipes.gtceu
            .magmatic_drill(id('nether'))
            .notConsumable('minecraft:netherrack')
            .inputFluids('gtceu:kaleidoscope_agitation_serum 50')
            .outputFluidsRanged('gtceu:infernal_concentrate', 0, 1024000)
            .duration(1332)
            .genericStartEU(2500000000) //consumes 2.5GEU to start the recipe
            .EUtVA(UEV)
    ).rangedItemOutputs([
        { id: 'gtceu:netherrack_dust', range: [0, 128] },
        { id: 'gtceu:atomic_nether_sludge_dust', range: [0, 96] },
        { id: 'gtceu:estaltadyne_dust', range: [0, 64] },
        { id: 'gtceu:mythrillic_dust', range: [0, 64] },
        { id: 'gtceu:adamantamite_dust', range: [0, 64] },
        { id: 'gtceu:enriched_estalt_dust', range: [0, 32] },
        { id: 'gtceu:ancient_debris_dust', range: [0, 128] },
        { id: 'gtceu:debris_dust', range: [0, 512] },
    ]);

    // === Voidic ===
    $(
        event.recipes.gtceu
            .voidic_refinement(id('void_1_dust'))
            .inputFluids('gtceu:kaleidoscope_agitation_serum 5')
            .circuit(1)
            .duration(600)
            .genericStartEU(20000000) //consumes 20MEU to start the recipe
            .EUtVA(EV)
    ).rangedItemOutputs([
        { id: 'gtceu:pentlandite_dust', range: [0, 768] },
        { id: 'gtceu:sodalite_dust', range: [0, 768] },
        { id: 'gtceu:gold_dust', range: [0, 768] },
        { id: 'gtceu:silver_dust', range: [0, 768] },
        { id: 'gtceu:coal_dust', range: [0, 768] },
        { id: 'gtceu:realgar_dust', range: [0, 768] },
        { id: 'gtceu:rare_earth_dust', range: [0, 512] },
        { id: 'gtceu:cobaltite_dust', range: [0, 512] },
        { id: 'gtceu:vanadium_magnetite_dust', range: [0, 512] },
        { id: 'gtceu:chromite_dust', range: [0, 512] },
        { id: 'gtceu:magnesite_dust', range: [0, 512] },
        { id: 'gtceu:lepidolite_dust', range: [0, 512] },
        { id: 'gtceu:pyrochlore_dust', range: [0, 512] },
        { id: 'gtceu:pyrolusite_dust', range: [0, 512] },
    ]);

    $(
        event.recipes.gtceu
            .voidic_refinement(id('void_2_dust'))
            .inputFluids('gtceu:kaleidoscope_agitation_serum 5')
            .circuit(2)
            .duration(600)
            .genericStartEU(75000000) //consumes 75MEU to start the recipe
            .EUtVA(IV)
    ).rangedItemOutputs([
        { id: 'gtceu:barite_dust', range: [0, 512] },
        { id: 'gtceu:chalcopyrite_dust', range: [0, 512] },
        { id: 'gtceu:bornite_dust', range: [0, 512] },
        { id: 'gtceu:zavaritskite_dust', range: [0, 512] },
        { id: 'gtceu:beryllium_dust', range: [0, 512] },
        { id: 'gtceu:tantalite_dust', range: [0, 512] },
        { id: 'gtceu:pollucite_dust', range: [0, 512] },
        { id: 'gtceu:cassiterite_dust', range: [0, 512] },
        { id: 'gtceu:bastnasite_dust', range: [0, 256] },
        { id: 'gtceu:pitchblende_dust', range: [0, 256] },
        { id: 'gtceu:bauxite_dust', range: [0, 256] },
        { id: 'gtceu:tungstate_dust', range: [0, 256] },
        { id: 'gtceu:cooperite_dust', range: [0, 256] },
        { id: 'gtceu:ilmenite_dust', range: [0, 256] },
        { id: 'gtceu:molybdenite_dust', range: [0, 256] },
    ]);

    $(
        event.recipes.gtceu
            .voidic_refinement(id('void_1_ore'))
            .inputFluids('gtceu:kaleidoscope_agitation_serum 8')
            .circuit(11)
            .duration(900)
            .genericStartEU(20000000) //consumes 20MEU to start the recipe
            .EUtVA(EV)
    ).rangedItemOutputs([
        { id: 'gtceu:crushed_pentlandite_ore', range: [0, 384] },
        { id: 'gtceu:crushed_sodalite_ore', range: [0, 384] },
        { id: 'gtceu:crushed_gold_ore', range: [0, 384] },
        { id: 'gtceu:crushed_silver_ore', range: [0, 384] },
        { id: 'gtceu:crushed_coal_ore', range: [0, 384] },
        { id: 'gtceu:crushed_realgar_ore', range: [0, 384] },
        { id: 'gtceu:crushed_cobaltite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_vanadium_magnetite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_chromite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_magnesite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_lepidolite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_pyrochlore_ore', range: [0, 256] },
        { id: 'gtceu:crushed_pyrolusite_ore', range: [0, 256] },
    ]);

    $(
        event.recipes.gtceu
            .voidic_refinement(id('void_2_ore'))
            .inputFluids('gtceu:kaleidoscope_agitation_serum 8')
            .circuit(12)
            .duration(900)
            .genericStartEU(75000000) //consumes 75MEU to start the recipe
            .EUtVA(IV)
    ).rangedItemOutputs([
        { id: 'gtceu:crushed_barite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_chalcopyrite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_bornite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_zavaritskite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_beryllium_ore', range: [0, 256] },
        { id: 'gtceu:crushed_tantalite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_pollucite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_cassiterite_ore', range: [0, 256] },
        { id: 'gtceu:crushed_bastnasite_ore', range: [0, 128] },
        { id: 'gtceu:crushed_pitchblende_ore', range: [0, 128] },
        { id: 'gtceu:crushed_bauxite_ore', range: [0, 128] },
        { id: 'gtceu:crushed_tungstate_ore', range: [0, 128] },
        { id: 'gtceu:crushed_cooperite_ore', range: [0, 128] },
        { id: 'gtceu:crushed_ilmenite_ore', range: [0, 128] },
        { id: 'gtceu:crushed_molybdenite_ore', range: [0, 128] },
    ]);

    $(
        event.recipes.gtceu
            .voidic_refinement(id('geode_1_dust'))
            .inputFluids('gtceu:kaleidoscope_agitation_serum 4')
            .circuit(3)
            .duration(600)
            .genericStartEU(5000000) //consumes 5MEU to start the recipe
            .EUtVA(HV)
    ).rangedItemOutputs([
        { id: 'gtceu:diamond_dust', range: [0, 256] },
        { id: 'gtceu:emerald_dust', range: [0, 256] },
        { id: 'gtceu:ruby_dust', range: [0, 256] },
        { id: 'gtceu:sapphire_dust', range: [0, 256] },
        { id: 'gtceu:green_sapphire_dust', range: [0, 256] },
        { id: 'gtceu:quartzite_dust', range: [0, 256] },
        { id: 'gtceu:topaz_dust', range: [0, 256] },
        { id: 'gtceu:blue_topaz_dust', range: [0, 256] },
        { id: 'gtceu:spessartine_dust', range: [0, 256] },
        { id: 'gtceu:certus_quartz_dust', range: [0, 256] },
        { id: 'gtceu:apatite_dust', range: [0, 256] },
        { id: 'gtceu:monazite_dust', range: [0, 256] },
        { id: 'gtceu:realgar_dust', range: [0, 256] },
    ]);

    $(
        event.recipes.gtceu
            .voidic_refinement(id('geode_1_ore'))
            .inputFluids('gtceu:kaleidoscope_agitation_serum 6')
            .circuit(13)
            .duration(900)
            .genericStartEU(5000000) //consumes 5MEU to start the recipe
            .EUtVA(HV)
    ).rangedItemOutputs([
        { id: 'gtceu:crushed_diamond_ore', range: [0, 128] },
        { id: 'gtceu:crushed_emerald_ore', range: [0, 128] },
        { id: 'gtceu:crushed_ruby_ore', range: [0, 128] },
        { id: 'gtceu:crushed_sapphire_ore', range: [0, 128] },
        { id: 'gtceu:crushed_green_sapphire_ore', range: [0, 128] },
        { id: 'gtceu:crushed_quartzite_ore', range: [0, 128] },
        { id: 'gtceu:crushed_topaz_ore', range: [0, 128] },
        { id: 'gtceu:crushed_blue_topaz_ore', range: [0, 128] },
        { id: 'gtceu:crushed_spessartine_ore', range: [0, 128] },
        { id: 'gtceu:crushed_certus_quartz_ore', range: [0, 128] },
        { id: 'gtceu:crushed_apatite_ore', range: [0, 128] },
        { id: 'gtceu:crushed_monazite_ore', range: [0, 128] },
        { id: 'gtceu:crushed_realgar_ore', range: [0, 128] },
    ]);

    // === Modules ===
    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)
    const riftAss = 'riftic_infusion_assembly';
    const assLine = 'assembly_line';

    researchBuilder(
        riftAss,
        'riftic_enhancement_module',
        [
            '6x kubejs:komaru_plating',
            '8x kubejs:komaru_rift_caller',
            '24x gtceu:uiv_emitter',
            '8x kubejs:uiv_micropower_router',
        ],
        [
            'gtceu:neutrindium_soldering_alloy 17280',
            'gtceu:primordial_residue 37500',
            'gtceu:prismatic_hypergurmalium 37500',
            'gtceu:riftic_concentrate 37500',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfonate 6480',
            'gtceu:faematter 100000',
        ],
        ['gtceu:riftic_enhancement_module'],
        2400,
        500,
        500 * 1200,
        GTValues.VA[UIV],
        'gtceu:primordial_infusion'
    );

    researchBuilder(
        riftAss,
        'rimula_extraction_module',
        [
            '2x kubejs:komaru_plating',
            '4x kubejs:komaru_rift_caller',
            '6x gtceu:uiv_sensor',
            '4x kubejs:uiv_micropower_router',
        ],
        [
            'gtceu:neutrindium_soldering_alloy 17280',
            'gtceu:pure_dragon_breath 75000',
            'gtceu:borealic_concentrate 3456',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfonate 6480',
            'gtceu:netherite_triselex_oxide 3168',
            'gtceu:faematter 125000',
        ],
        ['gtceu:rimula_extraction_module'],
        1200,
        500,
        500 * 1200,
        GTValues.VA[UIV],
        'start_core:abyssal_harvester'
    );

    researchBuilder(
        assLine,
        'voidic_refinement_module',
        [
            '2x kubejs:komaru_plating',
            '4x gtceu:uiv_fluid_regulator',
            '2x gtceu:uiv_sensor',
            '4x kubejs:uiv_micropower_router',
        ],
        ['gtceu:neutrindium_soldering_alloy 8640', 'gtceu:drilling_fluid 4096000', 'gtceu:faematter 100000'],
        ['gtceu:voidic_refinement_module'],
        1200,
        500,
        500 * 1200,
        GTValues.VHA[UXV],
        'gtceu:void_extractor'
    );

    researchBuilder(
        assLine,
        'magmatic_drilling_module',
        [
            '2x kubejs:komaru_plating',
            '4x gtceu:uiv_fluid_regulator',
            '64x kubejs:voidic_reinforced_mesh',
            '4x kubejs:uiv_micropower_router',
        ],
        ['gtceu:neutrindium_soldering_alloy 8640', 'gtceu:netherite_triselex_oxide 6480', 'gtceu:faematter 100000'],
        ['gtceu:magmatic_drilling_module'],
        1200,
        500,
        500 * 1200,
        GTValues.VHA[UXV],
        'start_core:zpm_fluid_drilling_rig'
    );

    researchBuilder(
        assLine,
        'riftic_infusion_assembly_module',
        [
            '6x kubejs:komaru_plating',
            '2x kubejs:komaru_rift_caller',
            '32x gtceu:uiv_emitter',
            '8x kubejs:uiv_micropower_router',
        ],
        ['gtceu:neutrindium_soldering_alloy 17280', 'gtceu:pure_dragon_breath 75000', 'gtceu:faematter 250000'],
        ['gtceu:riftic_infusion_assembly_module'],
        1800,
        500,
        500 * 1800,
        GTValues.VA[UXV],
        'gtceu:multithreaded_component_synthesis_forge'
    );
});
