ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembler(id('multiblock_upgrade_kit'))
        .itemInputs(
            'thermal:lumium_glass',
            '#gtceu:circuits/ev',
            '2x gtceu:double_signalum_plate',
            '12x gtceu:cobalt_foil'
        )
        .itemOutputs('kubejs:multiblock_upgrade_kit')
        .duration(800)
        .EUtV(HV);

    [
        'bender',
        'centrifuge',
        'electrolyzer',
        'extruder',
        'forming_press',
        'lathe',
        'mixer',
        'ore_washer',
        'sifter',
        'thermal_centrifuge',
        'wiremill',
        'macerator',
        'autoclave',
        'pulverizer',
        'arc_furnace',
        'electromagnetic_separator',
        'rock_crusher',
    ].forEach((machine) => {
        let controllerId = `gtceu:${machine !== 'rock_crusher' ? 't_' : ''}large_${machine}`;
        event.recipes.create
            .item_application(controllerId, [`gtceu:hv_${machine}`, 'kubejs:multiblock_upgrade_kit'])
            .id(`start:item_application/large_${machine}`);
        event.recipes.gtceu
            .canner(id(`large_${machine}`))
            .itemInputs(`gtceu:hv_${machine}`, 'kubejs:multiblock_upgrade_kit')
            .itemOutputs(controllerId)
            .duration(20)
            .EUt(120);
    });

    event.shaped('gtceu:super_electric_ore_factory', ['GCG', 'PHP', 'BPB'], {
        G: 'gtceu:blue_steel_gear',
        P: 'gtceu:black_steel_plate',
        C: '#gtceu:circuits/hv',
        B: 'gtceu:gold_single_cable',
        H: 'gtceu:hv_machine_hull',
    });

    event.shaped('gtceu:super_cutter', ['CBC', 'TSS', 'PVB'], {
        S: 'gtceu:blue_steel_buzz_saw_blade',
        T: 'gtceu:hv_cutter',
        C: '#gtceu:circuits/ev',
        B: 'gtceu:gold_single_cable',
        P: 'gtceu:hv_electric_pump',
        V: 'gtceu:hv_conveyor_module',
    });

    event.shaped('gtceu:super_implosion_compressor', ['PRP', 'CIC', 'BTB'], {
        P: 'gtceu:dense_obsidian_plate',
        R: 'gtceu:industrial_tnt',
        C: '#gtceu:circuits/luv',
        I: 'gtceu:implosion_compressor',
        B: 'gtceu:niobium_titanium_double_cable',
        T: 'gtceu:iv_electric_piston',
    });

    event.shaped('gtceu:super_ebf', ['BPB', 'CFC', 'RSR'], {
        P: 'gtceu:double_black_steel_plate',
        R: 'gtceu:small_tungsten_spring',
        C: '#gtceu:circuits/iv',
        F: 'gtceu:electric_blast_furnace',
        B: 'gtceu:aluminium_double_cable',
        S: 'gtceu:ev_sensor',
    });

    event.shaped('gtceu:super_pyrolyse', ['ICI', 'WRW', 'PCP'], {
        I: 'gtceu:iv_electric_piston',
        C: '#gtceu:circuits/luv',
        W: 'gtceu:graphene_quadruple_cable',
        R: 'gtceu:pyrolyse_oven',
        P: 'gtceu:iv_electric_pump',
    });

    event.shaped('gtceu:super_cracker', ['PCP', 'WRW', 'HCH'], {
        P: 'gtceu:iv_electric_pump',
        C: '#gtceu:circuits/luv',
        W: 'gtceu:graphene_octal_cable',
        R: 'gtceu:cracker',
        H: 'gtceu:hssg_coil_block',
    });

    event.shaped('gtceu:limitless_smelter', ['FFF', 'RCR', 'BRB'], {
        F: 'gtceu:multi_smelter',
        C: 'gtceu:high_temperature_smelting_casing',
        R: '#gtceu:circuits/luv',
        B: 'gtceu:tungsten_single_cable',
    });

    $(
        event.recipes.gtceu
            .assembly_line(id('super_vacuum_freezer'))
            .itemInputs(
                'gtceu:aluminium_frame',
                '2x #gtceu:circuits/luv',
                '4x gtceu:double_kanthal_plate',
                '2x gtceu:iv_fluid_regulator',
                '8x gtceu:stainless_steel_tiny_fluid_pipe',
                '4x gtceu:niobium_titanium_screw'
            )
            .inputFluids('gtceu:soldering_alloy 432')
            .itemOutputs('gtceu:super_vacuum_freezer')
            .duration(400)
            .EUtVHA(IV)
    ).scannerResearch((researchRecipeBuilder) =>
        researchRecipeBuilder.researchStack(Item.of('gtceu:vacuum_freezer')).duration(1800).EUt(GTValues.VHA[EV])
    );

    $(
        event.recipes.gtceu
            .assembly_line(id('super_barrel'))
            .itemInputs(
                '8x gtceu:rhodium_plated_palladium_frame',
                '4x gtceu:double_niobium_titanium_plate',
                '16x gtceu:stainless_steel_plate',
                '4x gtceu:niobium_titanium_huge_fluid_pipe',
                '6x gtceu:niobium_titanium_large_fluid_pipe',
                '4x gtceu:luv_fluid_regulator',
                '4x gtceu:hssg_spring',
                '4x #gtceu:circuits/luv',
                '8x gtceu:niobium_titanium_double_cable'
            )
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('gtceu:super_barrel')
            .duration(400)
            .EUtVHA(LuV)
    ).scannerResearch((researchRecipeBuilder) =>
        researchRecipeBuilder.researchStack(Item.of('gtceu:industrial_barrel')).duration(1800).EUt(GTValues.VHA[LuV])
    );

    event.recipes.gtceu
        .assembly_line(id('super_abs'))
        .itemInputs(
            'gtceu:zpm_alloy_smelter',
            '2x #gtceu:circuits/zpm',
            '2x gtceu:double_naquadah_plate',
            '2x gtceu:zpm_emitter',
            '4x gtceu:europium_spring',
            '8x gtceu:vanadium_gallium_single_cable',
            '4x gtceu:naquadria_screw'
        )
        .inputFluids('gtceu:soldering_alloy 1008', 'gtceu:polybenzimidazole 432')
        .itemOutputs('gtceu:super_abs')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:alloy_blast_smelter')).EUt(GTValues.VHA[LuV]).CWUt(12)
        )
        .duration(400)
        .EUtVHA(ZPM);

    $(
        event.recipes.gtceu
            .assembly_line(id('super_gas_collector'))
            .itemInputs(
                '8x gtceu:iridium_frame',
                '4x gtceu:double_iridium_plate',
                '16x gtceu:stainless_steel_plate',
                '6x gtceu:iridium_large_fluid_pipe',
                '4x gtceu:iv_fluid_regulator',
                '4x gtceu:hssg_spring',
                '4x #gtceu:circuits/luv',
                '8x gtceu:niobium_titanium_double_cable'
            )
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('gtceu:super_gas_collector')
            .duration(400)
            .EUtVHA(LuV)
    ).scannerResearch((researchRecipeBuilder) =>
        researchRecipeBuilder.researchStack(Item.of('gtceu:iv_gas_collector')).duration(1800).EUt(GTValues.VHA[LuV])
    );

    event.shaped('gtceu:industrial_extraction_chamber', ['TPG', 'AMA', 'GCT'], {
        M: 'gtceu:hv_extractor',
        T: 'gtceu:hv_electric_pump',
        P: 'gtceu:tempered_glass',
        C: 'gtceu:lumium_quadruple_wire',
        G: 'gtceu:stainless_steel_plate',
        A: '#gtceu:circuits/hv'
    });

    event.shaped('gtceu:distillery_column', ['TPG', 'AMA', 'GCT'], {
        T: '#gtceu:circuits/iv',
        P: 'gtceu:tempered_glass',
        G: 'gtceu:titanium_normal_fluid_pipe',
        M: 'gtceu:ev_distillery',
        A: 'gtceu:aluminium_quadruple_cable',
        C: 'gtceu:ev_electric_pump'
    });

    event.shaped('gtceu:industrial_brewing_station', ['TPG', 'AMA', 'GCT'], {
        M: 'gtceu:ev_brewery',
        T: 'gtceu:ev_electric_pump',
        P: 'gtceu:laminated_glass',
        C: 'gtceu:aluminium_quadruple_cable',
        G: 'gtceu:titanium_plate',
        A: '#gtceu:circuits/iv'
    });
});
