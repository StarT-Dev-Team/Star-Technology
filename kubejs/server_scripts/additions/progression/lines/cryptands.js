ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .chemical_reactor(id('ethylene_oxide'))
        .inputFluids('gtceu:ethylene 1000', 'gtceu:oxygen 1000')
        .notConsumable('gtceu:silver_oxide_dust')
        .outputFluids('gtceu:ethylene_oxide 1000')
        .duration(640)
        .EUt(120)
        .circuit(5);

    event.recipes.gtceu
        .chemical_reactor(id('ethylene_glycol'))
        .inputFluids('gtceu:ethylene_oxide 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:ethylene_glycol 1000')
        .duration(680)
        .EUt(120)
        .circuit(0);

    event.recipes.gtceu
        .chemical_reactor(id('diethylene_glycol'))
        .inputFluids('gtceu:ethylene_oxide 2000', 'minecraft:water 1000')
        .outputFluids('gtceu:diethylene_glycol 1000')
        .duration(740)
        .EUt(120)
        .circuit(1);

    event.recipes.gtceu
        .chemical_reactor(id('triethylene_glycol'))
        .inputFluids('gtceu:ethylene_oxide 3000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:triethylene_glycol 1000')
        .duration(880)
        .EUt(120)
        .circuit(2);

    event.recipes.gtceu
        .chemical_reactor(id('sodium_chlorate'))
        .inputFluids('gtceu:salt_water 1000', 'gtceu:oxygen 3000')
        .itemOutputs('gtceu:sodium_chlorate_dust')
        .outputFluids('minecraft:water 1000')
        .duration(320)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('sodium_perchlorate'))
        .itemInputs('gtceu:sodium_chlorate_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('gtceu:sodium_perchlorate_dust')
        .duration(440)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('lithium_perchlorate'))
        .itemInputs('gtceu:sodium_perchlorate_dust', 'gtceu:lithium_chloride_dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('gtceu:lithium_perchlorate_dust')
        .outputFluids('gtceu:salt_water 1000')
        .duration(560)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('potassium_hydroxide'))
        .itemInputs('gtceu:potassium_dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('3x gtceu:potassium_hydroxide_dust')
        .outputFluids('gtceu:hydrogen 1000')
        .duration(800)
        .EUtVA(MV);

    // event.recipes.gtceu.chemical_reactor(id('sodium_hydroxide'))
    //     .itemInputs('gtceu:sodium_dust')
    //     .inputFluids('minecraft:water 1000')
    //     .itemOutputs('gtceu:sodium_hydroxide_dust')
    //     .outputFluids('gtceu:hydrogen 1000')
    //     .duration(100)
    //     .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('lithium_chloride_dust'))
        .itemInputs('gtceu:lithium_dust')
        .inputFluids('gtceu:chlorine 1000')
        .itemOutputs('gtceu:lithium_chloride_dust')
        .duration(1200)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('silver_oxide'))
        .itemInputs('2x gtceu:silver_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('3x gtceu:silver_oxide_dust')
        .duration(120)
        .EUt(32);

    event.recipes.gtceu
        .chemical_reactor(id('sulfur_dichloride'))
        .itemInputs('#forge:dusts/sulfur')
        .inputFluids('gtceu:chlorine 2000')
        .outputFluids('gtceu:sulfur_dichloride 1000')
        .duration(120)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('thionyl_chloride'))
        .inputFluids('gtceu:sulfur_dioxide 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:thionyl_chloride 1000')
        .duration(120)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('sulfonyl_chloride'))
        .inputFluids('gtceu:sulfur_trioxide 1000', 'gtceu:sulfur_dichloride 1000')
        .outputFluids('gtceu:sulfuryl_chloride 1000', 'gtceu:sulfur_dioxide 1000')
        .duration(180)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('triglycol_dichloride'))
        .inputFluids('gtceu:sulfuryl_chloride 1000', 'gtceu:triethylene_glycol 1000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:triglycol_dichloride 1000', 'gtceu:sulfuric_acid 1000')
        .duration(220)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('12-crown-4'))
        .itemInputs('2x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:triglycol_dichloride 1000', 'gtceu:ethylene_glycol 1000')
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids('gtceu:12_crown_4 1000', 'minecraft:water 2000')
        .duration(1200)
        .EUt(120)
        .circuit(0);

    event.recipes.gtceu
        .large_chemical_reactor(id('ethylene_oxide'))
        .inputFluids('gtceu:ethylene 1000', 'gtceu:oxygen 1000')
        .notConsumable('gtceu:silver_oxide_dust')
        .outputFluids('gtceu:ethylene_oxide 1000')
        .duration(640)
        .EUt(120)
        .circuit(5);

    event.recipes.gtceu
        .large_chemical_reactor(id('ethylene_glycol'))
        .inputFluids('gtceu:ethylene_oxide 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:ethylene_glycol 1000')
        .duration(680)
        .EUt(120)
        .circuit(0);

    event.recipes.gtceu
        .large_chemical_reactor(id('diethylene_glycol'))
        .inputFluids('gtceu:ethylene_oxide 2000', 'minecraft:water 1000')
        .outputFluids('gtceu:diethylene_glycol 1000')
        .duration(740)
        .EUt(120)
        .circuit(1);

    event.recipes.gtceu
        .large_chemical_reactor(id('triethylene_glycol'))
        .inputFluids('gtceu:ethylene_oxide 3000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:triethylene_glycol 1000')
        .duration(880)
        .EUt(120)
        .circuit(2);

    event.recipes.gtceu
        .large_chemical_reactor(id('sodium_chlorate'))
        .inputFluids('gtceu:salt_water 1000', 'gtceu:oxygen 3000')
        .itemOutputs('gtceu:sodium_chlorate_dust')
        .outputFluids('minecraft:water 1000')
        .duration(320)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('sodium_perchlorate'))
        .itemInputs('gtceu:sodium_chlorate_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('gtceu:sodium_perchlorate_dust')
        .duration(440)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('lithium_perchlorate'))
        .itemInputs('gtceu:sodium_perchlorate_dust', 'gtceu:lithium_chloride_dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('gtceu:lithium_perchlorate_dust')
        .outputFluids('gtceu:salt_water 1000')
        .duration(560)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('potassium_hydroxide'))
        .itemInputs('gtceu:potassium_dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('3x gtceu:potassium_hydroxide_dust')
        .outputFluids('gtceu:hydrogen 1000')
        .duration(800)
        .EUtVA(MV);

    // event.recipes.gtceu.large_chemical_reactor(id('sodium_hydroxide'))
    //     .itemInputs('gtceu:sodium_dust')
    //     .inputFluids('minecraft:water 1000')
    //     .itemOutputs('gtceu:sodium_hydroxide_dust')
    //     .outputFluids('gtceu:hydrogen 1000')
    //     .duration(100)
    //     .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('silver_oxide'))
        .itemInputs('2x gtceu:silver_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('3x gtceu:silver_oxide_dust')
        .duration(120)
        .EUt(32);

    event.recipes.gtceu
        .large_chemical_reactor(id('sulfur_dichloride'))
        .itemInputs('#forge:dusts/sulfur')
        .inputFluids('gtceu:chlorine 2000')
        .outputFluids('gtceu:sulfur_dichloride 1000')
        .duration(120)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('thionyl_chloride'))
        .inputFluids('gtceu:sulfur_dioxide 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:thionyl_chloride 1000')
        .duration(120)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('sulfonyl_chloride'))
        .inputFluids('gtceu:sulfur_trioxide 1000', 'gtceu:sulfur_dichloride 1000')
        .outputFluids('gtceu:sulfuryl_chloride 1000', 'gtceu:sulfur_dioxide 1000')
        .duration(180)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('triglycol_dichloride'))
        .inputFluids('gtceu:sulfuryl_chloride 1000', 'gtceu:triethylene_glycol 1000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:triglycol_dichloride 1000', 'gtceu:sulfuric_acid 1000')
        .duration(220)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('12-crown-4'))
        .itemInputs('2x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:triglycol_dichloride 1000', 'gtceu:ethylene_glycol 1000')
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids('gtceu:12_crown_4 1000', 'minecraft:water 2000')
        .duration(1200)
        .EUt(120)
        .circuit(0);

    event.recipes.gtceu
        .mixer(id('12-crown-4-li'))
        .itemInputs('gtceu:lithium_perchlorate_dust', 'gtceu:sodium_dust')
        .inputFluids('gtceu:12_crown_4 1000')
        .itemOutputs('gtceu:sodium_perchlorate_dust')
        .outputFluids('gtceu:12_crown_4_li 1000')
        .duration(120)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('15-crown-5'))
        .itemInputs('2x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:triglycol_dichloride 1000', 'gtceu:diethylene_glycol 1000')
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids('gtceu:15_crown_5 1000', 'minecraft:water 2000')
        .duration(1200)
        .EUt(120)
        .circuit(1);

    event.recipes.gtceu
        .large_chemical_reactor(id('15-crown-5'))
        .itemInputs('2x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:triglycol_dichloride 1000', 'gtceu:diethylene_glycol 1000')
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids('gtceu:15_crown_5 1000', 'minecraft:water 2000')
        .duration(1200)
        .EUt(120)
        .circuit(1);

    event.recipes.gtceu
        .mixer(id('15-crown-5-na'))
        .itemInputs('gtceu:sodium_perchlorate_dust', 'gtceu:lithium_dust')
        .inputFluids('gtceu:15_crown_5 1000')
        .itemOutputs('gtceu:lithium_perchlorate_dust')
        .outputFluids('gtceu:15_crown_5_na 1000')
        .duration(120)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('18-crown-6'))
        .itemInputs('2x gtceu:potassium_hydroxide_dust')
        .inputFluids('gtceu:triglycol_dichloride 1000', 'gtceu:triethylene_glycol 1000')
        .itemOutputs('2x gtceu:rock_salt_dust')
        .outputFluids('gtceu:18_crown_6 1000', 'minecraft:water 2000')
        .duration(1200)
        .EUt(120)
        .circuit(2);

    event.recipes.gtceu
        .large_chemical_reactor(id('18-crown-6'))
        .itemInputs('2x gtceu:potassium_hydroxide_dust')
        .inputFluids('gtceu:triglycol_dichloride 1000', 'gtceu:triethylene_glycol 1000')
        .itemOutputs('2x gtceu:rock_salt_dust')
        .outputFluids('gtceu:18_crown_6 1000', 'minecraft:water 2000')
        .duration(1200)
        .EUt(120)
        .circuit(2);

    event.recipes.gtceu
        .mixer(id('18-crown-6-k'))
        .itemInputs('gtceu:rock_salt_dust', 'gtceu:sodium_dust')
        .inputFluids('gtceu:18_crown_6 1000')
        .itemOutputs('gtceu:salt_dust')
        .outputFluids('gtceu:18_crown_6_k 1000')
        .duration(120)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('ethylene_glycol_lcr'))
        .inputFluids('gtceu:ethylene 1000', 'gtceu:oxygen 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:ethylene_glycol 1000')
        .duration(200)
        .EUt(346)
        .circuit(8);

    event.recipes.gtceu
        .large_chemical_reactor(id('diethylene_glycol_lcr'))
        .inputFluids('gtceu:ethylene 2000', 'gtceu:oxygen 2000', 'minecraft:water 1000')
        .outputFluids('gtceu:diethylene_glycol 1000')
        .duration(200)
        .EUt(346)
        .circuit(9);

    event.recipes.gtceu
        .large_chemical_reactor(id('triethylene_glycol_lcr'))
        .inputFluids('gtceu:ethylene 3000', 'gtceu:oxygen 3000', 'minecraft:water 1000')
        .outputFluids('gtceu:triethylene_glycol 1000')
        .duration(200)
        .EUt(346)
        .circuit(10);

    event.recipes.gtceu
        .large_chemical_reactor(id('toluenesulfonyl'))
        .inputFluids('gtceu:toluene 1000', 'gtceu:thionyl_chloride 1000')
        .itemOutputs('gtceu:4_toluenesulfonyl_chloride_dust')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .duration(300)
        .EUt(346);

    event.recipes.gtceu
        .large_chemical_reactor(id('ditosylate'))
        .itemInputs('2x gtceu:potassium_hydroxide_dust', '2x gtceu:4_toluenesulfonyl_chloride_dust')
        .inputFluids('gtceu:triethylene_glycol 1000')
        .itemOutputs('gtceu:triethylene_glycol_ditosylate_dust', '2x gtceu:rock_salt_dust')
        .outputFluids('minecraft:water 2000')
        .duration(300)
        .EUt(1024);

    event.recipes.gtceu
        .chemical_reactor(id('sodium_azide'))
        .itemInputs('gtceu:sodium_dust')
        .inputFluids('gtceu:nitrogen 3000')
        .itemOutputs('4x gtceu:sodium_azide_dust')
        .duration(220)
        .EUt(396);

    event.recipes.gtceu
        .large_chemical_reactor(id('sodium_azide'))
        .itemInputs('gtceu:sodium_dust')
        .inputFluids('gtceu:nitrogen 3000')
        .itemOutputs('4x gtceu:sodium_azide_dust')
        .duration(220)
        .EUt(396);

    event.recipes.gtceu
        .large_chemical_reactor(id('diazide'))
        .itemInputs('gtceu:triethylene_glycol_ditosylate_dust', '2x gtceu:sodium_azide_dust')
        .itemOutputs('gtceu:triethylene_glycol_diazide_dust', '2x gtceu:sodium_p_toluenesulfonate_dust')
        .duration(300)
        .EUt(1024);

    event.recipes.gtceu
        .large_chemical_reactor(id('bisulfate_from_ts'))
        .itemInputs('gtceu:sodium_p_toluenesulfonate_dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('gtceu:sodium_bisulfate_dust')
        .outputFluids('gtceu:toluene 1000')
        .duration(600)
        .EUt(396);

    event.recipes.gtceu
        .mixer(id('palladium_on_carbon'))
        .itemInputs('gtceu:palladium_dust', 'gtceu:carbon_dust')
        .itemOutputs('2x gtceu:palladium_on_carbon_dust')
        .duration(1200)
        .EUt(396);

    event.recipes.gtceu
        .large_chemical_reactor(id('diamine'))
        .itemInputs('gtceu:triethylene_glycol_diazide_dust')
        .notConsumable('gtceu:palladium_on_carbon_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('gtceu:triethylene_glycol_diamine_dust')
        .outputFluids('gtceu:nitrogen 4000')
        .duration(4800)
        .EUt(1024);

    event.recipes.gtceu
        .large_chemical_reactor(id('cryptand'))
        .itemInputs(
            'gtceu:triethylene_glycol_diamine_dust',
            '2x gtceu:triethylene_glycol_ditosylate_dust',
            '2x gtceu:soda_ash_dust'
        )
        .itemOutputs('4x gtceu:sodium_p_toluenesulfonate_dust')
        .outputFluids('gtceu:cryptand 1000', 'gtceu:carbon_dioxide 2000', 'minecraft:water 2000')
        .duration(9600)
        .EUt(1024);

    event.recipes.gtceu
        .mixer(id('cryptand_k'))
        .itemInputs('gtceu:rock_salt_dust', 'gtceu:sodium_dust')
        .inputFluids('gtceu:cryptand 1000')
        .itemOutputs('gtceu:salt_dust')
        .outputFluids('gtceu:cryptand_k 1000')
        .duration(4800)
        .EUt(1024);

    event.recipes.gtceu
        .mixer(id('cryptand_na'))
        .itemInputs('gtceu:sodium_perchlorate_dust', 'gtceu:lithium_dust')
        .inputFluids('gtceu:cryptand 1000')
        .itemOutputs('gtceu:lithium_perchlorate_dust')
        .outputFluids('gtceu:cryptand_na 1000')
        .duration(4800)
        .EUt(1024);

    event.recipes.gtceu
        .mixer(id('cryptand_li'))
        .itemInputs('gtceu:lithium_perchlorate_dust', 'gtceu:sodium_dust')
        .inputFluids('gtceu:cryptand 1000')
        .itemOutputs('gtceu:sodium_perchlorate_dust')
        .outputFluids('gtceu:cryptand_li 1000')
        .duration(4800)
        .EUt(1024);
});
