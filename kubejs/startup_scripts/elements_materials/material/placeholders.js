// priority: 1000
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    ['mystery', 'star', 'dragon', 'excited', 'soul', 'riftic', 'faetic'].forEach((elem) => {
        event.create(elem).element(GTElements.get(elem));
    });
});
