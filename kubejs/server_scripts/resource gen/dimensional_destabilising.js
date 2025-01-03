ServerEvents.recipes(event => {

    event.recipes.gtceu.vacuum_freezer('pcb_cooling')
        .inputFluids('gtceu:hot_pcb_coolant 1200')
        .outputFluids('gtceu:pcb_coolant 1000')
        .duration(140)
        .EUt(512);

    event.recipes.gtceu.dimensional_destabiliser('naquadah_mining')
        .itemInputs('mysticalagradditions:nether_star_shard')
        .inputFluids('gtceu:pcb_coolant 8000')
        .itemOutputs('64x gtceu:raw_naquadah', '64x gtceu:raw_naquadah', 'gtceu:tiny_nether_star_dust')
        .outputFluids('gtceu:hot_pcb_coolant 9600')
        .duration(2400)
        .EUt(4096);

    event.recipes.gtceu.assembler('dimensional_destabiliser')
        .itemInputs('gtceu:luv_machine_hull', '2x #gtceu:circuits/luv', '4x gtceu:double_pure_netherite_plate', '2x gtceu:ruridit_gear')
        .itemOutputs('gtceu:dimensional_destabiliser')
        .duration(1800)
        .EUt(GTValues.VA[GTValues.IV]);
});