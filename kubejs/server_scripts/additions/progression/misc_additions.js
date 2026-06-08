ServerEvents.recipes((event) => {
    const id = global.id;

    event
        .shaped('start_core:mechanical_memory_card', ['WPW', 'SBS', 'WPW'], {
            W: 'gtceu:annealed_copper_single_wire',
            P: 'gtceu:wrought_iron_plate',
            S: 'gtceu:wrought_iron_screw',
            B: 'gtceu:resin_printed_circuit_board',
        })
        .id('start:shaped/mechanical_memory_card');

    event.recipes.gtceu
        .assembler(id('husk_brick'))
        .itemInputs('kubejs:extreme_temperature_smelting_casing')
        .inputFluids('gtceu:ancient_netherite 864')
        .itemOutputs('kubejs:husk_brick')
        .duration(36000)
        .EUt(480);

    let cpaRecipe = event.recipes.gtceu
        .component_part_assembly(id(`compass_of_the_flame`))
        .itemInputs(
            `gtceu:calamatium_frame`,
            `4x gtceu:dense_ancient_netherite_plate`,
            `4x #gtceu:circuits/uev`,
            `gtceu:uhv_sensor`,
            `gtceu:long_magnetic_zapolgium_rod`,
            `8x gtceu:isovol_screw`
        )
        .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy 1520`, `start_core:flamewake_solvent 10000`)
        .itemOutputs(`kubejs:compass_of_the_flame`)
        .duration(1800)
        .EUt(GTValues.VH[GTValues.UEV]);

    cpaRecipe.stationResearch((researchRecipeBuilder) =>
        researchRecipeBuilder
            .researchStack(Item.of(`minecraft:recovery_compass`))
            .EUt(GTValues.VHA[GTValues.UHV])
            .CWUt(160)
    );

    event.recipes.gtceu
        .research_station(`1_x_compass_of_the_flame_cpa`)
        .itemInputs(`start_core:data_dna_disk`)
        .itemInputs(`minecraft:recovery_compass`)
        .itemOutputs(
            Item.of(
                `start_core:data_dna_disk`,
                `{assembly_line_research:{research_id:"1x_minecraft_recovery_compass",research_type:"gtceu:component_part_assembly"}}`
            )
        )
        .CWUt(160)
        .totalCWU(160 * 20 * 60)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .assembly_line(id('catto_shrine'))
        .itemInputs(
            '1x gtceu:naquadah_alloy_frame',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '2x #gtceu:circuits/zpm',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '1x gtceu:zpm_emitter',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '64x minecraft:cod',
            '6x gtceu:osthendah_plate'
        )
        .inputFluids('gtceu:polybenzimidazole 7200')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of(`minecraft:cod`)).EUt(GTValues.VHA[GTValues.LuV]).CWUt(32)
        )
        .itemOutputs('gtceu:catto_shrine')
        .duration(3072000)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.remove({ mod: 'placeablemaxwell' });

    const cat = (name, tier, dye, dye2, wire, scaler) => {
        event.recipes.gtceu
            .catto_shrine(id(name))
            .layeredRecipe((layers) =>
                layers
                    .itemInputs(`gtceu:${tier}_machine_hull`)
                    .next()
                    .itemInputs(`4x gtceu:${tier}_robot_arm`)
                    .next()
                    .itemInputs(`2x gtceu:${tier}_field_generator`)
                    .next()
                    .itemInputs(`1x gtceu:${tier}_fluid_regulator`)
                    .next()
                    .itemInputs(`2x gtceu:${tier}_sensor`)
                    .next()
                    .itemInputs(`8x gtceu:${wire}_single_wire`)
            )
            .inputFluids(`gtceu:${dye}_dye 1000000`)
            .itemInputs(`512x minecraft:${dye2}_wool`, `512x #forge:cooked_fishes`)
            .itemOutputs(`placeablemaxwell:${name}`)
            .duration(168000)
            .EUt(GTValues.VH[GTValues.ZPM] * Math.pow(4, scaler));
    };

    cat('mars', 'zpm', 'light_gray', 'gray', 'yttrium_barium_cuprate', 1);
    cat('vasilisa', 'uv', 'gray', 'white', 'europium', 2);
    cat('valenok', 'uhv', 'white', 'orange', 'cerium_tritelluride', 3);
    cat('poomba', 'uev', 'brown', 'white', 'polonium_bismide', 4);
    cat('maxwell', 'uiv', 'black', 'white', 'lepton_resonant_thallium_antimonide', 5);

    event.recipes.gtceu
        .catto_shrine(id('worries_about_it'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('placeablemaxwell:mars')
                .next()
                .itemInputs('placeablemaxwell:vasilisa')
                .next()
                .itemInputs('placeablemaxwell:valenok')
                .next()
                .itemInputs('placeablemaxwell:poomba')
                .next()
                .itemInputs('placeablemaxwell:maxwell')
        )
        .itemOutputs(`kubejs:worries_about_it`)
        .duration(429496728)
        .EUt(69);

    event.recipes.gtceu
        .catto_shrine(id('why_are_you_worrying'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs(`start_core:komaru`)
                .itemInputs('komarumod:komaru_spawn_egg')
                .next()
                .itemInputs(`start_core:komaru`)
                .itemInputs('komarumod:komaru_powder')
                .next()
                .itemInputs(`start_core:komaru`)
                .itemInputs('komarumod:komaru_spawn_egg')
                .next()
                .itemInputs(`start_core:komaru`)
                .itemInputs('komarumod:komaru_powder')
                .next()
                .itemInputs(`start_core:komaru`)
                .itemInputs('komarumod:komaru_spawn_egg')
        )
        .itemInputs(`64x kubejs:worries_about_it`)
        .itemOutputs(`kubejs:why_are_you_worrying`)
        .duration(429496728)
        .EUt(420);

    event.recipes.gtceu
        .mixer(id('osthendah_dust'))
        .itemInputs('1x gtceu:osmium_dust', '1x gtceu:ruthenium_dust', '2x gtceu:naquadah_dust')
        .itemOutputs('4x gtceu:osthendah_dust')
        .circuit(3)
        .duration(360)
        .EUt(GTValues.VHA[GTValues.LuV]);
});

ItemEvents.rightClicked('kubejs:compass_of_the_flame', (event) => {
    let { level, player } = event;
    if (!(level instanceof ServerLevel)) return;
    let registryAccess = level.registryAccess();
    let structureRegistry = registryAccess.registryOrThrow(Registries.STRUCTURE);
    let structureKey = structureRegistry.getResourceKey(structureRegistry.get(`minecraft:ruined_portal_nether`)).get();
    let structureHolder = structureRegistry.getHolderOrThrow(structureKey);

    if (!structureHolder) {
        player.tell(Text.translate(`item.kubejs.compass_of_the_flame.failed`));
        return;
    }

    let structure = structureHolder.get();
    let holderSet = HolderSet.direct([structureHolder]);
    let origin = new BlockPos(player.getBlockX(), player.getBlockY(), player.getBlockZ());
    let generator = level.getChunkSource().getGenerator();
    let result = generator.findNearestMapStructure(level, holderSet, origin, 100, false);

    if (result !== null) {
        let pos = result.getFirst();
        let chunkPos = new ChunkPos(pos);
        let sectionPos = SectionPos.of(chunkPos, level.getMinSection());
        let chunk = level.getChunk(chunkPos.x, chunkPos.z);
        let start = level.structureManager().getStartForStructure(sectionPos, structure, chunk);
        if (start && start.isValid()) {
            let piece = start.getPieces()[0];
            let { x, y, z } = piece.locatorPosition;
            player.tell(Text.translate(`item.kubejs.compass_of_the_flame.success`));
            player.tell(`§6{ ${x}, ${y}, ${z} }`);
        }
    } else {
        player.tell(Text.translate(`item.kubejs.compass_of_the_flame.failed`));
    }
});
