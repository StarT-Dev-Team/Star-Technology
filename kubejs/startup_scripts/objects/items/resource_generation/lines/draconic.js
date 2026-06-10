StartupEvents.registry('item', (event) => {
    event.create('draconic_stem_cells').texture('kubejs:item/resource_gen/lines/draconic/draconic_stem_cells');

    event
        .create('secreting_draconic_cells')
        .texture('kubejs:item/resource_gen/lines/draconic/secreting_draconic_cells');

    event
        .create('draconic_brain_matter_cells')
        .texture('kubejs:item/resource_gen/lines/draconic/draconic_brain_matter_cells');

    event.create('draconic_scale_cells').texture('kubejs:item/resource_gen/lines/draconic/draconic_scale_cells');

    event
        .create('draconic_embryo')
        .tooltip(Text.translate('item.kubejs.draconic_embryo.tooltip'))
        .texture('kubejs:item/resource_gen/lines/draconic/draconic_embryo');

    event.create('dragon_egg_shard').texture('kubejs:item/resource_gen/lines/draconic/dragon_egg_shard');

    event
        .create('draco_peptide_amino_chain')
        .texture('kubejs:item/resource_gen/lines/draconic/draco_peptide_amino_chain');
});
