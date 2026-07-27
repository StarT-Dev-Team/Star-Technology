// priority -1000

const blacklist = ['aluminum'];

/** @type {Record<string, string>} */
const edgeCases = {
    'gtceu:certus_quartz_gem': 'ae2:certus_quartz_crystal',
};

ServerEvents.recipes((event) => {
    const id = global.id;

    event.forEachRecipe({ type: 'gtceu:macerator' }, (macParse) => {
        const macData = JSON.parse(/** @type {any} */ (macParse.json));

        if (macData.category === 'gtceu:ore_crushing') {
            const macInputs = macData.inputs;

            if (macInputs?.item?.length !== 1) return;

            const itemInput = macInputs.item[0].content;

            if (!itemInput?.ingredient?.tag) return;

            const oreTagSplit = itemInput.ingredient.tag.split('/');

            if (oreTagSplit[0] === 'forge:raw_materials' && !blacklist.includes(oreTagSplit[1])) {
                const itemOutput = macData.outputs.item[0].content;

                event.recipes.gtceu
                    .pulverizer(id(`crushed_${oreTagSplit[1]}`))
                    .itemInputs(`1x #${itemInput.ingredient.tag}`)
                    .itemOutputs(`${itemOutput.count}x ${itemOutput.ingredient.item}`)
                    .circuit(0)
                    .duration(300)
                    .EUtVA(LV);
            }
        }
    });

    event.forEachRecipe({ type: 'minecraft:blasting' }, (furnParse) => {
        const furnData = JSON.parse(/** @type {any} */ (furnParse.json));
        const furnInput = furnData.ingredient;

        if (!furnInput.tag) return;

        const oreTagSplit = furnInput.tag.split('/');

        if (oreTagSplit[0] === 'forge:raw_materials' && !blacklist.includes(oreTagSplit[1])) {
            const oreName = oreTagSplit[1];
            const furnOutput = furnData.result;
            let furnOutputItem = typeof furnOutput === 'string' ? furnOutput : furnOutput.item;

            if (furnOutputItem.includes('dust')) return;

            if (edgeCases[furnOutputItem]) furnOutputItem = edgeCases[furnOutputItem];

            event.recipes.gtceu
                .pulverizer(id(`crushed_heated_${oreName}`))
                .itemInputs(`1x gtceu:crushed_${oreName}_ore`)
                .itemOutputs(`${furnOutputItem}`)
                .circuit(1)
                .duration(300)
                .category('pulverizer_heated')
                .EUtVA(LV);

            event.recipes.gtceu
                .pulverizer(id(`raw_heated_${oreName}`))
                .itemInputs(`1x #${furnInput.tag}`)
                .itemOutputs(`${furnOutput.count || 1}x ${furnOutputItem}`)
                .circuit(1)
                .duration(300)
                .category('pulverizer_heated')
                .EUtVA(LV);
        }
    });
});
