ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ output: /^gtceu:.*firebox_casing/ });
    event.remove({ output: /^gtceu:.*gearbox/ });
    event.remove({ output: /^gtceu:.*pipe_casing/ });
    event.remove({ output: /^gtceu:.*engine_intake_casing/ });
    event.remove({ output: /start_core:enriched_naquadah.*/ });

    const SpecialCasing = (material, tier, f, p, g, e) => {
        let type = material == 'tungsten_steel' ? 'tungstensteel' : material;
        if (f == true) {
            let mod = type == 'enriched_naquadah' ? 'kubejs' : 'gtceu';
            event.recipes.gtceu
                .assembler(id(`${type}_firebox_casing_hm`))
                .itemInputs(`6x gtceu:${material}_plate`, `6x gtceu:${material}_rod`, `gtceu:${material}_frame`)
                .circuit(2)
                .itemOutputs(`2x ${mod}:${type}_firebox_casing`)
                .duration(100)
                .EUt(2 * 4 ** tier);
        }
        if (p == true) {
            let mod = type == 'enriched_naquadah' ? 'kubejs' : 'gtceu';
            let outputType = type == 'polytetrafluoroethylene' ? 'ptfe' : type;
            event.recipes.gtceu
                .assembler(id(`${type}_pipe_casing_hm`))
                .itemInputs(
                    `6x gtceu:${material}_plate`,
                    `6x gtceu:${material}_small_fluid_pipe`,
                    `gtceu:${material}_frame`
                )
                .circuit(3)
                .itemOutputs(`2x ${mod}:${outputType}_pipe_casing`)
                .duration(100)
                .EUt(2 * 4 ** tier);
        }
        if (g == true) {
            let mod = type == 'enriched_naquadah' ? 'kubejs' : 'gtceu';
            event.recipes.gtceu
                .assembler(id(`${type}_gearbox_hm`))
                .itemInputs(
                    `6x gtceu:${material}_plate`,
                    `2x gtceu:${material}_gear`,
                    `4x gtceu:small_${material}_gear`,
                    `gtceu:${material}_frame`
                )
                .circuit(4)
                .itemOutputs(`2x ${mod}:${type}_gearbox`)
                .duration(100)
                .EUt(2 * 4 ** tier);
        }
        if (e == true) {
            let casingType =
                type == 'titanium' ? 'gtceu:stable' : type == 'tungstensteel' ? 'gtceu:robust' : `kubejs:${type}`;
            let engineType = type == 'titanium' ? 'gtceu:' : `kubejs:${type}_`;
            event.recipes.gtceu
                .assembler(id(`${engineType.split(':')[1]}engine_intake_casing_hm`))
                .itemInputs(
                    `4x gtceu:${material}_rotor`,
                    `6x gtceu:${material}_normal_fluid_pipe`,
                    `${casingType}_machine_casing`
                )
                .circuit(7)
                .itemOutputs(`2x ${engineType}engine_intake_casing`)
                .duration(100)
                .EUt(2 * 4 ** tier);
        }
    };
    SpecialCasing('bronze', 0, true, true, true, false);
    SpecialCasing('steel', 1, true, true, true, false);
    SpecialCasing('stainless_steel', 3, false, false, true, false);
    SpecialCasing('polytetrafluoroethylene', 3, false, true, false, false);
    SpecialCasing('titanium', 4, true, true, true, true);
    SpecialCasing('tungsten_steel', 5, true, true, true, false); // made sperate engine load since keeps breaking
    SpecialCasing('enriched_naquadah', 7, true, true, true, true);

    //Tungsten Steel Engine Load
    event.recipes.gtceu
        .assembler(id(`extreme_engine_intake_casing_hm`))
        .itemInputs(
            `4x gtceu:tungsten_steel_rotor`,
            `6x gtceu:tungsten_steel_normal_fluid_pipe`,
            `gtceu:robust_machine_casing`
        )
        .inputFluids(`gtceu:tungsten_steel 144`)
        .circuit(7)
        .itemOutputs(`2x gtceu:extreme_engine_intake_casing`)
        .duration(100)
        .EUt(2 * 4 ** 5);

    // Storages

    event.remove({ id: /gtceu:shaped\/.*_drum/ });
    event.remove({ id: /gtceu:assembler\/.*_drum/ });
    event.remove({ id: 'gtceu:assembler/wood_barrel' });
    event.remove({ id: /gtceu:shaped\/.*_crate/ });
    event.remove({ id: /gtceu:assembler\/.*_crate/ });

    const CrateType = (material, tier) => {
        let material2nd = material == 'wood' ? 'iron' : material;
        event.recipes.gtceu
            .assembler(id(`${material}_crate_hm`))
            .itemInputs(
                `4x gtceu:long_${material2nd}_rod`,
                `4x gtceu:${material2nd}_screw`,
                `6x gtceu:${material}_plate`
            )
            .itemOutputs(`gtceu:${material}_crate`)
            .duration(200)
            .circuit(5)
            .EUt(2 * 4 ** tier);
    };
    event.recipes.create.mechanical_crafting(Item.of(`gtceu:wood_crate`), ['PRSRP', 'PSWSP', 'PRSRP'], {
        S: 'gtceu:iron_screw',
        P: 'gtceu:wood_plate',
        W: '#forge:tools/saws',
        R: 'gtceu:long_iron_rod',
    });

    CrateType('wood', 0);
    CrateType('bronze', 1);
    CrateType('steel', 2);
    CrateType('aluminium', 3);
    CrateType('stainless_steel', 4);
    CrateType('titanium', 5);
    CrateType('tungsten_steel', 6);

    const DrumType = (material, tier, Mod) => {
        let materialRod = material == 'wood' ? 'iron' : material;
        event.recipes.gtceu
            .assembler(id(`${material}_drum_hm`))
            .itemInputs(
                `2x gtceu:long_${materialRod}_rod`,
                `1x gtceu:${material}_large_fluid_pipe`,
                `4x gtceu:${material}_plate`
            )
            .itemOutputs(`${Mod}:${material}_drum`)
            .duration(200)
            .circuit(2)
            .EUt(1 * 4 ** tier);
    };

    DrumType('wood', 0, 'gtceu');
    DrumType('bronze', 1, 'gtceu');
    DrumType('steel', 2, 'gtceu');
    DrumType('gold', 2, 'gtceu');
    DrumType('aluminium', 3, 'gtceu');
    DrumType('stainless_steel', 4, 'gtceu');
    DrumType('titanium', 5, 'gtceu');
    DrumType('tungsten_steel', 6, 'gtceu');
    DrumType('enriched_naquadah', 7, 'start_core');
    DrumType('neutronium', 8, 'start_core');

    // Standard Casing

    const Hulls = (tier, material, wire, bindant, scaler) => {
        let FluidQuant = tier === 'lv' ? 576 : 288;

        event.recipes.gtceu
            .assembler(id(`${tier}_machine_casing`))
            .itemInputs(`8x gtceu:${material}_plate`)
            .itemOutputs(`gtceu:${tier}_machine_casing`)
            .circuit(8)
            .duration(100)
            .EUt(2 * 4 ** scaler);

        event.recipes.gtceu
            .assembler(id(`${tier}_machine_hull`))
            .itemInputs(`gtceu:${tier}_machine_casing`, `4x gtceu:${wire}_single_cable`)
            .inputFluids(`gtceu:${bindant} ${FluidQuant}`)
            .itemOutputs(`gtceu:${tier}_machine_hull`)
            .duration(100)
            .EUt(2 * 4 ** scaler);
    };

    Hulls('ulv', 'wrought_iron', 'red_alloy', 'glue', 0);
    Hulls('lv', 'steel', 'tin', 'glue', 1);
    Hulls('mv', 'aluminium', 'copper', 'polyethylene', 2);
    Hulls('hv', 'stainless_steel', 'gold', 'polyethylene', 3);
    Hulls('ev', 'titanium', 'aluminium', 'polytetrafluoroethylene', 4);
    Hulls('iv', 'tungsten_steel', 'platinum', 'polytetrafluoroethylene', 5);
    Hulls('luv', 'rhodium_plated_palladium', 'niobium_titanium', 'polybenzimidazole', 6);
    Hulls('zpm', 'naquadah_alloy', 'vanadium_gallium', 'polybenzimidazole', 7);
    Hulls('uv', 'darmstadtium', 'yttrium_barium_cuprate', 'polyether_ether_ketone', 8);
    // Hulls('uhv','neutronium','europium','polyether_ether_ketone',9);
    // Hulls('uev','mythrolic_alloy','cerium_tritelluride','poly_34_ethylenedioxythiophene_polystyrene_sulfate',10);
    // Hulls('uiv','chaotixic_alloy','polonium_bismide','poly_34_ethylenedioxythiophene_polystyrene_sulfate',11);

    // Hermetic Casings
    const HermeticCasings = (tier, material, pipe, scaler) => {
        event.recipes.gtceu
            .assembler(id(`${tier}_hermetic_casing`))
            .itemInputs(
                `gtceu:${material}_frame`,
                `gtceu:${pipe}_large_fluid_pipe`,
                `2x gtceu:${tier}_electric_pump`,
                `12x gtceu:${material}_foil`,
                `2x gtceu:double_${material}_plate`
            )
            .itemOutputs(`gtceu:${tier}_hermetic_casing`)
            .duration(200)
            .EUt(7.5 * 4 ** scaler);
    };
    HermeticCasings('lv', 'steel', 'steel', 1);
    HermeticCasings('mv', 'aluminium', 'polyethylene', 2);
    HermeticCasings('hv', 'stainless_steel', 'polytetrafluoroethylene', 3);
    HermeticCasings('ev', 'titanium', 'titanium', 4);
    HermeticCasings('iv', 'tungsten_steel', 'niobium_titanium', 5);
    // HermeticCasings('luv','rhodium_plated_palladium','iridium',6);
    // HermeticCasings('zpm','naquadah_alloy','europium',7);
    // HermeticCasings('uv','darmstadtium','enriched_naquadah',8);
    // HermeticCasings('uhv','neutronium','neutronium',9);

    // Standard Casings

    event.recipes.gtceu
        .assembler(id('treatedwood_casing'))
        .itemInputs('gtceu:treated_wood_frame', '6x gtceu:treated_wood_plate', '4x gtceu:brass_screw')
        .inputFluids('gtceu:rubber 144')
        .itemOutputs('2x kubejs:treatedwood_casing')
        .duration(100)
        .EUt(30);

    // Doubled Casings

    // Complex Casings

    // Cleanrooms Casings
    event.remove({ output: 'gtceu:plascrete' });
    event.remove({ output: 'gtceu:cleanroom_glass' });
    const CleanroomCasing = (type, inputs) => {
        event.recipes.gtceu
            .assembler(id(type))
            .itemInputs('gtceu:steel_frame', inputs, '12x gtceu:polytetrafluoroethylene_foil')
            .inputFluids('gtceu:construction_foam 2000')
            .circuit(5)
            .itemOutputs(`2x gtceu:${type}`)
            .duration(200)
            .EUt(120);
    };
    CleanroomCasing('plascrete', '6x gtceu:stone_plate');
    CleanroomCasing('cleanroom_glass', '6x gtceu:glass_plate');

    event.recipes.gtceu
        .assembler(id('filter_casing'))
        .itemInputs(
            '2x gtceu:plascrete',
            '2x gtceu:mv_electric_motor',
            'gtceu:steel_rotor',
            '12x gtceu:steel_rod',
            '2x gtceu:copper_single_cable'
        )
        .inputFluids('gtceu:soldering_alloy 216')
        .itemOutputs('2x gtceu:filter_casing')
        .duration(400)
        .EUt(480);

    // 'sterile_filter'

    // Assembly Line Casings
});
