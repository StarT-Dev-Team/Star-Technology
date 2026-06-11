StartupEvents.registry('mob_effect', (event) => {
    // Abydos
    event.create('sand_erosion').color(0x00ff00).category('harmful');

    // Nether
    event.create('radiation_poisoning').color(0x00ff00).category('harmful');

    event.create('toxic_atmosphere').color(0x8b4513).category('harmful');

    // End
    event.create('abyssal_drain').color(0x8b4513).category('harmful');
});
