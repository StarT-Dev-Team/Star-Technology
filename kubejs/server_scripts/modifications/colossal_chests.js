// requires: colossalchests
ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ mod: 'colossalchests' });

    /** @type {(id: string) => string} */
    let cc = (id) => `colossalchests:${id}`;

    const CHEST_DATA = [
        {
            tier: 'wood',
            base: '#minecraft:logs',
            secondary: '#minecraft:planks',
            screw: 'gtceu:iron_screw',
        },
        {
            tier: 'copper',
            base: cc('chest_wall_wood'),
            secondary: 'gtceu:copper_plate',
            screw: 'gtceu:wrought_iron_screw',
        },
        {
            tier: 'iron',
            base: cc('chest_wall_copper'),
            secondary: 'gtceu:iron_plate',
            screw: 'gtceu:steel_screw',
        },
        {
            tier: 'silver',
            base: cc('chest_wall_iron'),
            secondary: 'gtceu:silver_plate',
            screw: 'gtceu:steel_screw',
        },
        {
            tier: 'gold',
            base: cc('chest_wall_silver'),
            secondary: 'gtceu:electrum_plate',
            screw: 'gtceu:steel_screw',
        },
        {
            tier: 'diamond',
            base: cc('chest_wall_gold'),
            secondary: 'gtceu:aluminium_plate',
            screw: 'gtceu:steel_screw',
        },
        {
            tier: 'obsidian',
            base: cc('chest_wall_diamond'),
            secondary: 'gtceu:obsidian_plate',
            screw: 'gtceu:steel_screw',
        },
    ];

    CHEST_DATA.forEach((data) => {
        const { tier, base, secondary, screw } = data;

        event.recipes.gtceu
            .shaped(Item.of(cc(`chest_wall_${tier}`)), ['SSS', 'SBS', 'SSS'], {
                B: base,
                S: secondary,
            })
            .addMaterialInfo()
            .id(id(`chest_wall_${tier}`));

        event.recipes.gtceu
            .shaped(Item.of(cc(`colossal_chest_${tier}`)), ['RSR', 'SBS', 'RSR'], {
                B: cc(`chest_wall_${tier}`),
                S: secondary,
                R: screw,
            })
            .addMaterialInfo()
            .id(id(`colossal_chest_${tier}`));

        event.recipes.gtceu
            .shaped(Item.of(cc(`interface_${tier}`)), ['S', 'B'], {
                B: cc(`chest_wall_${tier}`),
                S: 'minecraft:hopper',
            })
            .addMaterialInfo()
            .id(id(`interface_${tier}`));
    });

    event.recipes.gtceu
        .shaped(Item.of(cc('uncolossal_chest')), ['WP'], {
            W: cc('chest_wall_wood'),
            P: '#minecraft:planks',
        })
        .addMaterialInfo()
        .id(id('uncolossal_chest'));

    event.recipes.gtceu
        .shaped(Item.of(cc('upgrade_tool')), ['IWI'], {
            W: cc('chest_wall_wood'),
            I: 'gtceu:iron_plate',
        })
        .addMaterialInfo()
        .id(id('upgrade_tool'));

    event
        .shapeless(Item.of(cc('upgrade_tool')), Item.of(cc('upgrade_tool_reverse')))
        .id(id('upgrade_tool_from_reverse'));
    event.shapeless(Item.of(cc('upgrade_tool_reverse')), Item.of(cc('upgrade_tool'))).id(id('upgrade_tool_reverse'));
});
