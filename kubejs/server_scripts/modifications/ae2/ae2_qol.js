ServerEvents.recipes((event) => {
    const id = global.id;

    //Colouring/Uncolouring Cables with a Chemical Bath
    [
        'black',
        'blue',
        'brown',
        'cyan',
        'green',
        'gray',
        'lime',
        'light_blue',
        'light_gray',
        'magenta',
        'orange',
        'purple',
        'red',
        'white',
        'yellow',
        'pink',
    ].forEach((colour) => {
        ['glass_cable', 'covered_cable', 'covered_dense_cable', 'smart_cable', 'smart_dense_cable'].forEach((type) => {
            event.recipes.gtceu
                .chemical_bath(id(`${colour}_fluix_${type}`))
                .itemInputs(`8x ae2:fluix_${type}`)
                .inputFluids(`gtceu:${colour}_dye 36`)
                .itemOutputs(`8x ae2:${colour}_${type}`)
                .duration(280)
                .EUt(100);

            event.recipes.gtceu
                .chemical_bath(id(`${colour}_uncoloured_${type}`))
                .itemInputs(`8x ae2:${colour}_${type}`)
                .inputFluids('gtceu:chlorine 100')
                .itemOutputs(`8x ae2:fluix_${type}`)
                .duration(280)
                .EUt(100);
        });
    });

    //Coating ae2 cables with rubber for covered cable

    /**
     * @param {string} rubber
     * @param {number} amount
     */
    const rubberType = (rubber, amount) => {
        event.recipes.gtceu
            .assembler(id(`${rubber.path}_covered_cable`))
            .itemInputs('ae2:fluix_glass_cable')
            .inputFluids(`${rubber} ${amount}`)
            .itemOutputs('ae2:fluix_covered_cable')
            .duration(100)
            .EUt(69);
    };

    rubberType('thermal:latex', 288);
    rubberType('gtceu:rubber', 144);
    rubberType('gtceu:silicone_rubber', 72);
    rubberType('gtceu:styrene_butadiene_rubber', 36);
    rubberType('gtceu:perfluoroelastomer_rubber', 18);

    //greging cable anchors

    /**
     * @param {string} wire
     * @param {number} amount
     */
    const metaltype = (wire, amount) => {
        event.recipes.gtceu
            .cutter(id(`${wire}_cable_anchor`))
            .itemInputs(`gtceu:${wire}_single_wire`)
            .itemOutputs(`${amount}x ae2:cable_anchor`)
            .duration(100)
            .EUt(7);
    };

    metaltype('iron', 2);
    metaltype('steel', 4);
    metaltype('aluminium', 6);
    metaltype('kanthal', 8);
    metaltype('tungsten', 16);
    metaltype('rtm_alloy', 32);
});
