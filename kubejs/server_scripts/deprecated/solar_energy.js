ServerEvents.recipes(event => {
    const id = global.id;

    // event.recipes.gtceu.circuit_assembler(id('basic_energy_core'))
    //     .itemInputs('3x gtceu:iron_foil', '2x #gtceu:capacitors', '2x #gtceu:diodes')
    //     .inputFluids('gtceu:glass 288')
    //     .itemOutputs('kubejs:basic_energy_core')
    //     .duration(200)
    //     .EUt(30);

    // const CoreUpgrade = (In,Out,Tier) => {
    //     event.recipes.gtceu.polarizer(id(`${In}_to_${Out}_energy_core`))
    //         .itemInputs(`kubejs:${In}_energy_core`)
    //         .itemOutputs(`kubejs:${Out}_energy_core`)
    //         .duration(400 * (2 ** Tier))
    //         .EUt(30 * (4 ** Tier));
    // }
    // CoreUpgrade('basic','regular',1);
    // CoreUpgrade('regular','intermediate',2);
    // CoreUpgrade('intermediate','advanced',3);
    // CoreUpgrade('advanced','elite',4);
    // CoreUpgrade('elite','ultimate',5);

    // event.recipes.gtceu.assembler(id('mirror'))
    //     .itemInputs('6x gtceu:steel_foil', '#gtceu:circuits/lv', 'gtceu:glass_plate')
    //     .inputFluids('gtceu:tin 576')
    //     .itemOutputs('solarflux:mirror')
    //     .duration(400)
    //     .EUt(30);

    // const SolarPanel = (type, material, base, tier, chip, wire, core) => {
    //     let cell = (base == 'mirror') ? 'mirror' : `photovoltaic_cell_${type - 1}` ;
    //     event.recipes.gtceu.assembler(id(`solar_generator_${type}`))
    //         .itemInputs(`gtceu:${material}_frame`, `solarflux:${cell}`, `#gtceu:circuits/${tier}`, `2x gtceu:${wire}_single_cable`, `2x gtceu:${material}_plate`)
    //         .inputFluids(`gtceu:soldering_alloy ${144 * type}`)
    //         .itemOutputs(`solarflux:sp_${type}`)
    //         .duration(300)
    //         .EUt(30 * (4 ** type));

    //     event.recipes.gtceu.electromagnetic_separator(id(`solar_generator_${type}_decomp`))
    //         .itemInputs(`solarflux:sp_${type}`)
    //         .itemOutputs(`solarflux:${cell}`)
    //         .duration(200)
    //         .EUt(30 * (4 ** (type - 1)));

    //     if (tier !== 'mv') {
    //     let prior = (tier == 'hv') ? 'mirror' : `photovoltaic_cell_${type - 2}` ;
    //     event.recipes.gtceu.circuit_assembler(id(`photovoltaic_cell_${type - 1}`))
    //         .itemInputs(`solarflux:${prior}`, `kubejs:${chip}_chip`, `1x #gtceu:circuits/${tier}`, `kubejs:${core}_energy_core`, `6x gtceu:fine_${wire}_wire`)
    //         .inputFluids(`gtceu:soldering_alloy ${72 * type}`)
    //         .itemOutputs(`solarflux:photovoltaic_cell_${type - 1}`)
    //         .duration(400)
    //         .EUt(30 * (4 ** (type - 1)));
    //     }
    //     }
    
    // SolarPanel('1','aluminium','mirror','mv','','copper','')
    // SolarPanel('2','stainless_steel','','hv','silicon','gold','basic')
    // SolarPanel('3','titanium','','ev','silicon','aluminium','regular')
    // SolarPanel('4','tungsten_steel','','iv','phosphorus','platinum','intermediate')
    // SolarPanel('5','rhodium_plated_palladium','','luv','phosphorus','niobium_titanium','advanced')
    // SolarPanel('6','naquadah_alloy','','zpm','naquadah','vanadium_gallium','elite')
    // SolarPanel('7','darmstadtium','','uv','naquadah','yttrium_barium_cuprate','ultimate')

    // // T8 changed to just be a scale fix
    //     event.recipes.gtceu.electromagnetic_separator(id(`solar_generator_8_decomp`))
    //         .itemInputs(`solarflux:sp_8`)
    //         .itemOutputs(`4x solarflux:photovoltaic_cell_6`)
    //         .duration(200)
    //         .EUt(30 * (4 ** 7));

    //    event.recipes.gtceu.assembler(id(`solar_generator_8`))
    //         .itemInputs(`4x solarflux:sp_7`, `1x gtceu:dense_neutronium_plate`, `2x gtceu:europium_single_cable`)
    //         .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${144 * 8}`)
    //         .itemOutputs(`solarflux:sp_8`)
    //         .duration(300)
    //         .EUt(30 * (4 ** 7));

});
