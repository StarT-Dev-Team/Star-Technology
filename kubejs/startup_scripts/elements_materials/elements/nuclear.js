GTCEuStartupEvents.registry('gtceu:element', (event) => {
    const elem = global.elementFunction(event);

    elem('uranium_233', 92, 141, 'U²³³');
    elem('plutonium_238', 94, 144, 'Pu²³⁸');
    elem('plutonium_244', 94, 150, 'Pu²⁴⁴');
    elem('americium_241', 95, 146, 'Am²⁴¹');
    elem('curium_244', 96, 148, 'Cm²⁴⁴');
    elem('californium_252', 98, 154, 'Cf²⁵²');
    elem('einsteinium_253', 99, 154, 'Es²⁵³');
});
