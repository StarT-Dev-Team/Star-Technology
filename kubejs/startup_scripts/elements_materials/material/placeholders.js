// priority: 5000
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    ['mystery', 'star', 'dragon', 'excited', 'soul', 'riftic', 'faetic', 'akreyrium'].forEach((elem) => {
        event.create(elem).element(GTElements.get(elem));
    });
});
