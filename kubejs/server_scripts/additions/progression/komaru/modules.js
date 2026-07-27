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
    event.recipes.gtceu
        .magmatic_drill(id('abydos'))
        .notConsumable('minecraft:sand')
        .inputFluids('gtceu:kaleidoscope_agitation_serum 25')
        .itemOutputsRanged('gtceu:zapolite_dust', 0, 8192)
        .itemOutputsRanged('gtceu:celestine_dust', 0, 3072)
        .itemOutputsRanged('gtceu:scheelite_dust', 0, 3072)
        .itemOutputsRanged('gtceu:crookesite_dust', 0, 6144)
        .itemOutputsRanged('gtceu:kitkaite_dust', 0, 5120)
        .itemOutputsRanged('gtceu:naquadite_dust', 0, 8192)
        .itemOutputsRanged('gtceu:monazite_dust', 0, 5120)
        .itemOutputsRanged('gtceu:lautarite_dust', 0, 3072)
        .itemOutputsRanged('gtceu:chromite_dust', 0, 5120)
        .itemOutputsRanged('gtceu:xenotime_dust', 0, 6144)
        .itemOutputsRanged('gtceu:strontianite_dust', 0, 6144)
        .itemOutputsRanged('gtceu:titanite_dust', 0, 8192)
        .outputFluidsRanged('gtceu:gritty_akreyrium', 0, 4096000)
        .duration(240)
        .genericStartEU(250000000) //consumes 250MEU to start the recipe
        .EUtVA(UV);

    event.recipes.gtceu
        .magmatic_drill(id('nether'))
        .notConsumable('minecraft:netherrack')
        .inputFluids('gtceu:kaleidoscope_agitation_serum 50')
        .itemOutputsRanged('gtceu:netherrack_dust', 0, 128)
        .itemOutputsRanged('gtceu:atomic_nether_sludge_dust', 0, 96)
        .itemOutputsRanged('gtceu:estaltadyne_dust', 0, 64)
        .itemOutputsRanged('gtceu:mythrillic_dust', 0, 64)
        .itemOutputsRanged('gtceu:adamantamite_dust', 0, 64)
        .itemOutputsRanged('gtceu:enriched_estalt_dust', 0, 32)
        .itemOutputsRanged('gtceu:ancient_debris_dust', 0, 128)
        .itemOutputsRanged('gtceu:debris_dust', 0, 512)
        .outputFluidsRanged('gtceu:infernal_concentrate', 0, 1024000)
        .duration(1332)
        .genericStartEU(2500000000) //consumes 2.5GEU to start the recipe
        .EUtVA(UEV);

    // === Voidic ===
    event.recipes.gtceu
        .voidic_refinement(id('void_1_dust'))
        .inputFluids('gtceu:kaleidoscope_agitation_serum 5')
        .itemOutputsRanged('gtceu:pentlandite_dust', 0, 768)
        .itemOutputsRanged('gtceu:sodalite_dust', 0, 768)
        .itemOutputsRanged('gtceu:gold_dust', 0, 768)
        .itemOutputsRanged('gtceu:silver_dust', 0, 768)
        .itemOutputsRanged('gtceu:coal_dust', 0, 768)
        .itemOutputsRanged('gtceu:realgar_dust', 0, 768)
        .itemOutputsRanged('gtceu:rare_earth_dust', 0, 512)
        .itemOutputsRanged('gtceu:cobaltite_dust', 0, 512)
        .itemOutputsRanged('gtceu:vanadium_magnetite_dust', 0, 512)
        .itemOutputsRanged('gtceu:chromite_dust', 0, 512)
        .itemOutputsRanged('gtceu:magnesite_dust', 0, 512)
        .itemOutputsRanged('gtceu:lepidolite_dust', 0, 512)
        .itemOutputsRanged('gtceu:pyrochlore_dust', 0, 512)
        .itemOutputsRanged('gtceu:pyrolusite_dust', 0, 512)
        .circuit(1)
        .duration(600)
        .genericStartEU(20000000) //consumes 20MEU to start the recipe
        .EUtVA(EV);

    event.recipes.gtceu
        .voidic_refinement(id('void_2_dust'))
        .inputFluids('gtceu:kaleidoscope_agitation_serum 5')
        .itemOutputsRanged('gtceu:barite_dust', 0, 512)
        .itemOutputsRanged('gtceu:chalcopyrite_dust', 0, 512)
        .itemOutputsRanged('gtceu:bornite_dust', 0, 512)
        .itemOutputsRanged('gtceu:zavaritskite_dust', 0, 512)
        .itemOutputsRanged('gtceu:beryllium_dust', 0, 512)
        .itemOutputsRanged('gtceu:tantalite_dust', 0, 512)
        .itemOutputsRanged('gtceu:pollucite_dust', 0, 512)
        .itemOutputsRanged('gtceu:cassiterite_dust', 0, 512)
        .itemOutputsRanged('gtceu:bastnasite_dust', 0, 256)
        .itemOutputsRanged('gtceu:pitchblende_dust', 0, 256)
        .itemOutputsRanged('gtceu:bauxite_dust', 0, 256)
        .itemOutputsRanged('gtceu:tungstate_dust', 0, 256)
        .itemOutputsRanged('gtceu:cooperite_dust', 0, 256)
        .itemOutputsRanged('gtceu:ilmenite_dust', 0, 256)
        .itemOutputsRanged('gtceu:molybdenite_dust', 0, 256)
        .circuit(2)
        .duration(600)
        .genericStartEU(75000000) //consumes 75MEU to start the recipe
        .EUtVA(IV);

    event.recipes.gtceu
        .voidic_refinement(id('void_1_ore'))
        .inputFluids('gtceu:kaleidoscope_agitation_serum 8')
        .itemOutputsRanged('gtceu:crushed_pentlandite_ore', 0, 384)
        .itemOutputsRanged('gtceu:crushed_sodalite_ore', 0, 384)
        .itemOutputsRanged('gtceu:crushed_gold_ore', 0, 384)
        .itemOutputsRanged('gtceu:crushed_silver_ore', 0, 384)
        .itemOutputsRanged('gtceu:crushed_coal_ore', 0, 384)
        .itemOutputsRanged('gtceu:crushed_realgar_ore', 0, 384)
        .itemOutputsRanged('gtceu:crushed_cobaltite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_vanadium_magnetite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_chromite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_magnesite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_lepidolite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_pyrochlore_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_pyrolusite_ore', 0, 256)
        .circuit(11)
        .duration(900)
        .genericStartEU(20000000) //consumes 20MEU to start the recipe
        .EUtVA(EV);

    event.recipes.gtceu
        .voidic_refinement(id('void_2_ore'))
        .inputFluids('gtceu:kaleidoscope_agitation_serum 8')
        .itemOutputsRanged('gtceu:crushed_barite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_chalcopyrite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_bornite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_zavaritskite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_beryllium_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_tantalite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_pollucite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_cassiterite_ore', 0, 256)
        .itemOutputsRanged('gtceu:crushed_bastnasite_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_pitchblende_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_bauxite_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_tungstate_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_cooperite_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_ilmenite_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_molybdenite_ore', 0, 128)
        .circuit(12)
        .duration(900)
        .genericStartEU(75000000) //consumes 75MEU to start the recipe
        .EUtVA(IV);

    event.recipes.gtceu
        .voidic_refinement(id('geode_1_dust'))
        .inputFluids('gtceu:kaleidoscope_agitation_serum 4')
        .itemOutputsRanged('gtceu:diamond_dust', 0, 256)
        .itemOutputsRanged('gtceu:emerald_dust', 0, 256)
        .itemOutputsRanged('gtceu:ruby_dust', 0, 256)
        .itemOutputsRanged('gtceu:sapphire_dust', 0, 256)
        .itemOutputsRanged('gtceu:green_sapphire_dust', 0, 256)
        .itemOutputsRanged('gtceu:quartzite_dust', 0, 256)
        .itemOutputsRanged('gtceu:topaz_dust', 0, 256)
        .itemOutputsRanged('gtceu:blue_topaz_dust', 0, 256)
        .itemOutputsRanged('gtceu:spessartine_dust', 0, 256)
        .itemOutputsRanged('gtceu:certus_quartz_dust', 0, 256)
        .itemOutputsRanged('gtceu:apatite_dust', 0, 256)
        .itemOutputsRanged('gtceu:monazite_dust', 0, 256)
        .itemOutputsRanged('gtceu:realgar_dust', 0, 256)
        .circuit(3)
        .duration(600)
        .genericStartEU(5000000) //consumes 5MEU to start the recipe
        .EUtVA(HV);

    event.recipes.gtceu
        .voidic_refinement(id('geode_1_ore'))
        .inputFluids('gtceu:kaleidoscope_agitation_serum 6')
        .itemOutputsRanged('gtceu:crushed_diamond_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_emerald_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_ruby_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_sapphire_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_green_sapphire_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_quartzite_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_topaz_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_blue_topaz_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_spessartine_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_certus_quartz_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_apatite_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_monazite_ore', 0, 128)
        .itemOutputsRanged('gtceu:crushed_realgar_ore', 0, 128)
        .circuit(13)
        .duration(900)
        .genericStartEU(5000000) //consumes 5MEU to start the recipe
        .EUtVA(HV);

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
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 6480',
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
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 6480',
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
