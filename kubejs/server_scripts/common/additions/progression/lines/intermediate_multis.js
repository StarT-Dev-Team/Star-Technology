ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .mixer(id('birmabright'))
        .itemInputs('7x gtceu:aluminium_dust', '2x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:birmabright_dust')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu
        .mixer(id('duralumin'))
        .itemInputs(
            '4x gtceu:aluminium_dust',
            '3x gtceu:copper_dust',
            '1x gtceu:magnesium_dust',
            '1x gtceu:manganese_dust'
        )
        .itemOutputs('9x gtceu:duralumin_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(4);

    event.recipes.gtceu
        .mixer(id('beryllium_aluminium_alloy'))
        .itemInputs('7x gtceu:beryllium_dust', '1x gtceu:aluminium_dust')
        .itemOutputs('8x gtceu:beryllium_aluminium_alloy_dust')
        .duration(310)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu
        .mixer(id('hydronalium'))
        .itemInputs('6x gtceu:aluminium_dust', '3x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:hydronalium_dust')
        .duration(410)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(2);

    event.recipes.gtceu
        .mixer(id('elgiloy'))
        .itemInputs(
            '4x gtceu:cobalt_dust',
            '2x gtceu:chromium_dust',
            '1x gtceu:nickel_dust',
            '1x gtceu:steel_dust',
            '1x gtceu:molybdenum_dust',
            '1x gtceu:manganese_dust'
        )
        .itemOutputs('10x gtceu:elgiloy_dust')
        .duration(420)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu
        .mixer(id('beryllium_bronze'))
        .itemInputs('10x gtceu:copper_dust', '1x gtceu:beryllium_dust')
        .itemOutputs('11x gtceu:beryllium_bronze_dust')
        .duration(290)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu
        .mixer(id('silicon_bronze'))
        .itemInputs('32x gtceu:copper_dust', '2x gtceu:silicon_dust', '1x gtceu:manganese_dust')
        .itemOutputs('35x gtceu:silicon_bronze_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu
        .mixer(id('kovar'))
        .itemInputs('18x gtceu:iron_dust', '11x gtceu:nickel_dust', '6x gtceu:cobalt_dust')
        .itemOutputs('35x gtceu:kovar_dust')
        .duration(450)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu
        .mixer(id('zamak'))
        .itemInputs('1x gtceu:zinc_dust', '4x gtceu:aluminium_dust', '3x gtceu:copper_dust')
        .itemOutputs('8x gtceu:zamak_dust')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu
        .mixer(id('tumbaga'))
        .itemInputs('20x gtceu:copper_dust', '6x gtceu:gold_dust', '1x gtceu:silver_dust')
        .itemOutputs('27x gtceu:tumbaga_dust')
        .duration(470)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(4);

    event.recipes.gtceu
        .mixer(id('manganin'))
        .itemInputs('20x gtceu:copper_dust', '6x gtceu:manganese_dust', '1x gtceu:nickel_dust')
        .itemOutputs('27x gtceu:manganin_dust')
        .duration(470)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(4);

    event.recipes.gtceu
        .mixer(id('galvanized_steel'))
        .itemInputs('7x gtceu:steel_dust', '1x gtceu:zinc_dust')
        .itemOutputs('8x gtceu:galvanized_steel_dust')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(4);
});
