ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .injection_mixer(id('dissipated_helish_concentrate'))
        .itemInputs(
            '2x gtceu:plutonium_dust',
            '173x gtceu:warped_dust',
            '1x gtceu:astatine_dust',
            '5x gtceu:netherite_dust',
            '3x thermal_extra:soul_sand_dust'
        )
        .inputFluids(
            'gtceu:nether_star_concentrate 144',
            'gtceu:infernal_concentrate 250',
            'gtceu:enriched_estalt 72',
            'gtceu:flerovium 288',
            'gtceu:liquid_nether_air 63000'
        )
        .outputFluids('gtceu:dissipated_helish_concentrate 7450')
        .duration(720)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .pressure_heat_chamber(id('helish_concentrate'))
        .itemInputs('3x kubejs:nether_tempered_shard')
        .inputFluids('gtceu:dissipated_helish_concentrate 4625')
        .itemOutputs('7x gtceu:netherrack_dust')
        .outputFluids('gtceu:helish_concentrate 504')
        .duration(560)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .hellforge(id('helish_star'))
        .inputFluids('gtceu:helish_concentrate 432')
        .itemInputs('gtceu:gravi_star')
        .itemOutputs('kubejs:helish_star')
        .outputFluids('start_core:infernal_tar 50')
        .blastFurnaceTemp(1000)
        .duration(240)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UHV]);

    const warpedMaceration = (type, size) => {
        event.recipes.gtceu
            .macerator(id(`warped_dust_nether_from_${type.split(':')[1]}`))
            .itemInputs(type)
            .itemOutputs(`${size}x gtceu:warped_dust`)
            .duration(100 * size)
            .EUt(GTValues.VA[GTValues.LuV]);
    };
    global.withChipped(
        () => {
            warpedMaceration('#chipped:warped_roots', 1);
            warpedMaceration('#chipped:warped_fungus', 1);
        },
        () => {
            warpedMaceration('minecraft:warped_roots', 1);
            warpedMaceration('minecraft:warped_fungus', 1);
        }
    );
    warpedMaceration('minecraft:warped_wart_block', 9);

    //Ancient Netherite
    event.recipes.gtceu
        .assembler(id('ancient_netherite_reinforced_mesh'))
        .itemInputs(
            '1x kubejs:netherite_reinforced_mesh',
            '4x gtceu:ancient_netherite_rod',
            '1x gtceu:ancient_netherite_ingot'
        )
        .inputFluids('gtceu:niobium_nitride 576')
        .itemOutputs('1x kubejs:ancient_netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.remove({ id: /^blast_ancient_netherite.*/ });
    event.recipes.gtceu
        .electric_blast_furnace(id('hot_ancient_netherite_ingot'))
        .itemInputs('4x minecraft:gold_ingot', '4x gtceu:ancient_debris_dust')
        .inputFluids('gtceu:argon 2000')
        .itemOutputs('1x gtceu:hot_ancient_netherite_ingot')
        .blastFurnaceTemp(13300)
        .duration(2500)
        .EUt((GTValues.VHA[GTValues.UHV] * 2) / 3);

    event.recipes.gtceu
        .macerator(id('ancient_debris_dust'))
        .itemInputs('minecraft:ancient_debris')
        .itemOutputs('4x gtceu:ancient_debris_dust')
        .duration(124)
        .EUt(380644);

    [
        {
            stone: 'ae2:sky_stone_block',
            consumedSolid: 'minecraft:stone',
            consumedAmount: 16,
            output: 32,
            consumedFluid: 'thermal:ender',
            circ: 1,
            energy: GTValues.VHA[GTValues.HV],
        },
        {
            stone: 'kubejs:cryostone',
            consumedSolid: 'minecraft:netherrack',
            consumedAmount: 32,
            output: 2,
            consumedFluid: 'gtceu:liquid_helium',
            circ: 2,
            energy: GTValues.VHA[GTValues.LuV],
        },
        {
            stone: 'kubejs:brimstone',
            consumedSolid: 'minecraft:netherrack',
            consumedAmount: 32,
            output: 2,
            consumedFluid: 'gtceu:blaze',
            circ: 3,
            energy: GTValues.VHA[GTValues.LuV],
        },
    ].forEach((type) => {
        event.recipes.gtceu
            .exotic_rock_crushing(id(type.stone.split(':')[1]))
            .notConsumable(`${type.stone}`)
            .notConsumableFluid('minecraft:lava 1000')
            .itemInputs(`${type.consumedAmount}x ${type.consumedSolid}`)
            .inputFluids(`${type.consumedFluid} 500`)
            .circuit(`${type.circ}`)
            .itemOutputs(`${type.output}x ${type.stone}`)
            .duration(300)
            .EUt(type.energy);
    });

    event.recipes.gtceu
        .mixer(id('polonium_bismide'))
        .itemInputs('gtceu:polonium_dust', 'gtceu:bismuth_dust')
        .itemOutputs('2x gtceu:polonium_bismide_dust')
        .duration(600)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.UEV]);
});
