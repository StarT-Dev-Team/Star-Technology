// requires: ae2
ServerEvents.recipes((event) => {
    const id = global.id;
    const isModLoaded = global.withModsLoaded;

    event.remove({ output: 'ae2:cell_component_1k' });
    event.recipes.gtceu
        .me_assembler(id('cell_component_1k'))
        .itemInputs('3x ae2:logic_processor', '#gtceu:circuits/ulv', '12x gtceu:fine_red_alloy_wire')
        .inputFluids('gtceu:sky_steel 18')
        .itemOutputs('ae2:cell_component_1k')
        .duration(400)
        .EUt(global.v['ulv']);

    /**
     * @param {string} higher
     * @param {string} lower
     * @param {GTTier} voltage
     * @param {string} wire
     * @param {number} multiplier
     */
    const storageBase = (higher, lower, voltage, wire, multiplier) => {
        event.remove({ output: higher });
        event.recipes.gtceu
            .me_assembler(higher.split(':')[1])
            .itemInputs(`3x ${lower}`, `#gtceu:circuits/${voltage}`, `12x gtceu:fine_${wire}_wire`)
            .inputFluids(`gtceu:sky_steel ${36 * multiplier}`)
            .itemOutputs(higher)
            .duration(400)
            .EUt(global.v[`${voltage}`]);
    };

    storageBase('ae2:cell_component_4k', 'ae2:cell_component_1k', 'lv', 'tin', 1);
    storageBase('ae2:cell_component_16k', 'ae2:cell_component_4k', 'mv', 'copper', 2);
    storageBase('ae2:cell_component_64k', 'ae2:cell_component_16k', 'hv', 'gold', 4);
    storageBase('ae2:cell_component_256k', 'ae2:cell_component_64k', 'ev', 'aluminium', 8);

    isModLoaded('megacells', () => {
        storageBase('megacells:cell_component_1m', 'ae2:cell_component_256k', 'iv', 'platinum', 16);
        storageBase('megacells:cell_component_4m', 'megacells:cell_component_1m', 'luv', 'niobium_titanium', 32);
        storageBase('megacells:cell_component_16m', 'megacells:cell_component_4m', 'zpm', 'vanadium_gallium', 64);
        storageBase(
            'megacells:cell_component_64m',
            'megacells:cell_component_16m',
            'uv',
            'yttrium_barium_cuprate',
            128
        );
        storageBase('megacells:cell_component_256m', 'megacells:cell_component_64m', 'uhv', 'europium', 256);

        event.replaceInput(
            { id: 'megacells:crafting/bulk_cell_component' },
            'megacells:accumulation_processor',
            '#gtceu:circuits/iv'
        );
        event.replaceInput(
            { id: 'megacells:crafting/bulk_cell_component' },
            'ae2:quartz_vibrant_glass',
            'gtceu:laminated_glass'
        );

        event.recipes.gtceu
            .me_assembler(id('cell_component_1m_skip'))
            .itemInputs(
                '512x ae2:logic_processor',
                '#gtceu:circuits/luv',
                '4x kubejs:ae2_soc_chip',
                '48x gtceu:fine_niobium_titanium_wire'
            )
            .inputFluids('gtceu:fluix_steel 576')
            .itemOutputs('megacells:cell_component_1m')
            .duration(400)
            .EUt(global.v['luv']);
    });

    /**
     * @param {string} tier
     * @param {string} storage
     * @param {GTTier} voltage
     */
    const spatial = (tier, storage, voltage) => {
        event.remove({ output: `ae2:spatial_cell_component_${tier}` });
        event.recipes.gtceu
            .me_assembler(id(`spatial_cell_component_${tier}`))
            .itemInputs(
                `ae2:cell_component_${storage}k`,
                `gtceu:${voltage}_field_generator`,
                '6x gtceu:fluix_steel_foil',
                `2x #gtceu:circuits/${voltage}`
            )
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`ae2:spatial_cell_component_${tier}`)
            .duration(400)
            .EUt(global.v[voltage]);
    };

    spatial('2', '16', 'mv');
    spatial('16', '64', 'hv');
    spatial('128', '256', 'ev');
});
