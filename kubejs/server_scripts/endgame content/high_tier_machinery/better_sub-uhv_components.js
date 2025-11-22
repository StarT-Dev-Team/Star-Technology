ServerEvents.recipes(event => {
    const id = global.id;

    // === Controller Blocks === 
    event.recipes.gtceu.assembly_line(id('component_nexus'))
        .itemInputs('4x gtceu:assembly_line', '6x #gtceu:circuits/uev', '6x gtceu:uhv_robot_arm', '8x kubejs:uhv_high_strength_panel',
            '2x gtceu:uhv_fluid_regulator', '4x kubejs:uhv_voltage_coil', '32x gtceu:fine_stellarium_wire', '16x gtceu:neutronium_screw',
            '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 25056', 'gtceu:lubricant 16000', 'gtceu:utopian_akreyrium 1000')
        .itemOutputs('gtceu:component_nexus')
        .duration(1800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_assembler'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UEV]);

    // === Bulk Components ===
    const assemblyMaterials = (scale, Tier, Tier1, Tier2, Primary, Secondary, MechanicalWire, Cable, Pipe, SuperConductor, Catalyst, SenMat, SenFoil, Frame, eut) => {
        const componentTypesAssemblyLine = (type, inputs, fluids, circuit) => {
            if (Tier == 'uv') {
                event.recipes.gtceu.component_nexus(id(`${Tier}_${type}`))
                    .itemInputs(inputs)
                    .inputFluids(fluids)
                    .inputFluids(`gtceu:naquadria 576`)
                    .itemOutputs(`1x gtceu:${Tier}_${type}`)
                    .duration(600)
                    .cleanroom(CleanroomType.getByName('stabilized'))
                    .EUt(eut);
            } else {
                event.recipes.gtceu.component_nexus(id(`${Tier}_${type}`))
                    .itemInputs(inputs)
                    .inputFluids(fluids)
                    .itemOutputs(`1x gtceu:${Tier}_${type}`)
                    .duration(600)
                    .cleanroom(CleanroomType.getByName('stabilized'))
                    .EUt(eut);
            }
        }
        componentTypesAssemblyLine('electric_motor', [`1x gtceu:long_magnetic_samarium_rod`, `4x gtceu:long_${Primary}_rod`, `4x gtceu:${Primary}_ring`, `8x gtceu:${Primary}_round`, `64x gtceu:fine_${MechanicalWire}_wire`, `2x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${72 * (2 ** scale)}`, `gtceu:lubricant ${125 * (2 ** scale)}`], 0);

        componentTypesAssemblyLine('electric_pump', [`1x gtceu:${Tier}_electric_motor`, `1x gtceu:${Pipe}_normal_fluid_pipe`, `2x gtceu:${Primary}_plate`, `8x gtceu:${Primary}_screw`, `${2 * (scale + 1)}x gtceu:silicone_rubber_ring`, `1x gtceu:${Secondary}_rotor`, `2x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${72 * (2 ** scale)}`, `gtceu:lubricant ${125 * (2 ** scale)}`], 1);

        componentTypesAssemblyLine('conveyor_module', [`2x gtceu:${Tier}_electric_motor`, `2x gtceu:${Primary}_plate`, `4x gtceu:${Primary}_ring`, `16x gtceu:${Primary}_round`, `4x gtceu:${Primary}_screw`, `2x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${72 * (2 ** scale)}`, `gtceu:lubricant ${125 * (2 ** scale)}`, `gtceu:styrene_butadiene_rubber ${scale * 1152}`], 2);

        componentTypesAssemblyLine('electric_piston', [`1x gtceu:${Tier}_electric_motor`, `4x gtceu:${Primary}_plate`, `4x gtceu:${Primary}_ring`, `16x gtceu:${Primary}_round`, `4x gtceu:${Primary}_rod`, `1x gtceu:${Secondary}_gear`, `2x gtceu:small_${Secondary}_gear`, `2x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${72 * (2 ** scale)}`, `gtceu:lubricant ${125 * (2 ** scale)}`], 3);

        componentTypesAssemblyLine('robot_arm', [`4x gtceu:long_${Primary}_rod`, `1x gtceu:${Primary}_gear`, `3x gtceu:small_${Primary}_gear`, `2x gtceu:${Tier}_electric_motor`, `1x gtceu:${Tier}_electric_piston`, `1x #gtceu:circuits/${Tier}`, `2x #gtceu:circuits/${Tier1}`, `4x #gtceu:circuits/${Tier2}`, `4x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${576 * scale}`, `gtceu:lubricant ${125 * (2 ** scale)}`], 4);

        componentTypesAssemblyLine('field_generator', [`1x gtceu:${Frame}_frame`, `6x gtceu:${Frame}_plate`, `1x gtceu:${Catalyst}`, `2x gtceu:${Tier}_emitter`, `2x #gtceu:circuits/${Tier}`, `128x gtceu:fine_${SuperConductor}_wire`, `4x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${576 * scale}`], 5);

        if (Tier === "zpm") {
            componentTypesAssemblyLine('emitter', [`1x gtceu:${Frame}_frame`, `1x gtceu:${Tier}_electric_motor`, `4x gtceu:long_${SenMat}_rod`, `2x gtceu:${Catalyst}`, `2x #gtceu:circuits/${Tier}`, `96x gtceu:${SenFoil}_foil`, `4x gtceu:${Cable}_single_cable`],
                [`gtceu:soldering_alloy ${144 * (2 ** scale)}`], 6);

            componentTypesAssemblyLine('sensor', [`1x gtceu:${Frame}_frame`, `1x gtceu:${Tier}_electric_motor`, `4x gtceu:${SenMat}_plate`, `2x gtceu:${Catalyst}`, `2x #gtceu:circuits/${Tier}`, `96x gtceu:${SenFoil}_foil`, `4x gtceu:${Cable}_single_cable`],
                [`gtceu:soldering_alloy ${144 * (2 ** scale)}`], 7);
        } else {
            componentTypesAssemblyLine('emitter', [`1x gtceu:${Frame}_frame`, `1x gtceu:${Tier}_electric_motor`, `4x gtceu:long_${SenMat}_rod`, `1x gtceu:${Catalyst}`, `2x #gtceu:circuits/${Tier}`, `96x gtceu:${SenFoil}_foil`, `4x gtceu:${Cable}_single_cable`],
                [`gtceu:soldering_alloy ${144 * (2 ** scale)}`], 6);

            componentTypesAssemblyLine('sensor', [`1x gtceu:${Frame}_frame`, `1x gtceu:${Tier}_electric_motor`, `4x gtceu:${SenMat}_plate`, `1x gtceu:${Catalyst}`, `2x #gtceu:circuits/${Tier}`, `96x gtceu:${SenFoil}_foil`, `4x gtceu:${Cable}_single_cable`],
                [`gtceu:soldering_alloy ${144 * (2 ** scale)}`], 7);
        }

    }

    assemblyMaterials(1, 'luv', 'iv', 'ev', 'hsss', 'hsss', 'ruridit', 'niobium_titanium', 'niobium_titanium', 'indium_tin_barium_titanium_cuprate', 'quantum_star', 'ruridit', 'palladium', 'hsss', 6000);
    assemblyMaterials(2, 'zpm', 'luv', 'iv', 'osmiridium', 'osmiridium', 'europium', 'vanadium_gallium', 'polybenzimidazole', 'uranium_rhodium_dinaquadide', 'quantum_star', 'osmiridium', 'trinium', 'naquadah_alloy', 24000);
    assemblyMaterials(3, 'uv', 'zpm', 'luv', 'tritanium', 'naquadah_alloy', 'americium', 'yttrium_barium_cuprate', 'naquadah', 'enriched_naquadah_trinium_europium_duranide', 'gravi_star', 'tritanium', 'naquadria', 'tritanium', 100000);

});
