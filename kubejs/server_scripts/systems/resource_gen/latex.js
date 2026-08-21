// requires: thermal
ServerEvents.recipes((event) => {
    const id = global.id;
    const isModLoaded = global.withModsLoaded;

    //Early Rubbers
    isModLoaded('farmersdelight', () => {
        event.custom({
            type: 'farmersdelight:cooking',
            /* eslint-disable */
            recipe_book_tab: 'misc',
            /* eslint-enable */
            ingredients: [
                {
                    item: 'thermal:rubber',
                },
                {
                    item: 'gtceu:small_sulfur_dust',
                },
            ],
            result: {
                item: 'thermal:cured_rubber',
                count: 1,
            },
            cookingtime: 200,
        });
    });

    isModLoaded('thermal', () => {
        isModLoaded('kubejs_create', () => {
            event.recipes.create
                .mixing('3x thermal:cured_rubber', ['3x thermal:rubber', '#forge:dusts/sulfur'])
                .heatRequirement('lowheated')
                .id('start:create_mixing/cured_rubber');

            event.recipes.create.pressing('gtceu:latex_plate', 'thermal:rubber').id('start:pressing/latex_sheets');
        });

        event.recipes.gtceu
            .alloy_smelter(id('latex_rubber'))
            .itemInputs('3x thermal:rubber', 'gtceu:sulfur_dust')
            .itemOutputs('3x thermal:cured_rubber')
            .duration(240)
            .EUt(8);

        event.recipes.gtceu
            .fluid_solidifier(id('raw_rubber'))
            .notConsumable('gtceu:ball_casting_mold')
            .inputFluids('thermal:latex 250')
            .itemOutputs('thermal:rubber')
            .duration(120)
            .EUt(8);

        event.recipes.gtceu
            .chemical_reactor(id('latex_rubber'))
            .itemInputs('3x thermal:rubber', 'gtceu:sulfur_dust')
            .outputFluids('gtceu:rubber 576')
            .duration(240)
            .EUt(8);

        event.recipes.gtceu
            .fluid_solidifier(id('latex_sheet'))
            .notConsumable('gtceu:plate_casting_mold')
            .inputFluids('thermal:latex 144')
            .itemOutputs('gtceu:latex_plate')
            .duration(120)
            .EUt(8);

        event.recipes.gtceu
            .extractor(id('latex_extraction'))
            .itemInputs('thermal:rubber')
            .outputFluids('thermal:latex 250')
            .duration(120)
            .EUt(8);
    });
});
