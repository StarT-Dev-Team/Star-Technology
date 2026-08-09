ServerEvents.recipes((event) => {
    const id = global.id;

    //plastic boards
    [
        {
            plastic: 'polyether_ether_ketone',
            abreviation: 'peek',
            quantity: 16,
        },
        {
            plastic: 'poly_34_ethylenedioxythiophene_polystyrene_sulfonate',
            abreviation: 'pedot_pss',
            quantity: 32,
        },
    ].forEach((type) => {
        event.recipes.gtceu
            .chemical_reactor(id(`plastic_boards_${type.abreviation}`))
            .itemInputs(`gtceu:${type.plastic}_plate`, '4x gtceu:copper_foil')
            .inputFluids('gtceu:sulfuric_acid 250')
            .itemOutputs(`${type.quantity}x gtceu:plastic_circuit_board`)
            .duration(500)
            .EUt(10);
    });

    // non-cleanroom etching with CuCl
    [
        {
            clean: false,
            board: 'phenolic',
            foil: 'silver',
            foilCount: 4,
            amount: 50,
            duration: 300,
            energy: 30,
        },
        {
            clean: false,
            board: 'plastic',
            foil: 'copper',
            foilCount: 6,
            amount: 125,
            duration: 600,
            energy: 30,
        },
        {
            clean: false,
            board: 'epoxy',
            foil: 'electrum',
            foilCount: 8,
            amount: 250,
            duration: 900,
            energy: 30,
        },
        {
            clean: true,
            board: 'fiber_reinforced',
            foil: 'annealed_copper',
            foilCount: 12,
            amount: 500,
            duration: 1200,
            energy: 30,
        },
        {
            clean: true,
            board: 'multilayer_fiber_reinforced',
            foil: 'platinum',
            foilCount: 8,
            amount: 1000,
            duration: 1500,
            energy: 120,
        },
        {
            clean: true,
            board: 'wetware',
            foil: 'niobium_titanium',
            foilCount: 16,
            amount: 2500,
            duration: 1800,
            energy: 480,
        },
    ].forEach((type) => {
        $(
            event.recipes.gtceu
                .chemical_reactor(id(`${type.board}_circuit_board_copper`))
                .itemInputs(`gtceu:${type.board}_circuit_board`, `${type.foilCount}x gtceu:${type.foil}_foil`)
                .inputFluids(`gtceu:cupric_chloride_solution ${type.amount}`)
                .itemOutputs(`gtceu:${type.board}_printed_circuit_board`)
                .duration(type.duration)
                .EUt(type.energy)
        ).if(type.clean, (recipe) => $(recipe).cleanroom());
    });

    event.remove({ output: 'gtceu:wetware_printed_circuit_board' });
    event.recipes.gtceu
        .chemical_reactor(id('wetware_circuit_board_iron3'))
        .itemInputs('gtceu:wetware_circuit_board', '12x gtceu:niobium_titanium_foil')
        .inputFluids('gtceu:iron_iii_chloride 5000')
        .itemOutputs('gtceu:wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1800)
        .EUt(480);
    event.recipes.gtceu
        .chemical_reactor(id('wetware_circuit_board_persulfate'))
        .itemInputs('gtceu:wetware_circuit_board', '12x gtceu:niobium_titanium_foil')
        .inputFluids('gtceu:sodium_persulfate 10000')
        .itemOutputs('gtceu:wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1800)
        .EUt(480);

    // cleanroom etching with new boards
    [
        {
            board: 'runic',
            foil: 'yttrium_barium_cuprate',
            foilCount: 16,
            amount: 5000,
            duration: 2100,
            energy: 1920,
        },
        {
            board: 'draconic',
            foil: 'europium',
            foilCount: 24,
            amount: 10000,
            duration: 2400,
            energy: 7680,
        },
        {
            board: 'abyssal',
            foil: 'polonium_bismide',
            foilCount: 32,
            amount: 20000,
            duration: 2700,
            energy: 30720,
        },
    ].forEach((type) => {
        [
            { id: 'copper', name: 'cupric_chloride_solution', multiplier: 1 },
            { id: 'iron', name: 'iron_iii_chloride', multiplier: 2 },
            { id: 'sodium', name: 'sodium_persulfate', multiplier: 4 },
        ].forEach((fluid) => {
            event.recipes.gtceu
                .chemical_reactor(id(`${type.board}_circuit_board_${fluid.id}`))
                .itemInputs(`kubejs:${type.board}_circuit_board`, `${type.foilCount}x gtceu:${type.foil}_foil`)
                .inputFluids(`gtceu:${fluid.name} ${type.amount * fluid.multiplier}`)
                .itemOutputs(`kubejs:${type.board}_printed_circuit_board`)
                .cleanroom(CleanroomType.STERILE_CLEANROOM)
                .duration(type.duration)
                .EUt(type.energy);
        });
    });

    // etching fluid
    event.recipes.gtceu
        .chemical_reactor(id('copper_chloride'))
        .itemInputs('1x gtceu:copper_dust')
        .inputFluids('gtceu:chlorine 1000')
        .itemOutputs('2x gtceu:copper_chloride_dust')
        .duration(600)
        .EUtVHA(HV);
    event.recipes.gtceu
        .mixer(id('cupric_chloride_solution'))
        .itemInputs('1x gtceu:copper_chloride_dust')
        .inputFluids('gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:cupric_chloride_solution 1000')
        .duration(400)
        .EUtVHA(EV);
});
