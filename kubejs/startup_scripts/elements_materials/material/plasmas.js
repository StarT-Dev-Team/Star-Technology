// priority: 2000
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const { noDecomp, plates, frame, rod, densePlate, longRod, gear, foil, smallGear, rotor, noABSRecipe } = FLAGS;

    event
        .create('magmatic')
        .components('1x mystery', '1x excited', '1x iron', '1x excited', '1x mystery')
        .liquid(new GTFluidBuilder().temperature(14600))
        .plasma()
        .color(0xffd39a)
        .flags(noDecomp);

    event
        .create('voidic')
        .plasma()
        .liquid(new GTFluidBuilder().temperature(25000))
        .element(GTElements.get('voidic'))
        .color(0x0f0233)
        .flags(noDecomp);

    event
        .create('preon')
        .components('1x mystery')
        .liquid(new GTFluidBuilder().temperature(48000))
        .plasma()
        .color(0xcfb7fd)
        .flags(noDecomp);

    event
        .create('paradox')
        .components('1x mystery')
        .liquid(new GTFluidBuilder().temperature(50000))
        .plasma()
        .color(0xefe987)
        .flags(noDecomp);
});
