StartupEvents.registry('item', event => {

    ['silicon', 'phosphorus', 'naquadah', 'neutronium', 'draco'].forEach(boule => {
        event.create(`${boule}_chip`)
            .texture(`kubejs:item/chips_n_wafers/empty_${boule}_chip`);
    });

    ['ae2_soc_wafer', 'ae2_soc_chip', '3d_nand_chip', '3d_nor_chip', 'qram_wafer', 'qram_chip', 'uepic_wafer',
        'uepic_chip', 'draco_boule', 'draco_wafer', 'draco_advanced_soc_wafer', 'draco_advanced_soc',
        'uipic_wafer', 'uipic_chip'].forEach(item => {
        event.create(`${item}`)
            .tooltip(Text.translate(`item.kubejs.${item}.tooltip`))
            .texture(`kubejs:item/chips_n_wafers/${item}`);
    });

});