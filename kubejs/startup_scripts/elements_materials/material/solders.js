GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    MH.compIngotLiquid(
        'indium_tin_lead_cadmium_soldering_alloy',
        ['14x indium', '3x tin', '2x lead', '1x cadmium'],
        0xa6a6a6,
        null,
        null,
        []
    );

    MH.compIngotLiquid(
        'naquadated_soldering_alloy',
        ['3x tin', '18x indium', '6x silver', '4x lutetium', '3x cerium', '3x naquadah', '1x trinium', '2x lead'],
        0x8790a1,
        null,
        null,
        []
    );
});
