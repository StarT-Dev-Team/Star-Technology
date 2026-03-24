ServerEvents.recipes(event => {
    const id = global.id;    

    event.recipes.gtceu.heat_chamber(id('tiny_purified_naquadah'))
        .itemInputs('gtceu:tiny_enriched_naquadah_dust')
        .inputFluids('gtceu:neon 120')
        .itemOutputs('gtceu:tiny_purified_naquadah_dust')
        .blastFurnaceTemp(10000)
        .duration(480)
        .EUt(16384);

    event.recipes.gtceu.vibration_laser_engraver(id('echo_shard'))
        .itemInputs('gtceu:exquisite_purified_naquadah_gem')
        .notConsumable('gtceu:nether_star_lens')
        .inputFluids('gtceu:lubricant 1000', 'gtceu:pcb_coolant 16000')
        .itemOutputs('minecraft:echo_shard')
        .outputFluids('gtceu:hot_pcb_coolant 19200')
        .duration(6400)
        .EUt(65536);

    event.recipes.gtceu.assembly_line(id('vibration_laser_engraver'))
        .itemInputs('gtceu:uv_laser_engraver','6x gtceu:uv_electric_piston','4x gtceu:uv_emitter','4x gtceu:uv_emitter','4x gtceu:uv_field_generator', '64x gtceu:fine_trinaquadalloy_wire','64x gtceu:fine_trinaquadalloy_wire', '6x #gtceu:circuits/uv')
        .inputFluids('gtceu:naquadria 13248', 'gtceu:trinaquadalloy 9936'   )
        .itemOutputs('gtceu:vibration_laser_engraver')
        .duration(960)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uv_laser_engraver'))
                .EUt(262144)
                .CWUt(96)
            )
        .EUt(262144); 

});