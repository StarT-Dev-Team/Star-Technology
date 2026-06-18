ServerEvents.recipes((event) => {
    const id = global.id;

    let waste = 'gtceu:lead_dust';
    let $Th230 = 'gtceu:thorium_dust';
    let $U233 = 'gtceu:uranium_233_dust';
    let $U235 = 'gtceu:uranium_235_dust';
    let $U238 = 'gtceu:uranium_dust';
    let $Np237 = 'gtceu:neptunium_dust';
    let $Pu238 = 'gtceu:plutonium_238_dust';
    let $Pu239 = 'gtceu:plutonium_dust';
    let $Pu241 = 'gtceu:plutonium_241_dust';
    let $Pu244 = 'gtceu:plutonium_244_dust';
    let $Am241 = 'gtceu:americium_241_dust';
    let $Cm244 = 'gtceu:curium_244_dust';
    let $Cf252 = 'gtceu:californium_252_dust';
    let $Es253 = 'gtceu:einsteinium_253_dust';
    let $Fm257 = 'gtceu:fermium_dust';
    let $Nq402 = 'gtceu:naquadria_dust';
    let $Nq404 = 'gtceu:purified_naquadah_dust';
    let $Ec404 = 'gtceu:echo_shard_dust';

    const FLUID_CELL_TYPE = {
        1: 'gtceu:aluminium_fluid_cell',
        2: 'gtceu:stainless_steel_fluid_cell',
        3: 'gtceu:titanium_fluid_cell',
        4: 'gtceu:titanium_fluid_cell',
        5: 'start_core:enriched_naquadah_fluid_cell',
        6: 'start_core:neutronium_fluid_cell',
    };

    let nuclearRod = (type, tier, composition, decomposition) => {
        let cell = FLUID_CELL_TYPE[tier];

        event.recipes.gtceu
            .forming_press(id(type + '_fuel_rod'))
            .itemInputs(cell)
            .itemInputs(composition)
            .itemOutputs('kubejs:' + type + '_fuel_rod')
            .duration(1200 / Math.pow(2, tier))
            .EUt(GTValues.VA[GTValues.HV] * Math.pow(4, tier));

        event.recipes.gtceu
            .centrifuge(id('depleted_' + type + '_fuel_rod_decomposition'))
            .itemInputs('kubejs:depleted_' + type + '_fuel_rod')
            .itemOutputs(cell)
            .itemOutputs(decomposition)
            .duration(1600 / Math.pow(2, tier))
            .EUt(GTValues.VHA[GTValues.HV] * Math.pow(4, tier));
    };

    nuclearRod('thr', 1, `4x ${$Th230}`, `4x ${$U235}`);
    nuclearRod('leu238', 1, `4x ${$U238}`, [`2x ${$Pu244}`, `2x ${$Np237}`]);
    nuclearRod('heu', 2, `4x ${$U235}`, [`3x ${$Pu241}`, `1x ${waste}`]);
    nuclearRod('plu', 2, `4x ${$Pu244}`, [`2x ${$Pu239}`, `1x ${$Pu241}`, `1x ${$Am241}`]);
    nuclearRod('mox239', 2, [`2x ${$U238}`, `2x ${$Pu239}`], [`2x ${$Am241}`, `1x ${$Pu241}`, `1x ${waste}`]);
    nuclearRod('amr', 3, `4x ${$Am241}`, [`2x ${$Cm244}`, `1x ${$Pu238}`, `1x ${$Np237}`]);
    nuclearRod('nep', 3, `4x ${$Np237}`, [`2x ${$Pu238}`, `1x ${$Pu239}`, `1x ${waste}`]);
    nuclearRod('crm', 4, `4x ${$Cm244}`, [`2x ${$Cf252}`, `2x ${$Pu239}`]);
    nuclearRod('mox241', 4, [`2x ${$U238}`, `2x ${$Pu241}`], [`3x ${$Pu239}`, `1x ${$Am241}`]);
    nuclearRod('tpu', 4, [`2x ${$Th230}`, `2x ${$Pu239}`], [`3x ${$U233}`, `1x ${$Am241}`]);
    nuclearRod('mox238', 4, [`3x ${$Pu238}`, `1x ${$Cf252}`], [`3x ${$Cm244}`, `1x ${$Pu239}`]);
    nuclearRod('caf', 5, `4x ${$Cf252}`, [`2x ${$Fm257}`, `2x ${$Pu241}`]);
    nuclearRod('etu', 5, [`2x ${$Cm244}`, `1x ${$Cf252}`, `1x ${$Am241}`], [`2x ${$Pu238}`, `2x ${$Es253}`]);
    nuclearRod('leu233', 5, `4x ${$U233}`, [`2x ${$Pu239}`, `1x ${$Cf252}`, `1x ${waste}`]);
    nuclearRod('nqe', 6, [`2x ${$Nq404}`, `2x ${$Es253}`], [`2x ${$Ec404}`, `1x ${$Nq402}`, `1x ${waste}`]);
});
