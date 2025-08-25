ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({id: 'minecraft:blaze_powder'});
    event.remove({id: 'gtceu:shapeless/blaze_rod_to_powder'});
    event.remove({id: 'gtceu:extractor/extract_blaze_powder'});
    event.remove({id: 'create:crushing/blaze_rod'});

    [
        {powder: 'blizz', item: 'cobalt_dust', fluid: 'fluorine', multiplier: 16, element: 'ice'},
        {powder: 'blitz', item: 'platinum_dust', fluid: 'deuterium', multiplier: 4, element: 'lightning'},
        {powder: 'basalz', item: 'small_rhodium_dust', fluid: 'helium', multiplier: 1, element: 'earth'}
    ].forEach(type=>{
        event.recipes.gtceu.chemical_reactor(id(`${type.powder}_dust`))
            .itemInputs(`gtceu:${type.item}`)
            .inputFluids(`gtceu:${type.fluid} 1000`)
            .itemOutputs(`${type.multiplier}x thermal:${type.powder}_powder`)
            .duration(200)
            .EUt(480 * type.multiplier);

        event.recipes.gtceu.large_chemical_reactor(id(`${type.powder}_dust`))
            .itemInputs(`gtceu:${type.item}`)
            .inputFluids(`gtceu:${type.fluid} 1000`)
            .itemOutputs(`${type.multiplier}x thermal:${type.powder}_powder`)
            .duration(200)
            .EUt(480 * type.multiplier);

        event.recipes.gtceu.macerator(id(`${type.powder}_powder`))
            .itemInputs(`thermal:${type.powder}_rod`)
            .itemOutputs(`4x thermal:${type.powder}_powder`)
            .duration(88)
            .EUt(2);

        event.recipes.gtceu.mixer(id(`${type.element}_charge`))
            .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', `thermal:${type.powder}_powder`)
            .itemOutputs(`3x thermal:${type.element}_charge`)
            .duration(100)
            .EUt(30);

        event.remove({id: `thermal:${type.powder}_powder`});
    });

    [
        { element: 'blaze', mod: 'minecraft' },
        { element: 'blizz', mod: 'thermal' },
        { element: 'blitz', mod: 'thermal' },
        { element: 'basalz', mod: 'thermal' },
    ].forEach(elFluid => {
        const {element, mod} = elFluid;

        event.recipes.gtceu.heat_chamber(id(`energized_${element}`))
            .itemInputs(`2x ${mod}:${element}_powder`)
            .inputFluids(`gtceu:${element} 144`)
            .outputFluids(`gtceu:energized_${element} 144`)
            .duration(200)
            .EUt(GTValues.VHA[GTValues.UV]);

        event.recipes.gtceu.fusion_reactor(id(`nether_tempered_${element}`))
            .inputFluids(`gtceu:energized_${element} 144`, `gtceu:ancient_netherite 9`)
            .outputFluids(`gtceu:nether_tempered_${element} 144`)
            .duration(200)
            .EUt(GTValues.VHA[GTValues.ZPM])
            .fusionStartEU(800000000);
    });
     
    [
        {element: 'fire', mod: 'minecraft', powder: 'blaze'},
        {element: 'ice', mod: 'thermal', powder: 'blizz'},
        {element: 'lightning', mod: 'thermal', powder: 'blitz'},
        {element: 'earth', mod: 'thermal', powder: 'basalz'}
    ].forEach(shard => {
        event.recipes.gtceu.extractor(id(`liquid_${shard.powder}`))
          .itemInputs(`${shard.mod}:${shard.powder}_powder`)
          .outputFluids(`gtceu:${shard.powder} 144`)
          .duration(22)
          .EUt(30);

        event.recipes.gtceu.autoclave(id(`${shard.element}_infused_shard_charge`))
          .itemInputs(`8x ${shard.mod}:${shard.element}_charge`)
          .inputFluids(`gtceu:${shard.powder} 720`)
          .chancedOutput(`kubejs:${shard.element}_infused_shard`, 2000, 0)
          .duration(480)
          .EUt(GTValues.VHA[GTValues.EV]);

        event.recipes.gtceu.autoclave(id(`${shard.element}_infused_shard_shard`))
          .itemInputs('kubejs:energized_nether_star_shard')
          .inputFluids(`gtceu:${shard.powder} 720`)
          .chancedOutput(`kubejs:${shard.element}_infused_shard`, 5000, 0)
          .chancedOutput(`kubejs:${shard.element}_infused_shard`, 4500, 0)
          .duration(240)
          .EUt(GTValues.VHA[GTValues.IV]);
      
        event.recipes.gtceu.autoclave(id(`${shard.element}_infused_shard_energized`))
          .itemInputs('kubejs:energized_nether_star_shard')
          .inputFluids(`gtceu:energized_${shard.powder} 576`)
          .itemOutputs(`kubejs:${shard.element}_infused_shard`)
          .chancedOutput(`kubejs:${shard.element}_infused_shard`, 2500, 0)
          .duration(120)
          .EUt(GTValues.VHA[GTValues.UV]);

        event.recipes.gtceu.autoclave(id(`${shard.element}_infused_shard_nether_tempered`))
          .itemInputs('kubejs:nether_tempered_shard')
          .inputFluids(`gtceu:nether_tempered_${shard.powder} 432`)
          .itemOutputs(`3x kubejs:${shard.element}_infused_shard`)
          .chancedOutput(`kubejs:${shard.element}_infused_shard`, 2000, 0)
          .duration(60)
          .EUt(GTValues.VHA[GTValues.UEV]);
      
    });

    event.shaped('kubejs:star_casting_mold', [
        ' F ',
        ' M ',
        '   '
    ], {
        M: 'gtceu:ball_casting_mold',
        F: '#forge:tools/files'
    }).id('start:shaped/star_casting_mold');

    event.recipes.gtceu.forming_press(id('impure_nether_star'))
        .itemInputs('kubejs:fire_infused_shard', 'kubejs:ice_infused_shard', 'kubejs:lightning_infused_shard', 'kubejs:earth_infused_shard')
        .notConsumable('kubejs:star_casting_mold')
        .itemOutputs('kubejs:impure_nether_star')
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV]);

    const implosion = [{name: 'tnt', explosive: '4x minecraft:tnt'},{name: 'dynamite', explosive: '2x gtceu:dynamite'},
        {name: 'itnt', explosive: 'gtceu:industrial_tnt'},{name: 'powderbarrel', explosive: '8x gtceu:powderbarrel'}]

    implosion.forEach(shard=>{
        event.recipes.gtceu.implosion_compressor(id(`nether_star_${shard.name}`))
            .itemInputs('kubejs:impure_nether_star', shard.explosive)
            .itemOutputs('minecraft:nether_star')
            .chancedOutput('gtceu:dark_ash_dust', 2500, 0)
            .duration(20)
            .EUt(30);
    });
    
    event.recipes.gtceu.forge_hammer(id('nether_star_shard'))
        .itemInputs('minecraft:nether_star')
        .itemOutputs('5x kubejs:nether_star_shard')
        .duration(300)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.polarizer(id('energized_nether_star_shard'))
        .itemInputs('kubejs:nether_star_shard')
        .itemOutputs('kubejs:energized_nether_star_shard')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV]);

    event.recipes.gtceu.injection_mixer(id('nether_tempered_nether_star_shard'))
        .itemInputs('256x kubejs:energized_nether_star_shard')
        .inputFluids('gtceu:magmada_alloy 16', 'gtceu:utopian_akreyrium 50')
        .itemOutputs('256x kubejs:nether_tempered_shard')
        .duration(1200)
        .dimension('minecraft:the_nether')
        .EUt(GTValues.VHA[GTValues.UHV]);

});
