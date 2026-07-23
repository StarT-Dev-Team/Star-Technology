GTCEuStartupEvents.registry('gtceu:material', (event) => {
    // Periodic table materials
    const element = global.periodicTableElement;
    // Ingots
    element('zirconium', 'ingot');
    element('tellurium', 'ingot');
    element('polonium', 'ingot');
    element('astatine', 'ingot');
    element('hafnium', 'ingot');
    element('seaborgium', 'ingot');
    element('flerovium', 'ingot');
    element('rhenium', 'ingot');
    element('dysprosium', 'ingot');

    // Dusts
    element('selenium', 'dust');
    element('strontium', 'dust');
    element('thallium', 'dust');
    element('neptunium', 'dust');
    element('fermium', 'dust');

    // Liquids
    element('seaborgium', 'fluid');
    element('flerovium', 'fluid');
    element('rhenium', 'fluid');
    element('zirconium', 'fluid');
    element('hafnium', 'fluid');
    element('fermium', 'fluid');
    element('selenium', 'fluid');

    // Gasses

    // Plasmas

    // Plasma + Gas
    element('oganesson', 'gas_plasma');
});
