GTCEuStartupEvents.registry('gtceu:element', (event) => {
    const elem = global.elementFunction(event);

    elem('mystery', -1, 1, '?');
    elem('excited', -1, 1, '*');
    elem('skystone', -1, 12, 'Sk');
    elem('fluix', -1, 18, 'Fx');
    elem('star', -1, 152, '✧');
    elem('soul', -1, 1, 'Ⱉ');
});
