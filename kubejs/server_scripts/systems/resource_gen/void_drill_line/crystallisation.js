global.notHardmode(() => {
    ServerEvents.recipes((event) => {
        const id = global.id;

        //alternate production
        event.recipes.gtceu
            .mixer(id('molten_ore_mixture_recycling'))
            .inputFluids('minecraft:lava 32000')
            .itemInputs('32x gtceu:stone_dust', '16x #forge:crushed_ores')
            .outputFluids('gtceu:molten_ore_mixture 6000')
            .duration(800)
            .EUt(GTValues.VA[GTValues.EV]);

        event.recipes.gtceu
            .mixer(id('molten_ore_mixture_looping'))
            .inputFluids('minecraft:lava 48000')
            .itemInputs('48x gtceu:stone_dust', '2x gtceu:metal_mixture_dust')
            .outputFluids('gtceu:molten_ore_mixture 20000')
            .duration(600)
            .EUt(GTValues.VA[GTValues.IV]);

        //distilling
        event.recipes.gtceu
            .distillation_tower(id('molten_ore_mixture'))
            .inputFluids('gtceu:molten_ore_mixture 10000')
            .itemOutputs('gtceu:metal_mixture_dust')
            .outputFluids(
                'gtceu:molten_bauxite_ore 1500',
                'gtceu:molten_pitchblende_ore 1250',
                'gtceu:molten_molybdenite_ore 1000',
                'gtceu:molten_ilmenite_ore 1000',
                'gtceu:molten_bastnasite_ore 1000',
                'gtceu:molten_tungstate_ore 2000',
                'gtceu:molten_cooperite_ore 2250'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.EV]);

        event.recipes.gtceu
            .molten_destabilizing(id('molten_ore_mixture'))
            .inputFluids('gtceu:molten_ore_mixture 40000')
            .itemOutputs(
                '4x gtceu:metal_mixture_dust',
                '12x gtceu:raw_bauxite',
                '10x gtceu:raw_pitchblende',
                '8x gtceu:raw_molybdenite',
                '8x gtceu:raw_ilmenite',
                '8x gtceu:raw_bastnasite',
                '16x gtceu:raw_tungstate',
                '18x gtceu:raw_cooperite'
            )
            .outputFluids('minecraft:lava 40000')
            .duration(1200)
            .EUt(GTValues.VA[GTValues.LuV]);

        //amethyst line
        event.recipes.gtceu
            .cutter(id('small_amethyst_bud'))
            .itemInputs('minecraft:amethyst_shard')
            .itemOutputs('2x minecraft:small_amethyst_bud')
            .duration(240)
            .EUt(512);

        event.recipes.gtceu
            .laser_engraver(id('medium_amethyst_bud'))
            .itemInputs('2x minecraft:small_amethyst_bud')
            .notConsumable('#forge:lenses/purple')
            .itemOutputs('minecraft:medium_amethyst_bud')
            .duration(240)
            .EUt(512);

        event.recipes.gtceu
            .chemical_bath(id('large_amethyst_bud'))
            .itemInputs('minecraft:medium_amethyst_bud')
            .inputFluids('minecraft:water 1000')
            .itemOutputs('minecraft:large_amethyst_bud')
            .duration(240)
            .EUt(512);

        event.recipes.gtceu
            .autoclave(id('amethyst_cluster'))
            .itemInputs('minecraft:large_amethyst_bud', 'gtceu:calcite_dust')
            .inputFluids('gtceu:distilled_water 125')
            .itemOutputs('minecraft:amethyst_cluster')
            .duration(240)
            .EUt(512);

        //crystallising
        ['bauxite', 'pitchblende', 'molybdenite', 'ilmenite', 'tungstate', 'cooperite', 'bastnasite'].forEach(
            (type) => {
                event.recipes.gtceu
                    .autoclave(id(`raw_${type}`))
                    .itemInputs('gtceu:stone_dust')
                    .inputFluids(`gtceu:molten_${type}_ore 500`)
                    .itemOutputs(`gtceu:raw_${type}`)
                    .duration(160)
                    .EUt(GTValues.VA[GTValues.HV]);
            }
        );
    });
});
