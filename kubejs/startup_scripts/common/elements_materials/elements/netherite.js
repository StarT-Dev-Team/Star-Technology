GTCEuStartupEvents.registry('gtceu:element', (event) => {
    const elem = global.elementFunction(event);

    elem('debris', 122, 138, '?');
    elem('netherite', 124, 191, 'Nr');
    elem('pure_netherite', 124, 187, '*Nr*');
});
