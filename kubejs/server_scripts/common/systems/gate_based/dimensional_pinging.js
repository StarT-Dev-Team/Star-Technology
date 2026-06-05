ServerEvents.recipes((event) => {
    const id = global.id;

    //Dimensional Finder Controller

    // Machine recipes

    event.recipes.gtceu
        .assembly_line(id('dimensional_finder'))
        .itemInputs(
            'gtceu:zpm_scanner',
            '16x gtceu:zpm_sensor',
            '16x gtceu:zpm_emitter',
            '16x gtceu:zpm_field_generator',
            '16x gtceu:zpm_voltage_coil',
            '64x gtceu:fine_trinaquadalloy_wire',
            '64x gtceu:fine_trinaquadalloy_wire',
            '8x #gtceu:circuits/uv'
        )
        .inputFluids('gtceu:naquadria 34992', 'gtceu:europium 13248', 'gtceu:prismalium 11520')
        .itemOutputs('gtceu:dimensional_finder')
        .duration(3600)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('kubejs:coordinate_crystal'))
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(24)
        )
        .EUt(GTValues.VHA[GTValues.ZPM]);

    //Coordinate Crystals

    let abydosCrystal = event.recipes.gtceu
        .dimensional_finder(id('abydos_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', '64x minecraft:sand', '16x gtceu:zpm_sensor')
        .inputFluids('gtceu:naquadria 7200')
        .itemOutputs('kubejs:abydos_coordinate_crystal')
        .CWUt(48)
        .totalCWU(576000)
        .EUt(GTValues.VHA[GTValues.UV]);

    if (global.packmode === 'abydos') {
        abydosCrystal.dimension('sgjourney:abydos');
    } else {
        abydosCrystal.dimension('minecraft:overworld');
    }

    event.recipes.gtceu
        .dimensional_finder(id('nether_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', '64x minecraft:netherrack', '16x gtceu:uv_sensor')
        .inputFluids('minecraft:lava 50000')
        .itemOutputs('kubejs:nether_coordinate_crystal')
        .CWUt(192)
        .totalCWU(2304000)
        .EUt(GTValues.VHA[GTValues.UEV])
        .dimension('sgjourney:abydos');

    event.recipes.gtceu
        .dimensional_finder(id('end_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', '64x minecraft:end_stone', '16x gtceu:uhv_sensor')
        .inputFluids('gtceu:echo_r 7200')
        .itemOutputs('kubejs:end_coordinate_crystal')
        .CWUt(384)
        .totalCWU(4608000)
        .EUt(GTValues.VA[GTValues.UIV])
        .dimension('minecraft:the_nether');

    /*event.recipes.gtceu.dimensional_finder(id('lantea_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:prismarine', 'gtceu:uev_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:lantea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UEV])
        .dimension('minecraft:the_nether');

    event.recipes.gtceu.dimensional_finder(id('cavum_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:obsidian', 'gtceu:uiv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:cavum_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UIV])
        .dimension('minecraft:the_end');
        
    event.recipes.gtceu.dimensional_finder(id('sea_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:water_bucket', 'gtceu:uxv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:sea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UXV])
        .dimension('minecraft:lantea');

    event.recipes.gtceu.dimensional_finder(id('void_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:stone', 'gtceu:opv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:void_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(4*GTValues.VHA[GTValues.UXV])
        .dimension('minecraft:cavum_tenebrae');*/

    const crystalDuping = (type, eutScale) => {
        event.recipes.gtceu
            .scanner(id(`${type}_crystal_duping`))
            .itemInputs('kubejs:coordinate_crystal', `kubejs:${type}_coordinate_crystal`)
            .itemOutputs(`2x kubejs:${type}_coordinate_crystal`)
            .duration(3000)
            .EUt(GTValues.VHA[GTValues.ZPM] * Math.pow(4, eutScale));
    };
    crystalDuping('abydos', 0);
    crystalDuping('nether', 1);
    crystalDuping('end', 2);
});

const crystalfeed = (realmId, realm, message) => {
    ItemEvents.rightClicked(`kubejs:${realm}_coordinate_crystal`, (event) => {
        if (event.player.isCrouching()) {
            event.server.runCommandSilent(
                `execute at ${event.player.username} run playsound minecraft:block.enchantment_table.use player ${event.player.username} ~ ~ ~`
            );
            // eslint-disable-next-line no-unused-vars
            event.server.scheduleInTicks(15, (ctx) => {
                event.player.tell(Text.translate(message));
                event.server.runCommand(
                    `execute as ${event.player.username} run sgjourney stargateNetwork address ${realmId}:${realmId === 'minecraft' ? `the_${realm}` : realm}`
                );
            });
        }
    });
};

crystalfeed('sgjourney', 'abydos', 'effects.crystals.success.abydos');
crystalfeed('minecraft', 'nether', 'effects.crystals.success.nether');
crystalfeed('minecraft', 'end', 'effects.crystals.success.end');

//Dimensional Gamestages
const dimensionGS = (gate, realm, stage) => {
    BlockEvents.rightClicked(`sgjourney:${gate}_stargate`, (event) => {
        const { player, item, server } = event;

        if (item.id !== `kubejs:${realm}_coordinate_crystal`) return;

        item.count--;
        server.runCommandSilent(
            `execute as ${event.player.username} run gamestage add ${event.player.username} ${stage}`
        );
        server.runCommandSilent(`give ${event.player.username} kubejs:coordinate_crystal`);
        server.runCommandSilent(
            `execute at ${event.player.username} run playsound bingus:recall player ${event.player.username} ~ ~ ~`
        );
        player.swing();
    });
};

dimensionGS('classic', 'abydos', 'one');
dimensionGS('milky_way', 'nether', 'two');
dimensionGS('milky_way', 'end', 'three');
