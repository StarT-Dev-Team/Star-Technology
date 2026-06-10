ServerEvents.recipes((event) => {
    const id = global.id;

    event
        .shaped('gtceu:industrial_fishery', ['ABF', 'AEG', 'BGF'], {
            A: 'gtceu:tungsten_single_cable',
            B: '#gtceu:circuits/iv',
            E: 'gtceu:iv_fisher',
            F: 'gtceu:iv_robot_arm',
            G: 'gtceu:iv_electric_pump',
        })
        .id('start:shaped/industrial_fisher');

    event.recipes.gtceu
        .industrial_fishery(id('fishing_silkworm'))
        .itemInputs('2x minecraft:string', '4x exnihilosequentia:silkworm')
        .inputFluids('exnihilosequentia:sea_water 100')
        .itemOutputsRanged('minecraft:cod', 1, 16)
        .itemOutputsRanged('minecraft:salmon', 1, 16)
        .itemOutputsRanged('minecraft:pufferfish', 1, 16)
        .itemOutputsRanged('minecraft:tropical_fish', 1, 16)
        .circuit(0)
        .duration(1500)
        .EUt(global.vha['lv']);

    event.recipes.gtceu
        .industrial_fishery(id('fishing_dried_silkworm_dough'))
        .itemInputs('2x minecraft:string', 'kubejs:dried_silkworm_dough')
        .inputFluids('exnihilosequentia:sea_water 100')
        .itemOutputsRanged('minecraft:cod', 9, 16)
        .itemOutputsRanged('minecraft:salmon', 9, 16)
        .itemOutputsRanged('minecraft:pufferfish', 9, 16)
        .itemOutputsRanged('minecraft:tropical_fish', 9, 16)
        .circuit(1)
        .duration(1200)
        .EUt(global.vha['lv']);

    event.recipes.gtceu
        .industrial_fishery(id('fishing_bait_silkworm_oil_pellet'))
        .itemInputs('3x minecraft:string', 'kubejs:silkworm_oil_pellet')
        .inputFluids('exnihilosequentia:sea_water 100')
        .itemOutputsRanged('minecraft:cod', 33, 96)
        .itemOutputsRanged('minecraft:salmon', 33, 96)
        .itemOutputsRanged('minecraft:pufferfish', 33, 96)
        .itemOutputsRanged('minecraft:tropical_fish', 33, 96)
        .circuit(2)
        .duration(900)
        .EUt(global.vha['lv']);

    event.recipes.gtceu
        .industrial_fishery(id('fishing_bait_silkworm_gel'))
        .itemInputs('3x minecraft:string')
        .inputFluids('exnihilosequentia:sea_water 100', 'gtceu:silkworm_gel 50')
        .itemOutputsRanged('minecraft:cod', 65, 96)
        .itemOutputsRanged('minecraft:salmon', 65, 96)
        .itemOutputsRanged('minecraft:pufferfish', 65, 96)
        .itemOutputsRanged('minecraft:tropical_fish', 65, 96)
        .circuit(3)
        .duration(600)
        .EUt(global.vha['lv']);

    // Silkworms
    event.recipes.gtceu
        .mixer(id('rooted_dirt'))
        .itemInputs('minecraft:dirt')
        .inputFluids('gtceu:fermented_biomass 1')
        .itemOutputs('minecraft:rooted_dirt')
        .duration(100)
        .EUt(global.vha['ulv']);

    event.recipes.gtceu
        .centrifuge(id('silkworm'))
        .itemInputs('rooted_dirt')
        .itemOutputs('minecraft:dirt', 'exnihilosequentia:silkworm')
        .duration(100)
        .EUt(global.vha['ulv']);

    // Dried Silkworm Dough
    event.recipes.gtceu
        .mixer(id('dried_silkworm_dough'))
        .itemInputs('exnihilosequentia:cooked_silkworm', 'gtceu:dough')
        .itemOutputs('kubejs:dried_silkworm_dough')
        .duration(100)
        .EUt(global.vha['lv']);

    // Silkworm Oil Pellet
    event.recipes.gtceu
        .extractor(id('silkworm_oil'))
        .itemInputs('exnihilosequentia:silkworm')
        .outputFluids('gtceu:raw_silkworm_oil 36')
        .duration(100)
        .EUt(global.vha['hv']);

    event.recipes.gtceu
        .distillation_tower(id('distill_silkworm_oil'))
        .inputFluids('gtceu:raw_silkworm_oil 100')
        .outputFluids('gtceu:refined_silkworm_oil 60')
        .outputFluids('gtceu:lubricant 15')
        .itemOutputs('gtceu:tiny_meat_dust')
        .duration(300)
        .EUt(global.vha['hv']);

    event.recipes.gtceu
        .canner(id('silkworm_oil_pellet'))
        .itemInputs('gtceu:fluid_cell')
        .inputFluids('gtceu:refined_silkworm_oil 50')
        .itemOutputs('kubejs:silkworm_oil_pellet')
        .duration(100)
        .EUt(global.vha['hv']);

    // Silkworm Gel
    event.recipes.gtceu
        .mixer(id('silkworm_gel'))
        .itemInputs('gtceu:small_agar_dust', 'gtceu:small_gelatin_dust')
        .inputFluids('gtceu:refined_silkworm_oil 150', 'minecraft:water 300')
        .outputFluids('gtceu:silkworm_gel 500')
        .duration(200)
        .EUt(global.vha['ev']);
});
