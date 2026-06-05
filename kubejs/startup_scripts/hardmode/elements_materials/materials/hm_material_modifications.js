// packmode: hard

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const matmod = (mat, flag) => {
        GTMaterials.get(mat).addFlags(flag);
    };
    /* eslint-disable no-undef */
    matmod('iron', [foil, fineWire]);
    matmod('brass', [ring, foil, frame]);
    matmod('tin_alloy', [ring, foil, rotor]);
    matmod('potin', [foil, ring, smallGear]);
    matmod('cupronickel', [ring]);
    matmod('nickel', [foil]);
    matmod('wrought_iron', [frame, smallGear]);
    matmod('red_alloy', [spring]);
    matmod('lead', [smallGear]);
    matmod('black_steel', [boltAndScrew, rotor, gear, smallGear]);
    matmod('hsla_steel', [boltAndScrew, rotor]);
    matmod('ultimet', [gear, smallGear]);
    matmod('magnalium', [gear, smallGear]);
    matmod('damascus_steel', [gear, smallGear, fineWire, foil]);
    matmod('blue_alloy', [fineWire, foil]);
    matmod('promethium', [plates]);
    /* eslint-enable no-undef */
});

GTCEuStartupEvents.materialModification((event) => {
    GTMaterials.get('yttrium_carbonate').setFormula('Y2(CO3)3');
    GTMaterials.get('platinum_salt').setFormula('(NH3)4PtCl6');
    GTMaterials.get('palladium_salt').setFormula('(NH3)5PdCl4');
    GTMaterials.get('iridium_rich_residue').setFormula('Ir?Oₓ');
});
