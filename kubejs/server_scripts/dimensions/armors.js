ServerEvents.recipes(event => {

    const id = global.id;

    [
        { plastic: 'polyethylene', chance: 500, amount: 9216 },
        { plastic: 'polytetrafluoroethylene', chance: 1125, amount: 2304 },
        { plastic: 'epoxy', chance: 2250, amount: 576 },
        { plastic: 'polybenzimidazole', chance: 4500, amount: 144 },
        { plastic: 'polyether_ether_ketone', chance: 9000, amount: 36 },
        { plastic: 'poly_34_ethylenedioxythiophene_polystyrene_sulfate', chance: 18000, amount: 9 }
    ].forEach(mat => {

        const {plastic, chance, amount} = mat;
        const guaranteed = Math.floor(chance / 10000);
        const bonus = chance - guaranteed * 10000;

        if (guaranteed >= 1) {
            event.recipes.gtceu.autoclave(id('naquadic_netherite_fibers/' + plastic))
                .itemInputs('4x gtceu:naquadic_netherite_dust')
                .inputFluids(`gtceu:${plastic} ${amount}`)
                .itemOutputs(`${guaranteed}x kubejs:naquadic_netherite_fibers`)
                .chancedOutput('kubejs:naquadic_netherite_fibers', bonus, 0)
                .duration(148)
                .EUt(GTValues.VHA[GTValues.UHV]);
        } else {
            event.recipes.gtceu.autoclave(id('naquadic_netherite_fibers/' + plastic))
                .itemInputs('4x gtceu:naquadic_netherite_dust')
                .inputFluids(`gtceu:${plastic} ${amount}`)
                .chancedOutput('kubejs:naquadic_netherite_fibers', chance, 0)
                .duration(148)
                .EUt(GTValues.VHA[GTValues.UHV]);
        }

    });

    ['helmet', 'chestplate', 'leggings', 'boots'].forEach(part => {

        const nether_piece = `kubejs:nether_${part}`;
        const end_piece = `kubejs:end_${part}`;
        const hazmat = `gtceu:hazmat_${(part === 'chestplate') ? 'chestpiece' : (part === 'helmet') ? 'headpiece': part}`;
        const jaffa = Item.of(`sgjourney:naquadah_${part}`);

        event.recipes.gtceu.assembly_line(id(`nether_${part}`))
            .itemInputs(
                hazmat, 
                '64x gtceu:ancient_runicalium_foil', 
                '48x kubejs:naquadic_netherite_fibers', 
                '4x #gtceu:circuits/uhv',
                '2x gtceu:uhv_field_generator', 
                '4x kubejs:runic_stabilization_plating', 
                '64x gtceu:fine_thorium_plut_duranide_241_wire'
            )
            .inputFluids('gtceu:naquadria 1440', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 2880', 'gtceu:utopian_akreyrium 400')
            .itemOutputs(nether_piece)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(jaffa)
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(144)
                )
            .duration(2400)
            .EUt(GTValues.VHA[GTValues.UEV]);

        event.recipes.gtceu.assembly_line(id(`end_${part}`))
            .itemInputs(
                nether_piece, 
                '64x gtceu:starium_alloy_foil', 
                '64x kubejs:naquadic_netherite_fibers', 
                '4x #gtceu:circuits/uev',
                '2x gtceu:uev_field_generator', 
                '16x kubejs:runic_stabilization_plating', 
                '64x gtceu:fine_aurourium_wire'
            )
            .inputFluids('gtceu:isovol 1440', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 2880', 'gtceu:utopian_akreyrium 2400')
            .itemOutputs(end_piece)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(nether_piece)
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(160)
                )
            .duration(2400)
            .EUt(GTValues.VHA[GTValues.UIV]);

    });
    
    event.recipes.create.mechanical_crafting('kubejs:nether_talisman', [
		'M     M',
		'N M M N',
		'N N N N',
		'AAAAAAA',
        'AAARAAA',
        'DDDDDDD'
	], {
		M: 'gtceu:magmada_alloy_round',
		N: 'gtceu:netherite_gold_skystone_alloy_rod',
		A: 'gtceu:ancient_runicalium_ingot',
		R: 'gtceu:exquisite_ruby_gem',
        D: 'gtceu:adamantine_ingot'
	}).id('start:mechanical_crafting/hell_crown');

    event.recipes.gtceu.draco_infusion(id('elder_dragon_wings'))
    .itemInputs('minecraft:elytra', 'gtceu:void_foil', 'gtceu:void_foil', 'gtceu:neutron_reflector', 
        'gtceu:neutron_reflector', 'gtceu:void_rod', 'gtceu:void_rod')
    .inputFluids('gtceu:dragon_breath 1200')
    .itemOutputs('kubejs:end_talisman')
    .duration(320)
    .EUt(GTValues.VHA[GTValues.UV]);

});