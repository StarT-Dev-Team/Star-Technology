global.notHardmode(() => {
    ServerEvents.recipes((event) => {
        const id = global.id;

        // === Coke Oven ===
        event.recipes.gtceu
            .coke_oven(id('sugar_coke'))
            .itemOutputs('minecraft:charcoal')
            .outputFluids(Fluid.of('gtceu:creosote', 50))
            .itemInputs('8x minecraft:sugar_cane')
            .duration(1200);

        // === Blast Furnace Controllers ===
        event.replaceInput(
            { id: 'gtceu:shaped/bronze_primitive_blast_furnace' },
            '#forge:plates/iron',
            'gtceu:wrought_iron_plate'
        );
        event.replaceInput(
            { id: 'gtceu:shaped/bronze_primitive_blast_furnace' },
            '#forge:rods/iron',
            'gtceu:wrought_iron_rod'
        );
        event.replaceInput(
            { id: 'gtceu:shaped/bronze_primitive_blast_furnace' },
            'gtceu:iron_screw',
            'gtceu:wrought_iron_screw'
        );

        event
            .shaped(Item.of('gtceu:solid_blast_furnace'), ['HRS', 'PBR', 'FRS'], {
                H: '#forge:tools/hammers',
                R: 'gtceu:steel_rod',
                S: 'gtceu:steel_screw',
                P: 'gtceu:steel_plate',
                B: 'kubejs:high_steam_machine_casing',
                F: '#forge:tools/screwdrivers',
            })
            .id('start:shaped/solid_blast_furnace');

        // === SBF ===
        const coalType = ['coal', 'charcoal'];

        const ironType = (feType, baseTime, cokeScaler) => {
            const naming = feType.split(':')[1];
            coalType.forEach((coal) => {
                event.recipes.gtceu
                    .solid_blast_furnace(id(`${naming}_${coal}_to_steel_dust`))
                    .itemInputs(`${feType}_ingot`, `2x gtceu:${coal}_dust`)
                    .itemOutputs('gtceu:steel_ingot', 'gtceu:tiny_dark_ash_dust')
                    .duration(baseTime);

                event.recipes.gtceu
                    .solid_blast_furnace(id(`${naming}_${coal}_to_steel`))
                    .itemInputs(`${feType}_ingot`, `2x minecraft:${coal}`)
                    .itemOutputs('gtceu:steel_ingot', 'gtceu:tiny_dark_ash_dust')
                    .duration(baseTime);
            });

            event.recipes.gtceu
                .solid_blast_furnace(id(`${naming}_coal_to_steel_block`))
                .itemInputs(`${feType}_block`, '2x minecraft:coal_block')
                .itemOutputs('gtceu:steel_block', 'gtceu:dark_ash_dust')
                .duration(baseTime * 9);

            event.recipes.gtceu
                .solid_blast_furnace(id(`${naming}_charcoal_to_steel_block`))
                .itemInputs(`${feType}_block`, '2x gtceu:charcoal_block')
                .itemOutputs('gtceu:steel_block', 'gtceu:dark_ash_dust')
                .duration(baseTime * 9);

            event.recipes.gtceu
                .solid_blast_furnace(id(`${naming}_coke_to_steel_block`))
                .itemInputs(`${feType}_block`, 'gtceu:coke_block')
                .itemOutputs('gtceu:steel_block', 'gtceu:ash_dust')
                .duration(baseTime * 9 * cokeScaler);

            event.recipes.gtceu
                .solid_blast_furnace(id(`${naming}_coke_to_steel_dust`))
                .itemInputs(`${feType}_ingot`, 'gtceu:coke_dust')
                .itemOutputs('gtceu:steel_ingot', 'gtceu:ash_dust')
                .duration(baseTime * cokeScaler);

            event.recipes.gtceu
                .solid_blast_furnace(id(`${naming}_coke_to_steel`))
                .itemInputs(`${feType}_ingot`, 'gtceu:coke_gem')
                .itemOutputs('gtceu:steel_ingot', 'gtceu:ash_dust')
                .duration(baseTime * cokeScaler);
        };
        ironType('minecraft:iron', 720, 5 / 6);
        ironType('gtceu:wrought_iron', 320, 3 / 4);
    });
});
