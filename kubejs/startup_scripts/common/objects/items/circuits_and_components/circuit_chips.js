StartupEvents.registry('item', (event) => {
    ['silicon', 'phosphorus', 'naquadah', 'neutronium', 'draco'].forEach((boule) => {
        event.create(`${boule}_chip`).texture(`kubejs:item/circuits_and_components/circuit_chips/empty_${boule}_chip`);
    });

    [
        'ae2_soc_wafer',
        'ae2_soc_chip',
        'acu_wafer',
        'acu_chip',
        'hyper_nand_memory_wafer',
        'hyper_nand_memory_chip',
        'hyper_nor_memory_wafer',
        'hyper_nor_memory_chip',
        'qram_wafer',
        'qram_chip',
        'stellar_ram_wafer',
        'stellar_ram_chip',
        'uepic_wafer',
        'uepic_chip',
        'uipic_wafer',
        'uipic_chip',
        'draco_boule',
        'draco_wafer',
        'draco_advanced_soc_wafer',
        'draco_advanced_soc',
        'rift_infused_soc',
    ].forEach((item) => {
        event
            .create(`${item}`)
            .tooltip(Text.translate(`item.kubejs.${item}.tooltip`))
            .texture(`kubejs:item/circuits_and_components/circuit_chips/${item}`);
    });
});
