ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.vacuum_freezer(id('pcb_cooling'))
        .inputFluids('gtceu:hot_pcb_coolant 1200')
        .outputFluids('gtceu:pcb_coolant 1000')
        .duration(140)
        .EUt(512);
        
    event.recipes.gtceu.dimensional_destabiliser(id('naquadah_mining'))
        .itemInputs('kubejs:nether_star_shard')
        .inputFluids('gtceu:pcb_coolant 8000')
        .itemOutputs('20x gtceu:raw_naquadah')
        .chancedOutput('gtceu:tiny_nether_star_dust', 8000, 0)
        .outputFluids('gtceu:hot_pcb_coolant 9600')
        .duration(1200)
        .EUt(4096);

    event.recipes.gtceu.assembler(id('dimensional_destabiliser'))
        .itemInputs('gtceu:luv_machine_hull', '2x #gtceu:circuits/luv', '4x gtceu:double_pure_netherite_plate', '2x gtceu:ruridit_gear')
        .itemOutputs('gtceu:dimensional_destabiliser')
        .duration(1800)
        .EUt(GTValues.VA[GTValues.IV]);
});