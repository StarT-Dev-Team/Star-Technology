//requires: create_hypertube
ServerEvents.recipes(event => {
    const id = global.id;

    [
        'create_hypertube:hypertube', 'create_hypertube:hypertube_entrance', 'create_hypertube:hyper_accelerator_small_cogwheel', 'create_hypertube:hyper_accelerator_large_cogwheel'
    ].forEach(recipeID => {
        event.remove({id: recipeID});
    });

    const assembler = (input, output, duration, eu, recipeID) => {
        event.recipes.gtceu.assembler(id(recipeID))
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu);
    };

    assembler(['4x minecraft:glass_pane', '4x gtceu:brass_plate'], '32x create_hypertube:hypertube', 100, 30, 'hypertube');
    assembler(['create:smart_chute', 'create_hypertube:hypertube', 'create:cogwheel'], 'create_hypertube:hypertube_entrance', 100, 30, 'hypertube_entrance');
    assembler(['create_hypertube:hypertube_entrance', 'gtceu:lv_voltage_coil', 'create:cogwheel'], 'create_hypertube:hypertube_accelerator', 100, 30, 'hyper_accelerator');

});