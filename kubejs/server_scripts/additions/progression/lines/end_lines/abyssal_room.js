ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .extractor(id('secreting_cell_extraction'))
        .itemInputs('kubejs:secreting_draconic_cells')
        .outputFluids('gtceu:draconic_hormone_residue 75')
        .duration(40)
        .EUt(GTValues.VHA[GTValues.UEV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .large_chemical_reactor(id('drac_endrocritic_medium'))
        .inputFluids(
            'gtceu:biostimulating_mixture 250',
            'gtceu:draconic_hormone_residue 450',
            'gtceu:raw_growth_medium 300'
        )
        .outputFluids('gtceu:drac_endrocritic_medium 1000')
        .duration(500)
        .EUt(GTValues.VHA[GTValues.UHV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .chemical_bath(id('drac_aurouric_endrocrinal_medium'))
        .itemInputs('gtceu:small_aurourium_dust')
        .inputFluids('gtceu:drac_endrocritic_medium 600')
        .outputFluids('gtceu:drac_aurouric_endrocrinal_medium 600')
        .duration(120)
        .EUt(GTValues.VHA[GTValues.UEV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .mixer(id('precursor_serum'))
        .itemInputs('gtceu:tiny_mythril_dust', 'gtceu:tiny_adamantine_dust')
        .inputFluids('gtceu:iron_iii_chloride 800')
        .outputFluids('gtceu:precursor_serum 750')
        .duration(180)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('abyssal_nutrient_blend'))
        .inputFluids('gtceu:drac_aurouric_endrocrinal_medium 400', 'gtceu:precursor_serum 100')
        .outputFluids('gtceu:abyssal_nutrient_blend 500')
        .duration(640)
        .EUt(GTValues.VHA[GTValues.UHV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .distillery(id('condensed_abyssal_nutrient_blend'))
        .inputFluids('gtceu:abyssal_nutrient_blend 500')
        .outputFluids('gtceu:condensed_abyssal_nutrient_blend 200')
        .duration(300)
        .EUt(GTValues.VHA[GTValues.UHV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .mixer(id('amino_primed_medium'))
        .itemInputs('gtceu:collagen_dust')
        .inputFluids('gtceu:condensed_abyssal_nutrient_blend 500')
        .outputFluids('gtceu:amino_primed_medium 500')
        .duration(250)
        .EUt(GTValues.VHA[GTValues.UHV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .autoclave(id('draco_peptide_amino_chain'))
        .itemInputs('gtceu:gelatin_dust')
        .inputFluids('gtceu:amino_primed_medium 125')
        .itemOutputs('kubejs:draco_peptide_amino_chain')
        .duration(315)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    /**
     * @param {string} type
     * @param {string} fluid
     */
    const breathHormone = (type, fluid) => {
        event.recipes.gtceu
            .autoclave(id(type))
            .itemInputs('kubejs:draco_peptide_amino_chain')
            .inputFluids(fluid)
            .outputFluids(`gtceu:${type} 125`)
            .duration(30)
            .EUt(GTValues.VHA[GTValues.UIV])
            .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);
    };

    breathHormone('voidrenin', 'gtceu:echo_r 16');
    breathHormone('terrathroxin', 'gtceu:nether_tempered_basalz 16');
    breathHormone('stormcallin', 'gtceu:nether_tempered_blitz 16');
    breathHormone('cryokinase', 'gtceu:nether_tempered_blizz 16');
    breathHormone('ignisferin', 'gtceu:nether_tempered_blaze 16');

    event.recipes.gtceu
        .large_chemical_reactor(id('drac_peptide_amino_residue'))
        .itemInputs('kubejs:draco_peptide_amino_chain')
        .inputFluids('gtceu:abyssal_nutrient_blend 500')
        .outputFluids('gtceu:drac_peptide_amino_residue 500')
        .duration(60)
        .EUt(GTValues.VHA[GTValues.UEV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    /**
     * @param {string} type
     * @param {string} dust
     */
    const growthHormone = (type, dust) => {
        event.recipes.gtceu
            .autoclave(id(type))
            .itemInputs(`gtceu:tiny_${dust}_dust`)
            .inputFluids('gtceu:drac_peptide_amino_residue 500')
            .outputFluids(`gtceu:${type} 500`)
            .duration(90)
            .EUt(GTValues.VHA[GTValues.UHV])
            .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);
    };

    growthHormone('hemavyrin', 'hematite');
    growthHormone('aethermetin', 'glowstone');
    growthHormone('metavorexin', 'rhenium');
    growthHormone('dracotropin', 'enriched_naquadah');
    growthHormone('pyrothyin', 'activated_nether');

    /**
     * @param {string} type
     * @param {[string, string, string, string, string]} inputs
     */
    let hormoneComplex = (type, inputs) => {
        event.recipes.gtceu
            .injection_mixer(id(`${type}_hormone_complex`))
            .inputFluids(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4])
            .outputFluids(`gtceu:${type}_hormone_complex 500`)
            .duration(75)
            .EUt(GTValues.VHA[GTValues.UEV])
            .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);
    };

    hormoneComplex('breath', [
        'gtceu:voidrenin 150',
        'gtceu:terrathroxin 75',
        'gtceu:stormcallin 100',
        'gtceu:cryokinase 75',
        'gtceu:ignisferin 100',
    ]);
    hormoneComplex('growth', [
        'gtceu:hemavyrin 100',
        'gtceu:aethermetin 100',
        'gtceu:metavorexin 100',
        'gtceu:dracotropin 100',
        'gtceu:pyrothyin 100',
    ]);

    event.recipes.gtceu
        .mixer(id('pure_dragon_breath'))
        .inputFluids('gtceu:dragon_breath 1300', 'gtceu:breath_hormone_complex 200')
        .outputFluids('gtceu:pure_dragon_breath 500')
        .duration(425)
        .EUt(GTValues.VHA[GTValues.UIV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .mixer(id('draconic_enrichment_serum'))
        .inputFluids('gtceu:sterilized_growth_medium 1300', 'gtceu:growth_hormone_complex 200')
        .outputFluids('gtceu:draconic_enrichment_serum 500')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.UEV])
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);
});
