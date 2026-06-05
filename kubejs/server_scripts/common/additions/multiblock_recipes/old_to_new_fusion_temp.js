global.notHardmode(() => {
    ServerEvents.recipes((event) => {
        const id = global.id;

        ['luv', 'zpm', 'uv'].forEach((tier) => {
            event
                .shapeless(Item.of(`start_core:${tier}_fusion_reactor`), [`gtceu:${tier}_fusion_reactor`])
                .id(id(`${tier}_old_to_new_fusion`));
        });
    });
});
