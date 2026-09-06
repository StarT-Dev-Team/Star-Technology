ServerEvents.recipes((event) => {
    const id = global.id;

    [
        { plastic: 'polyether_ether_ketone', scaler: 2 },
        { plastic: 'poly_34_ethylenedioxythiophene_polystyrene_sulfonate', scaler: 4 },
    ].forEach((cFiber) => {
        event.recipes.gtceu
            .autoclave(id(`carbon_fibers_${cFiber.plastic}`))
            .itemInputs(`${cFiber.scaler * 8}x gtceu:carbon_dust`)
            .inputFluids(`gtceu:${cFiber.plastic} 9`)
            .itemOutputs(`${32 * cFiber.scaler}x gtceu:carbon_fibers`)
            .duration(37)
            .EUt(1920 * Math.pow(2, cFiber.scaler));
    });
});
