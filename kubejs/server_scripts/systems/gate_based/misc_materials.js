ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .mixer(id('naquadic_netherite'))
        .itemInputs(
            '3x gtceu:naquadah_dust',
            '5x gtceu:pure_netherite_dust',
            '2x gtceu:caesium_dust',
            '5x gtceu:cerium_dust'
        )
        .inputFluids('gtceu:fluorine 12000', 'gtceu:oxygen 32000')
        .itemOutputs('59x gtceu:naquadic_netherite_dust')
        .duration(7600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .mixer(id('weapon_grade_naquadah'))
        .itemInputs('4x gtceu:pure_netherite_dust', '6x gtceu:trinaquadalloy_dust')
        .inputFluids('gtceu:naquadria 1008', 'gtceu:fluorine 12000')
        .itemOutputs('29x gtceu:weapon_grade_naquadah_dust')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .heat_chamber(id('nether_star_concentrate'))
        .itemInputs('16x gtceu:tiny_nether_star_dust')
        .inputFluids(
            'gtceu:energized_blitz 720',
            'gtceu:energized_blizz 720',
            'gtceu:energized_basalz 720',
            'gtceu:energized_blaze 720'
        )
        .outputFluids('gtceu:nether_star_concentrate 576')
        .duration(250)
        .EUt((1 / 3) * GTValues.VA[GTValues.UV]);

    event.recipes.gtceu
        .mixer(id('runic_laser_source_base_dust'))
        .itemInputs('6x gtceu:naquadic_netherite_dust', '6x gtceu:neptunium_dust', '5x gtceu:trinium_dust')
        .itemOutputs('17x gtceu:runic_laser_source_base_dust')
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .mixer(id('akreyriadic_runixium_dust'))
        .itemInputs(
            '7x gtceu:runic_laser_source_base_dust',
            '4x gtceu:ancient_runicalium_dust',
            '2x gtceu:strontium_titanium_oxide_dust'
        )
        .inputFluids('gtceu:utopian_akreyrium 5000')
        .itemOutputs('18x gtceu:akreyriadic_runixium_dust')
        .duration(10800)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .injection_mixer(id('aquariadic_rimuli_dragonix_dust'))
        .itemInputs('7x gtceu:akreyriadic_runixium_dust', '4x gtceu:raging_rimulatia_dust')
        .inputFluids('gtceu:pure_dragon_breath 5000', 'minecraft:water 1000000000')
        .itemOutputs('16x gtceu:aquariadic_rimuli_dragonix_dust')
        .duration(7350)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.remove({ type: 'gtceu:implosion_compressor', input: 'gtceu:naquadic_netherite_dust' });
    global.implosion(
        'naquadic_netherite',
        'gtceu:naquadic_netherite_dust',
        'gtceu:naquadic_netherite_gem',
        GTValues.IV,
<<<<<<< HEAD
=======
        1,
>>>>>>> c42c827c (fix ic helper)
        event
    );

    event.remove({
        type: 'gtceu:implosion_compressor',
        input: 'gtceu:runic_laser_source_base_dust',
    });
    global.implosion(
        'runic_laser_source_base',
        'gtceu:runic_laser_source_base_dust',
        'gtceu:runic_laser_source_base_gem',
        GTValues.IV,
<<<<<<< HEAD
=======
        1,
>>>>>>> c42c827c (fix ic helper)
        event
    );

    event.remove({ type: 'gtceu:implosion_compressor', input: 'gtceu:akreyriadic_runixium_dust' });
    global.implosion(
        'akreyriadic_runixium',
        'gtceu:akreyriadic_runixium_dust',
        'gtceu:akreyriadic_runixium_gem',
        GTValues.LuV,
<<<<<<< HEAD
=======
        1,
>>>>>>> c42c827c (fix ic helper)
        event
    );

    event.remove({
        type: 'gtceu:implosion_compressor',
        input: 'gtceu:aquariadic_rimuli_dragonix_dust',
    });
    global.implosion(
        'aquariadic_rimuli_dragonix',
        'gtceu:aquariadic_rimuli_dragonix_dust',
        'gtceu:aquariadic_rimuli_dragonix_gem',
        GTValues.UHV,
<<<<<<< HEAD
=======
        1,
>>>>>>> c42c827c (fix ic helper)
        event
    );

    event.recipes.gtceu
        .laser_engraver(id('coordinate_crystal'))
        .itemInputs('gtceu:exquisite_purified_naquadah_gem')
        .notConsumable('gtceu:nether_star_lens')
        .itemOutputs('kubejs:coordinate_crystal')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .extractor(id('echo_fluid'))
        .itemInputs('minecraft:echo_shard')
        .outputFluids('gtceu:echo_r 144')
        .duration(5000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu
        .fluid_solidifier(id('raw_void_ingot'))
        .itemInputs('gtceu:neutronium_ingot')
        .inputFluids('gtceu:echo_r 144')
        .itemOutputs('gtceu:raw_void_ingot')
        .duration(4000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.remove({ output: 'gtceu:hot_void_ingot' });

    event.recipes.gtceu
        .heat_chamber(id('crude_to_void_ingot'))
        .itemInputs('gtceu:raw_void_ingot')
        .itemOutputs('gtceu:hot_void_ingot')
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu
        .pressure_heat_chamber(id('dust_to_void_ingot'))
        .itemInputs('gtceu:void_dust')
        .itemOutputs('gtceu:hot_void_ingot')
        .duration(3000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/blast_weapon_grade_naquadah_gas' },
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );

    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/blast_stellarized_weapon_grade_naquadah_gas' },
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );

    event.recipes.gtceu
        .bender(id('nether_star_foil'))
        .itemInputs('gtceu:nether_star_plate')
        .itemOutputs('4x gtceu:nether_star_foil')
        .duration(300)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu
        .bender(id('echo_shard_foil'))
        .itemInputs('gtceu:echo_shard_plate')
        .itemOutputs('4x gtceu:echo_shard_foil')
        .duration(160)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .titan_forge(id('nether_star_ream'))
        .itemInputs('16x minecraft:nether_star')
        .itemOutputs('gtceu:nether_star_foil_ream')
        .duration(1568)
        .circuit(10)
        .EUt(3840);

    event.recipes.gtceu
        .titan_forge(id('echo_shard_ream'))
        .itemInputs('16x minecraft:echo_shard')
        .itemOutputs('gtceu:echo_shard_foil_ream')
        .duration(816)
        .circuit(10)
        .EUt(3840);
});
