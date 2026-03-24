ServerEvents.recipes(event => {
    const id = global.id;

    //Dimensional Finder Controller
    
    // Machine recipes
    
    event.recipes.gtceu.assembly_line(id('dimensional_finder'))
        .itemInputs(
            'gtceu:uv_scanner','16x gtceu:uv_sensor','16x gtceu:uv_sensor','16x gtceu:uv_sensor','16x gtceu:uv_sensor',
            '64x gtceu:fine_trinaquadalloy_wire','64x gtceu:fine_trinaquadalloy_wire', '8x #gtceu:circuits/uv'
        )
        .inputFluids(
            'gtceu:naquadria 34992',
            'gtceu:neutronium 13248',
            'gtceu:echo_r 11520'
        )
        .itemOutputs('gtceu:dimensional_finder')
        .duration(3600)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:coordinate_crystal'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VHA[GTValues.UV]); 

    //Coordinate Crystals
    
    if (global.packmode !== 'abydos'){
        (() => { 
        event.recipes.gtceu.dimensional_finder(id('abydos_coordinate_crystal'))
            .itemInputs('kubejs:coordinate_crystal', 'minecraft:sand', 'gtceu:uv_sensor')
            .inputFluids('gtceu:naquadria 7200')
            .chancedOutput('kubejs:abydos_coordinate_crystal', 500, 0)
            .duration(150 * 20)
            .EUt(GTValues.VA[GTValues.UV])
            .dimension('minecraft:overworld'); 
        })()
    }   

    if (global.packmode == 'abydos'){
        (() => {
        event.recipes.gtceu.dimensional_finder(id('abydos_coordinate_crystal'))
            .itemInputs('kubejs:coordinate_crystal', 'minecraft:sand', 'gtceu:uv_sensor')
            .inputFluids('gtceu:naquadria 7200')
            .chancedOutput('kubejs:abydos_coordinate_crystal', 9900, 0)
            .duration(10 * 20)   
            .EUt(GTValues.VA[GTValues.UV])
            .dimension('sgjourney:abydos');
        })()
    }   
    
    event.recipes.gtceu.dimensional_finder(id('nether_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:netherrack', 'gtceu:uhv_sensor')
        .inputFluids('minecraft:lava 5000')
        .chancedOutput('kubejs:nether_coordinate_crystal', 500, 0)
        .duration(150 * 20)
        .EUt(GTValues.VHA[GTValues.UHV])
        .dimension('sgjourney:abydos');

    event.recipes.gtceu.dimensional_finder(id('end_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:end_stone', 'gtceu:uhv_sensor')
        .inputFluids('gtceu:echo_r 5000')
        .chancedOutput('kubejs:end_coordinate_crystal', 500, 0)
        .duration(150 * 20)
        .EUt(GTValues.VA[GTValues.UHV])
        .dimension('sgjourney:abydos');

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

    const CrystalDuping = (type,eutScale) => {
        event.recipes.gtceu.scanner(id(`${type}_crystal_duping`))
        .itemInputs('kubejs:coordinate_crystal',`kubejs:${type}_coordinate_crystal`)
        .itemOutputs(`2x kubejs:${type}_coordinate_crystal`)
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.UV]*(4**eutScale));
    }
    CrystalDuping('abydos',0);
    CrystalDuping('nether',1);
    CrystalDuping('end',1);

});

const crystalfeed = (realmId, realm, stage, message) => {
    ItemEvents.rightClicked(`kubejs:${realm}_coordinate_crystal`, event => {
        if (event.player.isCrouching()) {
            // event.item.count--
            event.server.runCommandSilent(`execute at ${event.player.username} run playsound minecraft:block.enchantment_table.use player ${event.player.username} ~ ~ ~`);
            event.server.scheduleInTicks(15, ctx => {
                event.player.tell(Text.translate(message));
                event.server.runCommand(`execute as ${event.player.username} run sgjourney stargateNetwork address ${realmId}:${realmId == 'minecraft' ? `the_${realm}` : realm}`);
                // event.server.runCommandSilent(`execute as ${event.player.username} run gamestage add ${event.player.username} ${stage}`);
                // event.server.runCommandSilent(`give ${event.player.username} kubejs:coordinate_crystal`)
                // event.server.runCommandSilent(`execute at ${event.player.username} run playsound sgjourney:milky_way_chevron_encode player ${event.player.username} ~ ~ ~`);
            });
        };
    });
};

crystalfeed('sgjourney', 'abydos', 'one', 'effects.crystals.success.abydos');
crystalfeed('minecraft', 'nether', 'two', 'effects.crystals.success.nether');
crystalfeed('minecraft', 'end', 'three', 'effects.crystals.success.end');

//Dimensional Gamestages
const DimensionGS = (gate,realm,stage) => {
    BlockEvents.rightClicked(`sgjourney:${gate}_stargate`, event => {
        const { player, item, server } = event;
    
        if (item.id !== `kubejs:${realm}_coordinate_crystal`) return;
    
        item.count--
        server.runCommandSilent(`execute as ${event.player.username} run gamestage add ${event.player.username} ${stage}`);
        server.runCommandSilent(`give ${event.player.username} kubejs:coordinate_crystal`)
        server.runCommandSilent(`execute at ${event.player.username} run playsound bingus:recall player ${event.player.username} ~ ~ ~`);
        player.swing();
    });
};

DimensionGS('classic','abydos','one');
DimensionGS('milky_way','nether','two');
DimensionGS('milky_way','end','three');