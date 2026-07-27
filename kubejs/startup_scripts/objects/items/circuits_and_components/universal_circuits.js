StartupEvents.registry('item', (event) => {
    // eslint-disable-next-line no-unused-vars
    const tierColors = [
        { tier: 'ULV', color: '§8' },
        { tier: 'LV', color: '§7' },
        { tier: 'MV', color: '§b' },
        { tier: 'HV', color: '§6' },
        { tier: 'EV', color: '§5' },
        { tier: 'IV', color: '§9' },
        { tier: 'LuV', color: '§d' },
        { tier: 'ZPM', color: '§c' },
        { tier: 'UV', color: '§3' },
        { tier: 'UHV', color: '§4' },
        { tier: 'UEV', color: '§a' },
        { tier: 'UIV', color: '§2' },
        { tier: 'UXV', color: '§e' } /*,{tier:"OpV",color:"§9§l"},{tier:"MAX",color:"§c§l"}*/,
    ];

    ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv'].forEach((tier) => {
        event
            .create(`${tier}_universal_circuit`)
            .tooltip(Text.translate('item.kubejs.universal_circuit.tooltip'))
            .texture(`kubejs:item/circuits_and_components/universal_circuits/${tier}_universal_circuit`);
    });
});
