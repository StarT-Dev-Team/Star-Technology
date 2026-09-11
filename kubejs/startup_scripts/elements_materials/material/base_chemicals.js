// priority: 5000

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('perchloric_acid', ['1x hydrogen', '1x chlorine', '4x oxygen'], 0xffe6e6, []);

    MH.compDust('calcium_perchlorate', ['1x calcium', '2x chlorine', '8x oxygen'], 0xffff99, []);

    MH.compLiquid('silica_gel', ['1x chlorine', '1x hydrogen', '6x oxygen', '1x silicon'], 0xe6e6e6, [noDecomp]);

    MH.compDust('calcium_sulfate', ['1x calcium', '1x sulfur', '4x oxygen'], 0xffbf80, []);

    MH.compDust('sodium_oxide', ['2x sodium', '1x oxygen'], 0x6666ff, []);

    MH.compDust('strontium_oxide', ['1x strontium', '1x oxygen'], 0xffcc99, []);

    MH.compDust('titanium_oxide', ['1x titanium', '2x oxygen'], 0xff66cc, []);

    MH.compDust('strontium_titanium_oxide', ['1x strontium', '1x titanium', '3x oxygen'], 0xff0000, []);

    MH.compDust('copper_chloride', ['1x copper', '1x chlorine'], 0xfff9e8, []);

    MH.compLiquid('cupric_chloride_solution', ['1x copper_chloride', '1x hydrochloric_acid'], 0x336600, []);

    MH.compLiquid('hydroiodic_acid', ['1x hydrogen', '1x iodine'], 0x906ad6, [noDecomp]);

    MH.compDustIcon('nickel_fluoride', ['1x nickel', '2x fluorine'], 0xa7a9a8, ICONSETS.metallic, []);

    MH.compDustIcon('caesium_fluoride', ['1x caesium', '1x fluorine'], 0x969d9b, ICONSETS.dull, []);

    MH.compLiquid('bromine_pentafluoride', ['1x bromine', '5x fluorine'], 0x8e6565, []);

    MH.compLiquid('hexafluorobromine', ['1x bromine', '6x fluorine'], 0x000000, [noDecomp]);

    MH.compLiquid('caesium_hexafluorobromine', ['1x caesium', '1x hexafluorobromine'], 0x988585, [noDecomp]);

    MH.compLiquid('hexafluorobromic_acid', ['1x hydrogen', '1x hexafluorobromine'], 0xa15e5e, [noDecomp]);

    MH.compDust('sulfur_hexafluoride', ['1x sulfur', '6x fluorine'], 0xc0ba63, [noDecomp]);

    MH.compDust('magnesium_hydroxide', ['1x magnesium', '2x hydroxide'], 0x766b73, [noDecomp]);

    MH.compDust('iron_2_hydroxide', ['1x iron', '2x hydroxide'], 0x929a98, [noDecomp]);

    MH.compDust('sodium_astatide', ['1x sodium', '1x astatine'], 0x5f5076, [noDecomp]);

    MH.compLiquid('silicic_acid', ['4x hydrogen', '1x silicate'], 0xb4bbbe, [noDecomp]);

    MH.compDust('seaborgium_dioxide', ['1x seaborgium', '2x oxygen'], 0x12a190, [noDecomp]);

    MH.compDust('hafnium_hexachloride', ['1x hafnium', '6x chlorine'], 0xa0a8a6, [noDecomp]);

    MH.compDust('silver_sulfate', ['2x silver', '1x sulfur', '4x oxygen'], 0xd4cf91, []);

    MH.compDust('flerovium_tetrafluoride', ['1x flerovium', '4x fluorine'], 0x254722, [noDecomp]);

    MH.compLiquid('pyrophosphoric_acid', ['4x hydrogen', '1x pyrophosphate'], 0xb3a36d, []);

    MH.compDust('polonium_carbonate', ['1x polonium', '1x carbon', '3x oxygen'], 0x2f5637, [noDecomp]);

    MH.compDust('indium_oxide', ['2x indium', '3x oxygen'], 0xe3d28e, []);

    MH.compDustLiquid('tungsten_disulfide', ['1x tungsten', '2x sulfur'], 0x928897, [noDecomp]);

    MH.compDust('iron_titanium_oxide', ['3x iron', '2x titanium', '7x oxygen'], 0x82229b, [noDecomp]);

    MH.compLiquid('magnesium_nitride', ['3x magnesium', '2x nitrogen'], 0xcc66ff, []);
});
