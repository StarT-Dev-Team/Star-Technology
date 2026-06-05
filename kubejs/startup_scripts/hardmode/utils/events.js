// packmode: hard

// Blocks Create Pipe Cobble Gen
ForgeEvents.onEvent('com.simibubi.create.api.event.PipeCollisionEvent$Spill', (event) => {
    const pipeFluid = Fluid.of(event.getPipeFluid());
    const worldFluid = Fluid.of(event.getWorldFluid());

    const pf = pipeFluid.getId();
    const wf = worldFluid.getId();

    if (
        (pf === 'minecraft:water' && wf === 'minecraft:lava') ||
        (pf === 'minecraft:lava' && wf === 'minecraft:water') ||
        (pf === 'minecraft:lava' && wf === 'minecraft:flowing_water') ||
        (pf === 'minecraft:water' && wf === 'minecraft:flowing_lava')
    ) {
        event.setState(null);
    }
});
