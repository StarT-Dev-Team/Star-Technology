ServerEvents.recipes((event) => {
    const id = global.id;

    //Dimensional Finder Controller

    // Machine recipes

    event.recipes.gtceu
        .assembly_line(id('dimensional_finder'))
        .itemInputs(
            'gtceu:zpm_scanner',
            '12x gtceu:zpm_sensor',
            '12x gtceu:zpm_emitter',
            '12x gtceu:zpm_field_generator',
            '12x gtceu:zpm_voltage_coil',
            '64x gtceu:fine_trinaquadalloy_wire',
            '64x gtceu:fine_trinaquadalloy_wire',
            '8x #gtceu:circuits/uv'
        )
        .inputFluids('gtceu:naquadria 34992', 'gtceu:europium 13248', 'gtceu:prismalium 11520')
        .itemOutputs('gtceu:dimensional_finder')
        .duration(3600)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('kubejs:coordinate_crystal')).EUt(GTValues.VHA[ZPM]).CWUt(24)
        )
        .EUtVHA(ZPM);

    //Coordinate Crystals

    event.recipes.gtceu
        .dimensional_finder(id('abydos_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', '64x minecraft:sand', '16x gtceu:zpm_sensor')
        .inputFluids('gtceu:naquadria 7200')
        .chancedOutput('kubejs:abydos_coordinate_crystal', 500, 0)
        .CWUt(48)
        .totalCWU(230400)
        .EUtVHA(UV)
        .dimension('minecraft:overworld');

    event.recipes.gtceu
        .dimensional_finder(id('nether_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', '64x minecraft:netherrack', '16x gtceu:uv_sensor')
        .inputFluids('minecraft:lava 50000')
        .chancedOutput('kubejs:nether_coordinate_crystal', 500, 0)
        .CWUt(192)
        .totalCWU(921600)
        .EUtVHA(UEV)
        .dimension('sgjourney:abydos');

    event.recipes.gtceu
        .dimensional_finder(id('end_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', '64x minecraft:end_stone', '16x gtceu:uhv_sensor')
        .inputFluids('gtceu:echo_r 7200')
        .chancedOutput('kubejs:end_coordinate_crystal', 500, 0)
        .CWUt(384)
        .totalCWU(1843200)
        .EUtVA(UIV)
        .dimension('minecraft:the_nether');

    /*event.recipes.gtceu.dimensional_finder(id('lantea_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:prismarine', 'gtceu:uev_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:lantea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUtVHA(UEV)
        .dimension('minecraft:the_nether');

    event.recipes.gtceu.dimensional_finder(id('cavum_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:obsidian', 'gtceu:uiv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:cavum_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUtVHA(UIV)
        .dimension('minecraft:the_end');

    event.recipes.gtceu.dimensional_finder(id('sea_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:water_bucket', 'gtceu:uxv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:sea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUtVHA(UXV)
        .dimension('minecraft:lantea');

    event.recipes.gtceu.dimensional_finder(id('void_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:stone', 'gtceu:opv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:void_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(4*GTValues.VHA[UXV])
        .dimension('minecraft:cavum_tenebrae');*/

    /**
     * @param {string} type
     * @param {number} EUTScale
     */
    const crystalDuping = (type, EUTScale) => {
        event.recipes.gtceu
            .scanner(id(`${type}_crystal_duping`))
            .itemInputs('kubejs:coordinate_crystal', `kubejs:${type}_coordinate_crystal`)
            .itemOutputs(`2x kubejs:${type}_coordinate_crystal`)
            .duration(3000)
            .EUt(GTValues.VHA[ZPM] * Math.pow(4, EUTScale));
    };
    crystalDuping('abydos', 0);
    crystalDuping('nether', 1);
    crystalDuping('end', 2);
});

/**
 * @param {string} realmId
 * @param {string} realm
 * @param {string} message
 */
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

/**
 * @param {string} gate
 * @param {string} realm
 * @param {string} stage
 */
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
