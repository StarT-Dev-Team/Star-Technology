ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembler(id('netherite_reinforced_mesh'))
        .itemInputs('1x gtceu:carbon_fiber_mesh', '4x gtceu:netherite_rod', '1x minecraft:netherite_ingot')
        .inputFluids('gtceu:epoxy 288')
        .itemOutputs('kubejs:netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu
        .mixer(id('new_soldering_alloy'))
        .itemInputs('14x gtceu:indium_dust', '3x gtceu:tin_dust', '2x gtceu:lead_dust', 'gtceu:cadmium_dust')
        .itemOutputs('20x gtceu:indium_tin_lead_cadmium_soldering_alloy_dust')
        .duration(400)
        .EUt(45000);

    event.recipes.gtceu
        .chemical_reactor(id('strontium_oxide'))
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu
        .chemical_reactor(id('titanium_oxide'))
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs('3x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu
        .chemical_reactor(id('strontium_titanium_oxide'))
        .itemInputs('gtceu:strontium_oxide_dust', 'gtceu:titanium_oxide_dust')
        .itemOutputs('2x gtceu:strontium_titanium_oxide_dust')
        .duration(400)
        .EUt(420);

    event.recipes.gtceu
        .large_chemical_reactor(id('iron_titanium_oxide'))
        .itemInputs('5x gtceu:ferrosilite_dust', '2x gtceu:titanium_oxide_dust')
        .itemOutputs('4x gtceu:iron_titanium_oxide_dust', '3x gtceu:silicon_dioxide_dust')
        .duration(960)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('tungsten_disulfide'))
        .itemInputs('4x gtceu:tungsten_trioxide_dust')
        .inputFluids('gtceu:hydrogen_sulfide 3000')
        .itemOutputs('3x gtceu:tungsten_disulfide_dust')
        .outputFluids('minecraft:water 3000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .mixer(id('cerium_tritelluride'))
        .itemInputs('gtceu:cerium_dust', '3x gtceu:tellurium_dust')
        .itemOutputs('4x gtceu:cerium_tritelluride_dust')
        .duration(900)
        .circuit(4)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .mixer(id('thorium_plut_duranide_241'))
        .itemInputs('4x gtceu:thorium_dust', 'gtceu:duranium_dust', '3x gtceu:plutonium_241_dust')
        .itemOutputs('8x gtceu:thorium_plut_duranide_241_dust')
        .circuit(4)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV]);

    // NtSiC line
    event.remove({ output: 'gtceu:hot_neutronium_silicon_carbide_ingot' });

    event.recipes.gtceu
        .mixer(id('neutronium_silicon_carbide_dust'))
        .itemInputs(
            '2x gtceu:neutronium_dust',
            '7x gtceu:silicon_carbide_dust',
            '3x gtceu:niobium_nitride_dust',
            '3x gtceu:graphene_dust'
        )
        .itemOutputs('15x gtceu:neutronium_silicon_carbide_dust')
        .duration(465)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .heat_chamber(id('hot_neutronium_silicon_carbide'))
        .itemInputs('gtceu:neutronium_silicon_carbide_dust')
        .inputFluids('gtceu:polyether_ether_ketone 36')
        .itemOutputs('gtceu:hot_neutronium_silicon_carbide_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM]);
});
