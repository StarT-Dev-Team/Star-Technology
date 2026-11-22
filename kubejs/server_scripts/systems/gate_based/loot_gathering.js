ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .drone_reconnaissance(id('naquadah_search'))
        .itemInputs('kubejs:reconnaissance_drone', 'gtceu:dense_enriched_naquadah_plate')
        .inputFluids('gtceu:rocket_fuel 8000')
        .chancedOutput('sgjourney:naquadah_helmet', 1000, 500)
        .chancedOutput('sgjourney:naquadah_chestplate', 1000, 500)
        .chancedOutput('sgjourney:naquadah_leggings', 1000, 500)
        .chancedOutput('sgjourney:naquadah_boots', 1000, 500)
        .chancedOutput('sgjourney:naquadah_sword', 1000, 500)
        .chancedOutput('sgjourney:naquadah_pickaxe', 1000, 500)
        .chancedOutput('sgjourney:naquadah_axe', 1000, 500)
        .chancedOutput('sgjourney:naquadah_shovel', 1000, 500)
        .chancedOutput('sgjourney:naquadah_alloy', 1000, 500)
        .chancedOutput('2x gtceu:naquadah_alloy_ingot', 1000, 500)
        .chancedOutput('3x gtceu:naquadah_alloy_ingot', 1000, 500)
        .duration(600)
        .EUtVA(ZPM);

    event.recipes.gtceu
        .drone_reconnaissance(id('runic_technology_search'))
        .itemInputs('kubejs:reconnaissance_drone', 'kubejs:proto_energized_rune')
        .inputFluids('gtceu:rocket_fuel 8000')
        .chancedOutput('kubejs:runic_tablet_1', 800, 400)
        .chancedOutput('kubejs:runic_tablet_2', 800, 400)
        .chancedOutput('kubejs:runic_tablet_3', 800, 400)
        .chancedOutput('kubejs:runic_tablet_4', 800, 400)
        .chancedOutput('kubejs:runic_tablet_5', 800, 400)
        .chancedOutput('kubejs:runic_tablet_6', 800, 400)
        .chancedOutput('start_core:bacteria_dormant', 1500, 750)
        .chancedOutput('kubejs:abydos_talisman', 1500, 750)
        .duration(600)
        .EUtVA(ZPM);
});
