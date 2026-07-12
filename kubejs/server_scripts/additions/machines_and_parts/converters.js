ServerEvents.recipes((event) => {
    event.remove({ output: /gtceu:.*_energy_converter/ });

    const converterMaterials = {
        lv: {
            superconductor: 'gtceu:soul_infused',
            casing: 'gtceu:steel',
            cable: 'gtceu:tin',
            has64aConverter: false,
        },
        mv: {
            superconductor: 'gtceu:signalum',
            casing: 'gtceu:aluminium',
            cable: 'gtceu:copper',
            has64aConverter: false,
        },
        hv: {
            superconductor: 'gtceu:lumium',
            casing: 'gtceu:stainless_steel',
            cable: 'minecraft:gold',
            has64aConverter: false,
        },
        ev: {
            superconductor: 'gtceu:enderium',
            casing: 'gtceu:titanium',
            cable: 'gtceu:aluminium',
            has64aConverter: true,
        },
        iv: {
            superconductor: 'gtceu:shellite',
            casing: 'gtceu:tungsten_steel',
            cable: 'gtceu:platinum',
            has64aConverter: true,
        },
        luv: {
            superconductor: 'gtceu:twinite',
            casing: 'gtceu:rhodium_plated_palladium',
            cable: 'gtceu:niobium_titanium',
            has64aConverter: true,
        },
        zpm: {
            superconductor: 'gtceu:dragonsteel',
            casing: 'gtceu:naquadah_alloy',
            cable: 'gtceu:vanadium_gallium',
            has64aConverter: true,
        },
        uv: {
            superconductor: 'gtceu:prismalium',
            casing: 'gtceu:darmstadtium',
            cable: 'gtceu:yttrium_barium_cuprate',
            has64aConverter: true,
        },
        uhv: {
            superconductor: 'gtceu:stellarium',
            casing: 'gtceu:neutronium',
            cable: 'gtceu:europium',
            has64aConverter: true,
        },
        uev: {
            superconductor: 'gtceu:ancient_runicalium',
            casing: 'gtceu:mythrolic_alloy',
            cable: 'gtceu:cerium_tritelluride',
            has64aConverter: true,
        },
    };

    /**
     * @param {number} amps
     * @param {string} thickness
     */
    function converterCraftingRecipe(amps, thickness) {
        for (const [tier, info] of Object.entries(converterMaterials)) {
            event
                .shaped(Item.of(`gtceu:${tier}_${amps}a_energy_converter`), ['   ', 'WCW', 'WSW'], {
                    W: `${info.superconductor}_${thickness}_wire`,
                    C: `#gtceu:circuits/${tier}`,
                    S: `gtceu:${tier}_machine_hull`,
                })
                .id(`start:shaped/${tier}_${amps}a_energy_converter`);
        }
    }

    converterCraftingRecipe(1, 'single');
    converterCraftingRecipe(4, 'quadruple');
    converterCraftingRecipe(8, 'octal');
    converterCraftingRecipe(16, 'hex');

    // 64A Converter Recipe
    for (const [tier, info] of Object.entries(converterMaterials)) {
        if (!info.has64aConverter) continue;
        event.recipes.gtceu
            .assembler(`start_core:${tier}_64a_energy_converter`)
            .itemInputs(`#gtceu:circuits/${tier}`, `16x ${info.superconductor}_hex_wire`, `gtceu:${tier}_machine_hull`)
            .itemOutputs(Item.of(`start_core:${tier}_64a_energy_converter`))
            .duration(600)
            .EUt(1625);
    }
});

BlockEvents.placed((event) => {
    let block = event.getBlock();
    if (/^(?:gtceu|start_core):.*energy_converter$/.test(block.getId())) {
        block.mergeEntityData({ energyContainer: { feToEu: true } });
    }
});
