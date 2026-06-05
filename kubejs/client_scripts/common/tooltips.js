// priority -100

ItemEvents.tooltip((event) => {
    const addedByStarT = global.addedByStarT;
    const tiers = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv'];
    const addedByStarTSingles = ['electric_blaster', 'electric_smoker', 'me_assembler'];

    tiers.forEach((tier) => {
        addedByStarTSingles.forEach((name) => {
            event.add(`gtceu:${tier}_${name}`, Text.translate(`block.kubejs.added_by_StarT.tooltip`));
        });
    });

    let prefix;

    addedByStarT.machines.forEach((machine) => {
        prefix = addedByStarT.isCore.includes(machine) ? 'start_core:' : 'gtceu:';

        event.add(prefix + machine, Text.translate(`block.kubejs.added_by_StarT.tooltip`));
    });

    event.addAdvanced(/gtceu:.*_macerator/, (item, advanced, text) => {
        text.add(1, Text.translate('block.gtceu.macerators.tooltip.1'));
    });

    event.addAdvanced('gtceu:ulv_fluid_input', (item, advanced, text) => {
        text.add(1, Text.translate('block.gtceu.ulv_fluid_input.tooltip.1'));
        text.add(2, Text.translate('block.gtceu.ulv_fluid_input.tooltip.2'));
    });

    event.addAdvanced('gtceu:uhv_stabilization_module', (item, advanced, text) => {
        text.add(1, Text.of('Multiblock Sharing §4Disabled'));
        text.add(2, Text.of('Makes your Multiblocks extremely stable for mass assembly!'));
        text.add(3, Text.of('Level of Stabilization:'));
        text.add(4, Text.of('   §bAbsolute Stabilization'));
    });

    event.addAdvanced('gtceu:large_maceration_tower', (item, advanced, text) => {
        text.add(Text.translate('block.gtceu.large_maceration_tower.tooltip.1'));
    });

    //Custom Colossal Chest Tooltips
    const colossalTypes = [`wood`, `copper`, `iron`, `silver`, `gold`, `diamond`, `obsidian`];
    colossalTypes.forEach((type) => {
        event.add(
            `colossalchests:colossal_chest_${type}`,
            Text.translate(`item.colossalchests.colossal_chest.tooltip`)
        );
    });

    //Theta 2 removals
    const theta2Removals = [
        'essence_burner',
        'mystical_greenhouse',
        'essence_enchancer',
        'essence_replicator',
        'nuclear_reactor',
    ];
    theta2Removals.forEach((name) => {
        if (name === 'essence_burner' || name === 'mystical_greenhouse') {
            tiers.forEach((tier) => {
                event.add(`gtceu:${tier}_${name}`, Text.translate(`block.gtceu.theta2Removals.tooltip`));
            });
        } else {
            event.add(`gtceu:${name}`, Text.translate(`block.gtceu.theta2Removals.tooltip`));
        }
    });
});
