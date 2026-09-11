// priority: 1500

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame, fineWire, densePlate } = FLAGS;

    MH.elemIngotFluid(
        'pure_netherite',
        0x1a0d00,
        ICONSETS.dull,
        [5000, 'low', GTValues.VA[IV], 1200],
        [foil, gear, longRod, plates, rod, rotor, smallGear, ring]
    );

    MH.compGem(
        'naquadic_netherite',
        ['3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen'],
        0xffd966,
        ICONSETS.diamond,
        []
    );

    // moved to avoid error
    MH.compIngotLiquid(
        'trinaquadalloy',
        ['5x trinium', '3x naquadah', '2x carbon'],
        0x281832,
        ICONSETS.bright,
        [8750, 'higher', GTValues.VA[ZPM], 1000],
        [plates, rod, frame, fineWire, foil, densePlate]
    );

    MH.compIngotLiquid(
        'weapon_grade_naquadah',
        ['7x naquadria', '4x pure_netherite', '6x trinaquadalloy', '12x fluorine'],
        0xccff33,
        ICONSETS.dull,
        [9001, 'highest', GTValues.VA[ZPM], 2400],
        [foil, plates, rod, frame]
    );

    MH.compIngotLiquid(
        'stellarized_weapon_grade_naquadah',
        ['1x void', '8x weapon_grade_naquadah', '4x stellarium'],
        0x57ab6b,
        ICONSETS.shiny,
        [12049, 'highest', GTValues.VA[UHV], 3600],
        [foil, plates, rod, frame]
    );

    MH.compGem(
        'runic_laser_source_base',
        ['6x naquadic_netherite', '6x neptunium', '5x trinium'],
        0x00ff00,
        ICONSETS.opal,
        []
    );

    MH.compGem(
        'akreyriadic_runixium',
        ['7x runic_laser_source_base', '4x ancient_runicalium', '2x strontium_titanium_oxide', '5x akreyrium'],
        0xffba75,
        ICONSETS.opal,
        []
    );
});
