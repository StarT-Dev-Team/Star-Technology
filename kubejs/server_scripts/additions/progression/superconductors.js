ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .macerator(id('soul_sand_dust'))
        .itemInputs('minecraft:soul_sand')
        .itemOutputs('thermal_extra:soul_sand_dust')
        .duration(20)
        .EUt(8);

    event
        .shapeless(Item.of('thermal_extra:soul_sand_dust', 1), ['minecraft:soul_sand', '#forge:tools/mortars'])
        .id('start:shapeless/soul_sand_dust');

    event.recipes.gtceu
        .mixer(id('soul_infused_dust'))
        .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust')
        .itemOutputs('3x gtceu:soul_infused_dust')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu
        .alloy_smelter(id('soul_infused_from_dust'))
        .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust')
        .itemOutputs('3x gtceu:soul_infused_ingot')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu
        .alloy_smelter(id('soul_infused_from_ingot'))
        .itemInputs('gtceu:invar_ingot', '2x thermal_extra:soul_sand_dust')
        .itemOutputs('3x gtceu:soul_infused_ingot')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu
        .mixer(id('signalum_dust'))
        .itemInputs('gtceu:silver_dust', '3x gtceu:copper_dust', '4x minecraft:redstone')
        .itemOutputs('4x gtceu:signalum_dust')
        .duration(300)
        .EUt(20)
        .circuit(3);

    event.recipes.gtceu
        .mixer(id('lumium_dust'))
        .itemInputs('gtceu:silver_dust', '3x gtceu:tin_dust', '2x minecraft:glowstone_dust')
        .itemOutputs('4x gtceu:lumium_dust')
        .duration(400)
        .EUt(80);

    event.recipes.gtceu
        .mixer(id('enderium_dust'))
        .itemInputs('3x gtceu:lead_dust', '1x gtceu:diamond_dust', '2x gtceu:ender_pearl_dust')
        .itemOutputs('4x gtceu:enderium_dust')
        .duration(600)
        .EUt(400);

    event.recipes.gtceu
        .mixer(id('shellite_dust'))
        .itemInputs('gtceu:black_bronze_dust', '3x gtceu:signalum_dust')
        .itemOutputs('4x gtceu:shellite_dust')
        .duration(700)
        .EUt(1024);

    event.recipes.gtceu
        .mixer(id('twinite_dust'))
        .itemInputs('3x gtceu:manganese_phosphide_dust', '2x gtceu:amethyst_dust', 'gtceu:lumium_dust')
        .itemOutputs('6x gtceu:twinite_dust')
        .duration(800)
        .EUt(6400);

    event.recipes.gtceu
        .mixer(id('dragonsteel_dust'))
        .itemInputs('4x gtceu:tungsten_dust', '8x gtceu:magnesium_diboride_dust', '2x gtceu:cadmium_dust')
        // .inputFluids('thermal_extra:refined_sunflower_oil 1000')
        .itemOutputs('14x gtceu:dragonsteel_dust')
        .duration(900)
        .EUt(16000);

    event.recipes.gtceu
        .mixer(id('prismalium_dust'))
        .itemInputs(
            '8x gtceu:naquadah_dust',
            '4x gtceu:mercury_barium_calcium_cuprate_dust',
            '7x gtceu:tungsten_carbide_dust'
        )
        .itemOutputs('19x gtceu:prismalium_dust')
        .duration(1000)
        .EUt(65536);

    event.recipes.gtceu
        .mixer(id('melodium_dust'))
        .itemInputs(
            '2x gtceu:uranium_triplatinum_dust',
            '14x gtceu:electrum_dust',
            '3x gtceu:amethyst_dust',
            '4x gtceu:darmstadtium_dust',
            '7x gtceu:europium_dust'
        )
        .itemOutputs('30x gtceu:melodium_dust')
        .duration(1100)
        .EUt(100000);

    event.recipes.gtceu
        .mixer(id('stellarium_dust'))
        .itemInputs('4x gtceu:melodium_dust', '1x gtceu:samarium_iron_arsenic_oxide_dust')
        .inputFluids('gtceu:neutronium 1728')
        .itemOutputs('17x gtceu:stellarium_dust')
        .duration(1200)
        .EUt(456000);
});
