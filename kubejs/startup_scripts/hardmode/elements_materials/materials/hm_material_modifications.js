GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const matmod = (mat, flag) => {
        GTMaterials.get(mat).addFlags(flag);
    };
    matmod('iron', [foil, fine_wire]);
    matmod('brass', [ring, foil, frame]);
    matmod('tin_alloy', [ring, foil, rotor]);
    matmod('potin', [foil, ring, small_gear]);
    matmod('cupronickel', [ring]);
    matmod('nickel', [foil]);
    matmod('wrought_iron', [frame, small_gear]);
    matmod('red_alloy', [spring]);
    matmod('lead', [small_gear]);
    matmod('black_steel', [bolt_and_screw, rotor, gear, small_gear]);
    matmod('hsla_steel', [bolt_and_screw, rotor]);
    matmod('ultimet', [gear, small_gear]);
    matmod('magnalium', [gear, small_gear]);
    matmod('damascus_steel', [gear, small_gear, fine_wire, foil]);
    matmod('blue_alloy', [fine_wire, foil]);
    matmod('promethium', [plates]);
});

GTCEuStartupEvents.materialModification((event) => {
    GTMaterials.get('yttrium_carbonate').setFormula('Y2(CO3)3');
    GTMaterials.get('platinum_salt').setFormula('(NH3)4PtCl6');
    GTMaterials.get('palladium_salt').setFormula('(NH3)5PdCl4');
    GTMaterials.get('iridium_rich_residue').setFormula('Ir?Oₓ');
});
