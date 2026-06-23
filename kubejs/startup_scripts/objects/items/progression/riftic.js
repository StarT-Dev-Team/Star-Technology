StartupEvents.registry('item', (event) => {
    //KOMARU Filament
    event.create('komaru_filament_t1').texture('kubejs:item/progression/riftic/komaru/filament_t1');

    event.create('komaru_filament_t2').texture('kubejs:item/progression/riftic/komaru/filament_t2');

    // KOMARU Parts
    event
        .create('komaru_gravitational_stabilisers')
        .texture('kubejs:item/progression/riftic/komaru/gravitational_stabilisers');

    event.create('komaru_rift_caller').texture('kubejs:item/progression/riftic/komaru/rift_caller');

    event.create('komaru_plating').texture('kubejs:item/progression/riftic/komaru/plating');

    //Riftions
    for (let i = 0; i <= 5; i++) {
        let riftion = ['undina', 'sylvestris', 'gnomus', 'vulcanus', 'illustris', 'tenebrosus'];
        //water, air, earth, fire, light, dark
        let riftionSymbol = ['ᵁ', 'ˢ', 'ᴳ', 'ⱽ', 'ᴵ', 'ᵀ'];

        let charge = ['up', 'down', 'neutral'];
        let chargeSymbol = ['§a⁺§r', '§c⁻§r', '§6⁰§r'];

        event
            .create(`${riftion[i]}_singularity`)
            .texture(`kubejs:item/progression/riftic/singularity/${riftion[i]}`)
            .textureJson({
                layer0: `kubejs:item/progression/riftic/singularity/${riftion[i]}/base`,
                layer1: 'kubejs:item/progression/riftic/singularity/overlay',
                layer2: `kubejs:item/progression/riftic/singularity/${riftion[i]}/orbit_1`,
                layer3: `kubejs:item/progression/riftic/singularity/${riftion[i]}/orbit_2`,
            })
            .tooltip('ψ§l' + riftionSymbol[i] + '§r');

        for (let j = 0; j <= 2; j++) {
            event
                .create(`${charge[j]}_${riftion[i]}_riftion`)
                .textureJson({
                    layer0: `kubejs:item/progression/riftic/riftion/${riftion[i]}`,
                    layer1: `kubejs:item/progression/riftic/riftion/${riftion[i]}_id`,
                    layer2: `kubejs:item/progression/riftic/riftion/${charge[j]}`,
                })
                .tooltip('ψ§l' + riftionSymbol[i] + '§r §7|§r q' + chargeSymbol[j] + ' §7|§r s=§d1/3'); //spin is fixed and known for NM, HM however.... Far:tm:
        }
    }

    event
        .create('wild_riftion')
        .textureJson({
            layer0: 'kubejs:item/progression/riftic/riftion/wild',
            layer1: 'kubejs:item/progression/riftic/riftion/wild_id',
        })
        .tooltip('ψ§k?§r §7|§r q§k?§r §7|§r s=§d1/3'); //spin is fixed and known for NM, HM however.... Far:tm:
});
