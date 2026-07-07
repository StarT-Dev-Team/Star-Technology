StartupEvents.registry('item', (event) => {
    // === Primitive Age ===
    event.create('flint_shard').rarity('common').texture(`kubejs:item/hm/pre-lv/flint_shard`);

    event.create('plant_fibers').rarity('common').texture(`kubejs:item/hm/pre-lv/plant_fibers`);

    event.create('packed_mud_ball').rarity('common').texture(`kubejs:item/hm/pre-lv/packed_mud_ball`);

    event.create('mud_brick').rarity('common').texture(`kubejs:item/hm/pre-lv/packed_mud_brick`);

    event.create('stone_brick').rarity('common').texture(`kubejs:item/hm/pre-lv/stone_brick`);

    event.create('charcoal_pellet').rarity('common').burnTime(720).texture(`kubejs:item/hm/pre-lv/charcoal_pellet`);

    event.create('water_bowl').rarity('common').unstackable().texture(`kubejs:item/hm/pre-lv/water_bowl`);

    // === Ore Chunks ===
    [
        { type: 'hematite', composition: 'Fe₂O₃' },
        { type: 'cassiterite', composition: 'SnO₂' },
        { type: 'chalcopyrite', composition: 'CuFeS₂' },
        { type: 'sphalerite', composition: 'ZnS' },
        { type: 'pyrite', composition: 'FeS₂' },
        { type: 'magnetite', composition: 'Fe₃O₄' },
        { type: 'galena', composition: 'PbS' },
    ].forEach((ore) => {
        const { type, composition } = ore;
        let id = `${type}_crushed_ore_chunk`;

        event.create(id).tooltip(`§e${composition}`).texture(`kubejs:item/hm/pre-lv/${id}`);
    });

    // === Incomplete parts ===
    [
        'long_rod',
        'double_plate',
        'gear',
        'small_gear',
        'rotor',
        'spring',
        'small_spring',
        'single_wire',
        'fine_wire',
        'fluid_pipe',
        'item_pipe',
    ].forEach((id) => {
        event.create(`incomplete_${id}`).maxStackSize(64).texture(`kubejs:item/hm/incomplete_parts/incomplete_${id}`);
    });

    // === Tools ===
    event
        .create('basic_scavenging_rod')
        .rarity('common')
        .maxDamage(256)
        .unstackable()
        .texture(`kubejs:item/hm/pre-lv/basic_scavenging_rod`);

    event
        .create('scavenging_rod')
        .rarity('common')
        .maxDamage(512)
        .unstackable()
        .texture(`kubejs:item/hm/pre-lv/scavenging_rod`);

    // === ULV Parts ===
    ['electric_motor', 'electric_pump', 'conveyor_module', 'robot_arm', 'electric_piston', 'emitter'].forEach(
        (type) => {
            event.create(`ulv_${type}`).texture(`kubejs:item/hm/pre-lv/ulv_${type}`);
        }
    );

    // === Ceramic Molds
    ['ingot', 'ball', 'raw'].forEach((ceramic) => {
        event
            .create(`unfired_${ceramic}_ceramic_casting_mold`)
            .texture(`kubejs:item/hm/pre-lv/unfired_${ceramic}_ceramic_casting_mold`);
        if (ceramic !== 'raw')
            event
                .create(`${ceramic}_ceramic_casting_mold`)
                .texture(`kubejs:item/hm/pre-lv/${ceramic}_ceramic_casting_mold`);
    });
});
