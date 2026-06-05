// packmode: hard

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    // Periodic table materials
    const element = global.periodicTableElement;
    // Ingots
    element('promethium', 'ingot');
    element('holmium', 'ingot');
    const blast = global.blastProperty;
    blast('promethium', 1315, 'high', global.va('ev'), 3458);
    blast('holmium', 1747, 'mid', global.vha('ev'), 3346);
});
