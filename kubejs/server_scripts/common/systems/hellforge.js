ServerEvents.recipes((event) => {
    const id = global.id;

    //Hell Forge Recipes
    const hellForgeMat = (type, IngQuant, inputs, plasma, catalyst, HeatMK, eut, SecDurPerIng) => {
        event.recipes.gtceu
            .hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`)
            .inputFluids(inputs)
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .itemOutputs(`${IngQuant}x gtceu:tiny_hellfire_ash_dust`)
            .EUt(eut)
            .circuit(inputs.length);
        event.recipes.gtceu
            .hellforge(id(`${type}_boosted`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`)
            .inputFluids(inputs)
            .itemInputs(`${IngQuant}x kubejs:${catalyst}_catalyst`)
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant * 0.85)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144 * 1.25}`)
            .itemOutputs(`${IngQuant}x gtceu:tiny_hellfire_ash_dust`)
            .EUt(eut)
            .circuit(inputs.length + 10);

        // EBF Gas Swap
        if (HeatMK < 1800) {
            event.replaceInput(
                { id: `gtceu:electric_blast_furnace/blast_${type}_gas` },
                Fluid.of('gtceu:krypton 10'),
                Fluid.of('gtceu:xenon 10')
            );
        }
    };
    hellForgeMat(
        'mythrolic_alloy',
        11,
        ['gtceu:mythril 720', 'gtceu:hsss 576', 'gtceu:darmstadtium 288'],
        'argon',
        'infernal',
        568,
        GTValues.VHA[GTValues.UEV],
        43.6
    );
    hellForgeMat(
        'magmada_alloy',
        8,
        ['gtceu:adamantine 576', 'gtceu:neutronium 144', 'gtceu:rtm_alloy 432'],
        'magmatic',
        'infernal',
        708,
        GTValues.VHA[GTValues.UEV],
        52.4
    );
    hellForgeMat(
        'starium_alloy',
        8,
        ['gtceu:nether_star_concentrate 576', 'gtceu:trinaquadalloy 288', 'gtceu:estalt 288'],
        'oxygen',
        'infernal',
        633,
        GTValues.VHA[GTValues.UEV],
        39.8
    );
    hellForgeMat(
        'enriched_pallarovium_alloy',
        17,
        ['gtceu:seaborgium 288', 'gtceu:palladium 1152', 'gtceu:enriched_estalt 432', 'gtceu:flerovium 576'],
        'nickel',
        'infernal',
        878,
        GTValues.VHA[GTValues.UIV],
        37.4
    );
    hellForgeMat(
        'nyanium',
        14,
        [
            'gtceu:aurourium 1008',
            'gtceu:uranium_rhodium_dinaquadide 576',
            'gtceu:magnesium_nitride 144',
            'gtceu:pure_netherite 288',
        ],
        'nitrogen',
        'ascendant',
        444,
        GTValues.VA[GTValues.UHV],
        76.8
    );
    hellForgeMat(
        'rhenium_super_composite_alloy',
        16,
        [
            'gtceu:rhenium 576',
            'gtceu:weapon_grade_naquadah 288',
            'gtceu:mercury_barium_calcium_cuprate 1008',
            'gtceu:titanium_carbide 288',
            'gtceu:samarium 144',
        ],
        'preon',
        'abyssal',
        1723,
        GTValues.VHA[GTValues.UXV],
        46.1
    );
    hellForgeMat(
        'abyssal_alloy',
        14,
        ['gtceu:xeproda 720', 'gtceu:blue_alloy 432', 'gtceu:void 576', 'gtceu:flerovium 144', 'gtceu:zapolgium 144'],
        'voidic',
        'abyssal',
        1586,
        GTValues.VHA[GTValues.UIV],
        38.5
    );
    hellForgeMat(
        'chaotixic_alloy',
        24,
        [
            'gtceu:rhexis 864',
            'gtceu:stellite_100 288',
            'gtceu:hafnium 144',
            'gtceu:electrum 1728',
            'gtceu:vanadium_steel 432',
        ],
        'paradox',
        'abyssal',
        1472,
        GTValues.VHA[GTValues.UIV],
        43.7
    );
    hellForgeMat(
        'ohmderblux_alloy',
        23,
        [
            'gtceu:chalyblux 720',
            'gtceu:maraging_steel_300 288',
            'gtceu:zirconium 576',
            'gtceu:glowstone 1296',
            'gtceu:ultimet 432',
        ],
        'paradox',
        'abyssal',
        1351,
        GTValues.VHA[GTValues.UIV],
        46.9
    );
    hellForgeMat(
        'draconyallium',
        258,
        [
            'gtceu:duranium 9792',
            'gtceu:silver 2880',
            'gtceu:oxygen_plasma 94000',
            'gtceu:nitrogen_plasma 76000',
            'gtceu:dragon_breath 25800',
        ],
        'voidic',
        'abyssal',
        1444,
        GTValues.VA[GTValues.UIV],
        16.0
    );
    hellForgeMat(
        'draco_abyssal',
        9,
        ['gtceu:draconyallium 144', 'gtceu:abyssal_alloy 432', 'gtceu:void 288', 'gtceu:ancient_runicalium 432'],
        'preon',
        'abyssal',
        1658,
        GTValues.VHA[GTValues.UXV],
        39.4
    );
    hellForgeMat(
        'expetidalloy_d_17',
        17,
        [
            'gtceu:hafnide_ceramic_base 288',
            'gtceu:hastelloy_c_276 1584',
            'gtceu:dragonsteel 432',
            'gtceu:rhodium_plated_palladium 144',
        ],
        'americium',
        'infernal',
        863,
        GTValues.VA[GTValues.UIV],
        32.7
    );
    hellForgeMat(
        'rhenate_w',
        33,
        [
            'gtceu:rhenium 288',
            'gtceu:tungsten 720',
            'gtceu:neutronium 144',
            'gtceu:rose_gold 2592',
            'gtceu:neodymium 1008',
        ],
        'tin',
        'ascendant',
        946,
        GTValues.VA[GTValues.UIV],
        34.3
    );
    hellForgeMat(
        'borealic_steel',
        20,
        [
            'gtceu:prismalium 288',
            'gtceu:rose_gold 576',
            'gtceu:aurourium 1152',
            'gtceu:tritan_steel 288',
            'gtceu:ancient_netherite 144',
            'gtceu:borealic_concentrate 432',
        ],
        'argon',
        'ascendant',
        974,
        GTValues.VA[GTValues.UIV],
        31.5
    );
    hellForgeMat(
        'ultispestalloy_cmsh',
        27,
        [
            'gtceu:magmada_alloy 288',
            'gtceu:shellite 432',
            'gtceu:ultimet 2160',
            'gtceu:hastelloy_c_276 864',
            'gtceu:hafnium 144',
        ],
        'iron',
        'ascendant',
        916,
        GTValues.VA[GTValues.UIV],
        29.4
    );
    hellForgeMat(
        'trikoductive_neutro_steel',
        17,
        [
            'gtceu:isovol 864',
            'gtceu:tritan_steel 720',
            'gtceu:estalt 144',
            'gtceu:ruthenium_trinium_americium_neutronate 432',
            'gtceu:twinite 288',
        ],
        'helium',
        'infernal',
        981,
        GTValues.VA[GTValues.UIV],
        35.1
    );
    hellForgeMat(
        'melastrium_mox',
        13,
        ['gtceu:osmiridium 288', 'gtceu:astrenalloy_nx 1008', 'gtceu:melodium 432', 'gtceu:potin 144'],
        'nickel',
        'ascendant',
        955,
        GTValues.VA[GTValues.UIV],
        31.4
    );
    hellForgeMat(
        'hvga_steel',
        16,
        [
            'gtceu:signalum 144',
            'gtceu:hssg 432',
            'gtceu:draco_abyssal 144',
            'gtceu:hsla_steel 1152',
            'gtceu:tritan_steel 432',
        ],
        'magmatic',
        'abyssal',
        1343,
        GTValues.VA[GTValues.UXV],
        21.6
    );
    hellForgeMat(
        'mythrotight_carbide_steel',
        19,
        [
            'gtceu:watertight_steel 1152',
            'gtceu:mythril 288',
            'gtceu:samarium_iron_arsenic_oxide 720',
            'gtceu:tungsten_carbide 432',
            'gtceu:kanthal 144',
        ],
        'iron',
        'ascendant',
        966,
        GTValues.VA[GTValues.UIV],
        36.7
    );
    hellForgeMat(
        'aerorelient_steel',
        17,
        [
            'gtceu:cobalt_brass 432',
            'gtceu:red_steel 864',
            'gtceu:watertight_steel 288',
            'gtceu:hsse 720',
            'gtceu:indium 144',
        ],
        'helium',
        'infernal',
        927,
        GTValues.VA[GTValues.UIV],
        26.5
    );
    hellForgeMat(
        'zeroidic_trinate_steel',
        17,
        [
            'gtceu:enriched_naquadah_trinium_europium_duranide 432',
            'gtceu:zeron_100 1008',
            'gtceu:xeproda 144',
            'gtceu:tritan_steel 288',
            'gtceu:calamatium 576',
        ],
        'magmatic',
        'abyssal',
        1021,
        GTValues.VA[GTValues.UIV],
        41.1
    );
    hellForgeMat(
        'vastaqalloy_cr_4200x',
        15,
        [
            'gtceu:thacoloy_nq_42x 720',
            'gtceu:stellite_100 576',
            'gtceu:vanadium_gallium 288',
            'gtceu:tungsten_steel 432',
            'gtceu:chromium 144',
        ],
        'americium',
        'ascendant',
        951,
        GTValues.VA[GTValues.UIV],
        27.3
    );
    hellForgeMat(
        'soul_ascendant_cuperite',
        27,
        [
            'gtceu:soul_infused 1728',
            'gtceu:nickel_zinc_ferrite 432',
            'gtceu:magnalium 864',
            'gtceu:niobium_nitride 720',
            'gtceu:mercury_barium_calcium_cuprate 144',
        ],
        'nitrogen',
        'ascendant',
        1158,
        GTValues.VA[GTValues.UIV],
        13.8
    );
    hellForgeMat(
        'primordially_stellarized_weapon_grade_naquadah',
        160,
        [
            'gtceu:stellarized_weapon_grade_naquadah 22608',
            'gtceu:prismatic_hypergurmalium 1000',
            'gtceu:primordial_residue 1000',
            'gtceu:riftic_concentrate 1000',
        ],
        'voidic',
        'ascendant',
        2184,
        GTValues.VHA[GTValues.UXV],
        6.3
    );

    // Heating Fluids
    event.recipes.gtceu
        .cyclonic_sifter(id('infernal_concentrate_refinement'))
        .inputFluids('gtceu:crude_infernal_concentrate 50000')
        .chancedInput('kubejs:ancient_netherite_reinforced_mesh', 750, -125)
        .outputFluids('gtceu:infernal_concentrate 15000')
        .duration(1150)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .heat_chamber(id('superheated_infernal_concentrate'))
        .inputFluids('gtceu:infernal_concentrate 950', 'gtceu:utopian_akreyrium 50')
        .outputFluids('gtceu:superheated_infernal_concentrate 1000')
        .duration(640)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu
        .injection_mixer(id('sub_stellar_infernal_concentrate'))
        .inputFluids('gtceu:superheated_infernal_concentrate 7500', 'gtceu:borealic_concentrate 36')
        .outputFluids('gtceu:sub_stellar_infernal_concentrate 5000')
        .duration(960)
        .EUt(GTValues.VHA[GTValues.UEV]);

    // Super Stellar Recipe

    // Hyper Stellar Recipe

    const hellforgeHeater = (type, origin, scaler, better) => {
        event.recipes.gtceu
            .pressure_heat_chamber(id(type))
            .inputFluids(`gtceu:${origin} 50000`)
            .outputFluids(`start_core:${type} 5000`)
            .duration(1500)
            .EUt(GTValues.VA[GTValues.UV] * Math.pow(4, scaler));
        event.recipes.gtceu
            .molten_destabilizing(id(better))
            .inputFluids(`start_core:${type} 10000`)
            .outputFluids(`gtceu:${origin} 70000`, `gtceu:infernal_concentrate 5000`, `start_core:${better} 2000`)
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UV] * Math.pow(4, scaler));
    };
    hellforgeHeater('flamewake_solvent', 'superheated_infernal_concentrate', 1, 'cinderbrew_solvent');
    hellforgeHeater('emberheart_nectar', 'sub_stellar_infernal_concentrate', 2, 'corefire_nectar');

    event.recipes.gtceu
        .manifold_centrifuge(id('infernal_tar_decomposition'))
        .inputFluids('start_core:infernal_tar 100')
        .chancedOutput('gtceu:basaltic_mineral_sand_dust', 4000, 200)
        .chancedOutput('gtceu:deactivated_nether_dust', 2500, 300)
        .chancedOutput('gtceu:hellfire_ash_dust', 7500, 150)
        .chancedOutput('gtceu:thorium_nugget', 1250, 125)
        .chancedOutput('gtceu:red_garnet_dust', 900, 100)
        .chancedOutput('gtceu:tetrahedrite_dust', 500, 75)
        .outputFluids('gtceu:infernal_concentrate 100')
        .duration(20)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .manifold_centrifuge(id('hellfire_ash_decomposition'))
        .itemInputs('gtceu:hellfire_ash_dust')
        .chancedOutput('gtceu:dark_ash_dust', 4500, 250)
        .chancedOutput('gtceu:deactivated_nether_dust', 500, 75)
        .chancedOutput('gtceu:netherrack_dust', 7000, 150)
        .chancedOutput('gtceu:uvarovite_dust', 1250, 125)
        .chancedOutput('gtceu:mica_dust', 900, 100)
        .chancedOutput('gtceu:biotite_dust', 500, 75)
        .outputFluids('start_core:infernal_tar 25')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    //Catalyst
    const catalyst = (type, inputs, scaler) => {
        event.recipes.gtceu
            .assembler(id(`${type}_catalyst`))
            .itemInputs(inputs)
            .inputFluids(`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${512 + scaler * 64}`)
            .itemOutputs(`96x kubejs:${type}_catalyst`)
            .duration(600)
            .EUt(GTValues.VHA[GTValues.UV] * Math.pow(4, scaler));
    };
    catalyst(
        'ascendant',
        [
            'gtceu:nyanium_frame',
            '2x gtceu:gravi_star',
            '2x gtceu:long_stellarium_rod',
            '1x #gtceu:circuits/uhv',
            '32x gtceu:sapphire_lens',
        ],
        1
    );
    catalyst(
        'infernal',
        [
            'gtceu:magmada_alloy_frame',
            '2x kubejs:helish_star',
            '2x gtceu:long_ancient_netherite_rod',
            '1x #gtceu:circuits/uev',
            '32x gtceu:ruby_lens',
        ],
        2
    );
    catalyst(
        'abyssal',
        [
            'gtceu:draconyallium_frame',
            'kubejs:dragonic_eye',
            '2x gtceu:long_void_rod',
            '1x #gtceu:circuits/uiv',
            '32x gtceu:echo_shard_lens',
        ],
        3
    );
});
