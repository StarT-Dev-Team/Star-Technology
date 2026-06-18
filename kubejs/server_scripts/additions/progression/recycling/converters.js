ServerEvents.recipes((event) => {
    const id = global.id;
    const calculateDuration = global.calculateRecyclingDuration;
    const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;

    //old recipe removals
    event.remove({ input: /gtceu:.*_energy_converter/, type: 'gtceu:macerator' });
    event.remove({ input: /gtceu:.*_energy_converter/, type: 'gtceu:arc_furnace' });

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

    for (let amps of [1, 4, 8, 16, 64]) {
        for (let [tier, info] of Object.entries(converterMaterials)) {
            if (amps === 64 && !info.has64aConverter) continue;

            let converterPrefix = amps === 64 ? 'start_core' : 'gtceu';

            let cableArc = info.cable === 'gtceu:copper' ? 'gtceu:annealed_copper' : info.cable;
            let outputsArc = [`8x ${info.casing}_ingot`, `${cableArc}_ingot`, `2x gtceu:tiny_ash_dust`];
            let appendArc =
                amps === 64
                    ? [`64x ${info.superconductor}_ingot`, `64x ${info.superconductor}_ingot`]
                    : [`${amps * 2}x ${info.superconductor}_ingot`];
            outputsArc.splice.apply(outputsArc, [amps < 8 ? 1 : 0, 0].concat(appendArc));

            let cableMacerator = info.cable === 'minecraft:gold' ? 'gtceu:gold' : info.cable;
            let outputsMacerator = [`8x ${info.casing}_dust`, `2x gtceu:rubber_dust`, `${cableMacerator}_dust`];
            let appendMacerator =
                amps === 64
                    ? [`64x ${info.superconductor}_dust`, `64x ${info.superconductor}_dust`]
                    : [`${amps * 2}x ${info.superconductor}_dust`];
            outputsMacerator.splice.apply(outputsMacerator, [amps < 8 ? 1 : 0, 0].concat(appendMacerator));

            event.recipes.gtceu
                .arc_furnace(id(`arc_${tier}_${amps}a_energy_converter`))
                .itemInputs(`${converterPrefix}:${tier}_${amps}a_energy_converter`)
                .itemOutputs(outputsArc)
                .duration(calculateDuration(outputsArc))
                .EUt(GTValues.VA[GTValues.LV])
                .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);

            event.recipes.gtceu
                .macerator(id(`macerate_${tier}_${amps}a_energy_converter`))
                .itemInputs(`${converterPrefix}:${tier}_${amps}a_energy_converter`)
                .itemOutputs(outputsMacerator)
                .duration(calculateDuration(outputsMacerator))
                .EUt(2 * calculateVoltageMultiplier(outputsMacerator))
                .category(GTRecipeCategories.MACERATOR_RECYCLING);
        }
    }
});
